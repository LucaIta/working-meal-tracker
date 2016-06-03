import { Component } from 'angular2/core';
import { MealsDisplayComponent } from './meals.display.component';
import { Meal } from './meal.model.ts';


@Component({
  selector: 'my-app',
  directives: [MealsDisplayComponent],
  template: `
   <div class="container">
     <h1>Meal Tracker</h1>
     <meals-display [meals]="mealsList"></<meals-display>>
   </div>
  `
})

export class AppComponent {
  public mealsList: Meal[];
  constructor(){
    this.mealsList = [
      new Meal("Breakfast","This is breakfast", 100),
      new Meal("Lunch","This is Lunch", 200),
      new Meal("Dinner","This is Dinner", 300),
    ];
  }
}
