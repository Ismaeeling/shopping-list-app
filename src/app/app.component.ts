import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  onSelectedFeature= 'recipe';
  onNavigate(feature:string){
    this.onSelectedFeature=feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA0N34gC3PKupnL4uC1I5tUiwPK-whepZI",
      authDomain: "my-first-app-17ece.firebaseapp.com"
    })
  }
}
