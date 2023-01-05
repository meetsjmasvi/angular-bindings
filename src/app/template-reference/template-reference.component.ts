import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  template: `
    <h2>Welcome {{ name }}</h2>
    <input #refName type="text" />
    <button (click)="logMessage(refName)">Check Template Reference</button>
  `,
  styles: [],
})
export class TemplateReferenceComponent {
  public name = 'SathiyameyJeyam';

  constructor() {}

  logMessage(inputRef: HTMLInputElement) {
    console.log(`just for fun ${inputRef.value}`);
  }
}
