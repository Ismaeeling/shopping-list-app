import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { RecipeServices } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model"; 


@Injectable()
export class DataStorageService{
    constructor(private http:Http, private recipeServices:RecipeServices){}

    storeRecipe(){
        return this.http.put('https://my-first-app-17ece.firebaseio.com/recipes.json',this.recipeServices.getRecipe())
    }

    getRecipe(){
        return this.http.get('https://my-first-app-17ece.firebaseio.com/recipes.json')
        .pipe(map(
            (response:Response)=>{
                const recipes : Recipe[]=response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients']=[];
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
            (recipes:Recipe[]) =>{               
                this.recipeServices.setRecipe(recipes);
            }
        )
    }
}