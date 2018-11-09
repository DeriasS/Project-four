import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  // property:class recipe
  recipes:Recipe[]=[
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Recipe('A Test Recipe two', 'This is simply a test', '../src/app/img/burger.jpg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredient:Ingredient[]){
    this.slsService.addIngredients(ingredient);
  }

constructor(private slsService: ShoppingListService) { }

}
