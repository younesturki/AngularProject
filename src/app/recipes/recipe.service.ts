import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class recipeService {
recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simply a test',
     'https://www.supermarchesmatch.fr/themes/smatch/img/boite-recettes.png')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
    
}