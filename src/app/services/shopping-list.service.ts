import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';
export class ShoppingListService {
   ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Oranges',2)
  ];
  ingredientsChanged = new Subject<Ingredient[]>();
  constructor() { }

  getIngredients() {
    return [...this.ingredients]
  }
  addToCart(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      this.ingredients.push(ingredient);
    });
    this.ingredientsChanged.next([...this.ingredients])
  }
  addIngredient(ingredient:{name: string, amount: number}) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientsChanged.next([...this.ingredients])
  }
}
