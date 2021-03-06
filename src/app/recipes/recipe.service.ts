import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeServices{

    recipeChanged= new Subject<Recipe[]>();
    
    private recipes: Recipe[] = [ 
        new Recipe('Burger','This is chicken burger','https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg',[
            new Ingredient('Chicken',1),
            new Ingredient('French Fries', 5)
        ]),
        new Recipe('Pizza','This is mixed pizza','https://image.afcdn.com/recipe/20151003/20052_w1024h768c1cx480cy300.jpg',[
            new Ingredient('Pepsi', 1)
        ])
      ];

    constructor(private shoppingList:ShoppingListService){}

    setRecipe(recipes:Recipe[]){
        this.recipes= recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    

    //make recipe available from outside components
    getRecipe(){
          return this.recipes.slice();
      }

    getRecipes(index:number){
        return this.recipes[index];
    }

      onAddSl(ingredient:Ingredient[]){
        this.shoppingList.addIngredient(ingredient);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index]= newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }
}