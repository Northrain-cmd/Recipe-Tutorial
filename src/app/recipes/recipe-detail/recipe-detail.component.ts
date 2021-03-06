import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(
    private slService: ShoppingListService,
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onAddToCart() {
    this.slService.addToCart(this.recipe.ingredients);
  }
  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.recipe = this.recipeService.getRecipe(params['id']);
    });
  }
}
