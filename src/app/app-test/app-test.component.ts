import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>Welcome {{ name }}!</div>`,
  styles: [``],
})
export class AppTestComponent {
  public name = 'Sathiyameyjeyam';

  constructor() {}

  ngOnInit() {}
}
