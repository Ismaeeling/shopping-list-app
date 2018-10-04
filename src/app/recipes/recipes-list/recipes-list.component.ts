import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 recipes: Recipe[] ;
  constructor(private recipeServices:RecipeServices,
  private route:Router,
  private router:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeServices.getRecipe();
  }

  onSendToEdit(){
    this.route.navigate(['new'],{relativeTo:this.router});
  }
}
