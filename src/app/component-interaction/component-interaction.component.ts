import { Component } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <p>
      This the Parent component Here is the Child component
      <app-comp-child
        (childEvent)="message = $event"
        [parentData]="passingValue"
      ></app-comp-child>
    </p>
    <p>
      This is the message from the child to parent as follow:
      {{ message }}
    </p>
  `,
  styleUrls: ['./component-interaction.component.css'],
})
export class ComponentInteractionComponent {
  public passingValue = 'Hello Childrens!';
  public message: any;
}
