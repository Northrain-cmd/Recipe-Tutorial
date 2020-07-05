import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { DefaultPageComponent } from './recipes/recipe-detail/default-page/default-page.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './shared/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path:'auth',component: AuthComponent},
  {path: 'recipes', component: RecipesComponent, children: [
    {path:'',component: DefaultPageComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
  ]},
 
  {path: 'shopping-list', component: ShoppingListComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
