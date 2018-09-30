import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() itemSelected=new EventEmitter<Recipe>();
 recipes: Recipe[] = [ 
    new Recipe('Test','This is description','https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg'),
    new Recipe('Test','This is description','http://www.mstar.com.my/~/media/upload/2014/07/04/21/51/spageti.ashx?w=620&h=413&crop=1&/')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSendItemAgain(data:Recipe){
    this.itemSelected.emit(data);
  }
}
