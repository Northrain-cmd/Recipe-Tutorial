import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
   ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Oranges',2)
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>()

  constructor() { }

  getIngredients() {
    return [...this.ingredients]
  }
  addToCart(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      this.ingredients.push(ingredient);
    });
    this.ingredientsChanged.emit([...this.ingredients])
  }
  addIngredient(ingredient:{name: string, amount: number}) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientsChanged.emit([...this.ingredients])
  }
}
