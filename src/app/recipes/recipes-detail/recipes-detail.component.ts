import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;

  constructor(private recipeService:RecipeServices,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=>{
        this.id=+param['id'];
        this.recipe=this.recipeService.getRecipes(this.id);
      }
    );
  }

  onAddToSl(){
    this.recipeService.onAddSl(this.recipe.ingredients);
  }

  onSendToEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route});
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }
}
