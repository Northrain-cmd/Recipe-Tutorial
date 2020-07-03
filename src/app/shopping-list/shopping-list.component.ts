import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;
  selectedIngredient: Ingredient;
  onIngredientAdded(ingredient) {
    this.shoppingListService.addIngredient(ingredient);
  }
  ingredientUpdate(object) {
    this.shoppingListService.updateIngredient(object)
  }
  constructor(private shoppingListService: ShoppingListService) {

   }
  onSelect(index) {
    this.shoppingListService.selectIngredient(index);
  }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(ingredients => {
      this.ingredients = ingredients;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
