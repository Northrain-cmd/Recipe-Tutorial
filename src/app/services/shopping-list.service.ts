import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';
export class ShoppingListService {
   ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Oranges',2)
  ];
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientSelected = new Subject<number>();
  constructor() { }

  getIngredients() {
    return [...this.ingredients]
  }
  selectIngredient(index) {
     this.ingredientSelected.next(index)
  }
  getIngredient(index) {
    return this.ingredients[index]
  }
  updateIngredient(object: {index: number ,name: string, amount: number}) {
    const updatedIngredient = new Ingredient(object.name, object.amount);
    this.ingredients.splice(object.index,1,updatedIngredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }
  deleteIngredient(index) {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next([...this.ingredients]);
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
