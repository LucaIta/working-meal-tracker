import { Component } from 'angular2/core';

@Component({ //component decorator defining selector and template
  selector: 'meals-display',
  inputs: ["meals"],
  template: `
  <h4 *ngFor="#currentMeal of meals">
  <h1>{{currentMeal.name}}</h1>
  <h4>
  `
})

export class MealsDisplayComponent {

}
