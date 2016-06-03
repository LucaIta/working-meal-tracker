import { Component } from 'angular2/core';
import { MealsDisplayComponent } from './meals.display.component';


@Component({
  selector: 'my-app',
  directives: [MealsDisplayComponent],
  template: `
   <div class="container">
     <h1>Meal Tracker</h1>
     <meals-display></meals-display>
   </div>
  `
})

export class AppComponent {

}
