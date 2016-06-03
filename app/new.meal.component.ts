import { Component, EventEmitter } from 'angular2/core';

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
  public mealInfoArray : string[];
  public onSubmitNewMeal : EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }

  addMeal(description : HTMLInputElement, details : HTMLInputElement, calories : HTMLInputElement){
    console.log(description.value, details.value, calories.value);
    this.mealInfoArray = [description.value, details.value, calories.value];
    this.onSubmitNewMeal.emit(this.mealInfoArray);
    description.value = "";
    details.value = "";
    calories.value = "";
  }

}
