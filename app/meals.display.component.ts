import { Component } from 'angular2/core';
import { newMealComponent } from './new.meal.component';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meals-display',
  directives: [newMealComponent],
  pipes: [CaloriesPipe],
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="all">Show all meals</option>
    <option value="unhealty">Show only unhealty foods</option>
    <option value="healthy">Show only healthy foods</option>
  </select>

  <h4 *ngFor="#currentMeal of mealList | calories:caloriesSelector">
  <h3 (click)="mealClicked(currentMeal.name)">{{currentMeal.name}}</h3>
  <h5>{{currentMeal.details}}</h5>
  <h5>{{currentMeal.calories}}</h5>
  </h4>
  <new-meal (onSubmitNewMeal)="createNewMeal($event)"></new-meal>
  `
})

export class MealsDisplayComponent {
  public mealList : Meal[] = [];
  public caloriesSelector : string;
  createNewMeal(mealInfoArray : string[]){
    console.log(mealInfoArray);

    this.mealList.push(new Meal(mealInfoArray[0],mealInfoArray[1],parseInt(mealInfoArray[2]),this.mealList.length));
    console.log(this.mealList);
  }
  mealClicked(name){
    console.log(name);
  }
  onChange(filterOption){
    this.caloriesSelector = filterOption;
    console.log(this.caloriesSelector);
  }
}
