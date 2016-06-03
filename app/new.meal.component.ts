import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Create Meal:</h3>
    <input placeholder="Description" class="input-lg" #description>
    <input placeholder="Details" class="input-lg" #details>
    <input placeholder="Calories" class="input-lg" #calories>
    <button (click)="addMeal(description, details, calories)">Add</button>
  </div>
  `
})

export class newMealComponent {
  public onSubmitNewMeal : EventEmitter<String>;
  // public onSubmitNewMeal : EventEmitter<string,string,number>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }

  addMeal(description : HTMLInputElement, details : HTMLInputElement, calories : HTMLInputElement){
    console.log(description.value, details.value, calories.value);
    this.onSubmitNewMeal.emit(description.value);
    // this.onSubmitNewMeal.emit(description.value, details.value, calories.value);
    description.value = "";
    details.value = "";
    calories.value = "";
  }

}
