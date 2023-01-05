import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-pipes',
  template: `
    <h2>Welcome {{ name }}</h2>
    <br /><br />
    String Pipes <br />
    <h2>{{ name | lowercase }}</h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ 'how are you' | titlecase }}</h2>
    <h2>{{ 'how are you' | slice : 8 : 11 }}</h2>

    JSON Pipes <br />
    <h2>{{ user | json }}</h2>

    <h2>{{ 5.987 | number : '1.2-3' }}</h2>
    <h2>{{ 5.987 | number : '2.4-5' }}</h2>
    <h2>{{ 5.987 | number : '3.1-2' }}</h2>

    <h2>{{ 0.25 | percent }}</h2>

    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 0.25 | currency : 'GPB' }}</h2>
    <h2>{{ 0.25 | currency : 'GPB' : 'code' }}</h2>

    <h2>{{ date }}</h2>
    Short Date
    <h2>{{ date | date : 'short' }}</h2>
    <h2>{{ date | date : 'shortDate' }}</h2>
    <h2>{{ date | date : 'shortTime' }}</h2>
    Medium Date
    <h2>{{ date | date : 'medium' }}</h2>
    <h2>{{ date | date : 'mediumDate' }}</h2>
    <h2>{{ date | date : 'mediumTime' }}</h2>
    Long Date
    <h2>{{ date | date : 'long' }}</h2>
    <h2>{{ date | date : 'longDate' }}</h2>
    <h2>{{ date | date : 'longTime' }}</h2>
  `,
  styles: [],
})
export class CompPipesComponent {
  public name = 'SathiyameyJeyam';
  public user = {
    name: 'Masvi',
    age: 43,
    country: 'Singapore',
  };
  public date = new Date();
}
