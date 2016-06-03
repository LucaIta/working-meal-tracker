import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
   selector: 'edit-meal-details',
   inputs: ['meal'],
   template:`
   <!-- <h3>edit description of {{meal.name}}</h3> -->
   <h3>Edit here your meal!</h3>
   <input [(ngModel)]="meal.name"/>
   <input [(ngModel)]="meal.details"/>
   <input [(ngModel)]="meal.calories"/>
   `
 })

 export class EditMealDetails {
   public meal: Meal;
 }
