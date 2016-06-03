import { Component } from 'angular2/core';
import { newMealComponent } from './new.meal.component';

@Component({ //component decorator defining selector and template
  selector: 'meals-display',
  inputs: ["meals"],
  directives: [newMealComponent],
  template: `
  <h4 *ngFor="#currentMeal of meals">
  <h3>{{currentMeal.name}}</h3>
  <h5>{{currentMeal.details}}</h5>
  <h5>{{currentMeal.calories}}</h5>
  </h4>
  <new-meal (onSubmitNewMeal)="createNewMeal($event)"></new-meal>
  `
})

export class MealsDisplayComponent {
  createNewMeal(description : string){
    console.log(description);
  // createNewMeal(description : string, details : string, calories : number){
  //   console.log(description,details,calories);
  }
}
