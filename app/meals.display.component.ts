import { Component } from 'angular2/core';
import { newMealComponent } from './new.meal.component';
import { Meal } from './meal.model';

@Component({
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
  public mealList : Meal[] = [];
  createNewMeal(mealInfoArray : string[]){
    console.log(mealInfoArray);
    this.mealList.push(new Meal(mealInfoArray[0],mealInfoArray[1],parseInt(mealInfoArray[2])));
    console.log(this.mealList);
  }
}
