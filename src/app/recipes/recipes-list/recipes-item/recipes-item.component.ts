import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeServices } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeServices:RecipeServices ) {
   }

  ngOnInit() {

  }
  

  onSelected(){
    this.recipeServices.recipeSelected.emit(this.recipe);
  }  

}
