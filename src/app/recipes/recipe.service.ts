import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class recipeService {
recipeSelected = new EventEmitter<Recipe>();

constructor(private shoppingListService:  ShoppingListService) {
}

private recipes: Recipe[] = [
        new Recipe('A Tasty Schnitzel','This is a Tasty Schnitzel',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOCRuvOXCRmUfaudDZG9Y9pMtmjrGuRuOv-Jpkpbvt2hO_goqZ&usqp=CAU',
     [
         new Ingredient('Meat', 1),
         new Ingredient('French Fries', 20)
     ]),
     new Recipe('A Tasty Burger','This is a Amazing Burger',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzIEyDsXISn8n__OSh_tl_R73aS0HgIMGGBtFqVf6sHGVXK4g3&usqp=CAU',
     [
         new Ingredient('Buns', 2),
         new Ingredient('Meat', 2)
     ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
    
    addIngredientsToSHoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}