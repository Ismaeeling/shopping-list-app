import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
 recipes: Recipe[] ;
 subscription:Subscription;

  constructor(private recipeServices:RecipeServices,
  private route:Router,
  private router:ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.recipeServices.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    )
    this.recipes=this.recipeServices.getRecipe();
  }

  onSendToEdit(){
    this.route.navigate(['new'],{relativeTo:this.router});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
