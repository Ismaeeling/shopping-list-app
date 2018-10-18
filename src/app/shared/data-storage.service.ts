import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { RecipeServices } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model"; 
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DataStorageService{
    constructor(private http:Http, private recipeServices:RecipeServices,
                private authService:AuthService){}

    storeRecipe(){
        const token=this.authService.getToken();
        return this.http.put('https://my-first-app-17ece.firebaseio.com/recipes.json?auth='+token,this.recipeServices.getRecipe())
    }

    getRecipe(){
        const token=this.authService.getToken();
        
        return this.http.get('https://my-first-app-17ece.firebaseio.com/recipes.json?auth='+ token)
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