import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
    <h2>{{ name }}</h2>

    <div *ngFor="let color of colors; index as i; even as e; first as f">
      {{ i }} {{ f ? 'First' : 'Next' }} - {{ e ? 'even' : 'odd' }} -
      {{ color }}
    </div>
  `,
  styles: [],
})
export class NgforComponent {
  public name = 'SathiyameyJeyam';
  public colors = ['red', 'green', 'blue', 'yellow', 'orange'];
}
