//import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipesService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is just a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
      new Ingredient('Eggs',4),
      new Ingredient('Bread',2),
      new Ingredient('Milk',1)
      ]
    ),
    new Recipe(
      'Another test recipe',
      'This is just a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Bananas',2),
        new Ingredient('Waffles',2),
        new Ingredient('Chocolate',1)
        ]
    ),
  ];
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next([...this.recipes]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes.splice(index,1,newRecipe);
    this.recipeChanged.next([...this.recipes]);
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipeChanged.next([...this.recipes])
  }
  getRecipes() {
    return [...this.recipes];
  }
  getRecipe(id: number) {
    return [...this.recipes][id];
  }

  constructor() {}
}
