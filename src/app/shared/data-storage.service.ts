import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { recipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: recipeService){}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-91c4e.firebaseio.com/recipes.json',recipes).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
        this.http.get<Recipe[]>('https://ng-course-recipe-book-91c4e.firebaseio.com/recipes.json').subscribe(recipes => {
            console.log(recipes);
            this.recipeService.setRecipes(recipes);
        });
    }
}