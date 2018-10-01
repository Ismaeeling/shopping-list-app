import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeServices{
    //make a services for the selected item
    recipeSelected= new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [ 
        new Recipe('Test','This is description','https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg'),
        new Recipe('Test','This is description','http://www.mstar.com.my/~/media/upload/2014/07/04/21/51/spageti.ashx?w=620&h=413&crop=1&/')
      ];

    

    //make recipe available from outside components
    getRecipe(){
          return this.recipes.slice();
      }
}