import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    //add new data into ingredients
    ingrredientsChanged= new Subject<Ingredient[]>();
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
        this.ingrredientsChanged.next(this.ingredients.slice());
    }

    addIngredient(ingredient:Ingredient[]){
        // for (let ingredient of this.ingredients){
        //     this.addIngredients(ingredient);
        // }

        this.ingredients.push(...ingredient);
        this.ingrredientsChanged.next(this.ingredients.slice());
    }

}