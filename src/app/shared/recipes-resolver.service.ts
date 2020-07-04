import { Injectable } from '@angular/core';
import { Resolve, RouterState, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { DataStorageService } from './data-storage.service';
import { RecipesService } from '../services/recipes.service';

@Injectable({
    providedIn: "root"
})
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private dataStorage: DataStorageService, private recipeService: RecipesService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();
        if(recipes.length === 0) {
            return this.dataStorage.fetchRecipes();
        }
        return recipes
    }
}