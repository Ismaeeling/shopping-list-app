import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeService:RecipeServices) { }

  ngOnInit() {
  }

  onAddToSl(){
    this.recipeService.onAddSl(this.recipe.ingredients);
  }
}
