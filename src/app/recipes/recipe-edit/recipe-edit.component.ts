import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  private initForm() {
    const recipe = this.recipeService.getRecipe(this.id);
    let recipeName =  '';
    let recipeImage = '';
    let recipeDesc =  '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
       recipeName =  recipe.name;
       recipeImage = recipe.imagePath;
       recipeDesc =  recipe.description;
      if (recipe.ingredients) {
        recipe.ingredients.forEach((ingredient) => {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        });
      }
  }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      image: new FormControl(recipeImage, Validators.required),
      desc: new FormControl(recipeDesc, Validators.required),
      ingredients: recipeIngredients,
    });
  }
  onDelete(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onCancel() {
    this.router.navigate(['recipes', this.id])
  }
  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.desc,
      this.recipeForm.value.image,
      this.recipeForm.value.ingredients
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
      this.router.navigate(['recipes',this.id]) 
    }  else {
      this.recipeService.addRecipe(newRecipe);
      this.router.navigate(['recipes'])
    }
   
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = !(params['id'] === undefined);
      this.initForm();
    });
  }
}
