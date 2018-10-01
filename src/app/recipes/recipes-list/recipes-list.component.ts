import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 recipes: Recipe[] ;
  constructor(private recipeServices:RecipeServices) { }

  ngOnInit() {
    this.recipes=this.recipeServices.getRecipe();
  }
}
