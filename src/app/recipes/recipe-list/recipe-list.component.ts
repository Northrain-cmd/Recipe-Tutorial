import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipesService) { }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
   this.subscription = this.recipeService.recipeChanged.subscribe(recipes => {
      this.recipes = recipes
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
