import {  Pipe, PipeTransform } from 'angular2/core';
import {  Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var caloriesAmount = args[0];
    if (caloriesAmount > 500){
      return input.filter(function(meal){
        return meal.calories >= 500;
      });
    } else if (caloriesAmount < 500){
      return input.filter(function(meal){
        return meal.calories <= 500;
      });
    } else {
      return input
    };
  }
}
