import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipesService) { }

  private initForm() {
    let recipeName = this.editMode 
      ? this.recipeService.getRecipe(this.id).name
      : '' ;
      let recipeImage = this.editMode 
      ? this.recipeService.getRecipe(this.id).imagePath
      : '' ;
      let recipeDesc = this.editMode 
      ? this.recipeService.getRecipe(this.id).description
      : '' ;
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'image': new FormControl(recipeImage),
      'desc': new FormControl(recipeDesc),
    })
  }
  onSubmit(){
    console.log(this.recipeForm)
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.editMode = ! (params['id'] === undefined);
      this.initForm();
    })
  }

}
