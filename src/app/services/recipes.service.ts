//import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {
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
  getRecipes() {
    return [...this.recipes];
  }
  getRecipe(id: number) {
    return [...this.recipes][id];
  }

  constructor() {}
}
