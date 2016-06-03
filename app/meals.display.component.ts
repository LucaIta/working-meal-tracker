import { Component } from 'angular2/core';
import { newMealComponent } from './new.meal.component';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe';
import { EditMealDetails } from './edit.meal.details.component';

@Component({
  selector: 'meals-display',
  directives: [newMealComponent,EditMealDetails],
  pipes: [CaloriesPipe],
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="all">Show all meals</option>
    <option value="unhealty">Show only unhealty foods</option>
    <option value="healthy">Show only healthy foods</option>
  </select>

  <h4 *ngFor="#currentMeal of mealList | calories:caloriesSelector">
  <div class="meal">
    <h3 (click)="mealClicked(currentMeal)">{{currentMeal.name}}</h3>
    <h5>{{currentMeal.details}}</h5>
    <h5>{{currentMeal.calories}}</h5>
  </div>
  </h4>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  <hr>
  <new-meal (onSubmitNewMeal)="createNewMeal($event)"></new-meal>
  `
})

export class MealsDisplayComponent {
  public mealList : Meal[] = [new Meal("Lunch","I had Lunch",9,0)]; // need to remove this meal
  public selectedMeal : Meal;
  public caloriesSelector : string;
  createNewMeal(mealInfoArray : string[]){
    this.mealList.push(new Meal(mealInfoArray[0],mealInfoArray[1],parseInt(mealInfoArray[2]),this.mealList.length));
  }
  mealClicked(Meal){
    this.selectedMeal = Meal;
  }
  onChange(filterOption){
    this.caloriesSelector = filterOption;
  }
}
