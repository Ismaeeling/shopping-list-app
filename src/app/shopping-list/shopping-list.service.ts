import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    //add new data into ingredients
    ingrredientsChanged= new EventEmitter<Ingredient[]>();
    //array of data for services
    private ingredients: Ingredient[] =[
        new Ingredient('Malacha',25),
        new Ingredient('Dalbacha',50)
      ];

    getIgredients(){
        return this.ingredients.slice();
    }

    addIngredients(data: Ingredient){
        this.ingredients.push(data);
        this.ingrredientsChanged.emit(this.ingredients.slice());
    }

    addIngredient(ingredient:Ingredient[]){
        // for (let ingredient of this.ingredients){
        //     this.addIngredients(ingredient);
        // }

        this.ingredients.push(...ingredient);
        this.ingrredientsChanged.emit(this.ingredients.slice());
    }

}