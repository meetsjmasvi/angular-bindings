import { Component } from '@angular/core';

@Component({
  selector: 'app-ifdirective',
  template: `
    <h2>Welcome {{ name }}</h2>

    This is one type of if else
    <div *ngIf="dispName; else elseblock">
      <div>If block showing</div>
    </div>

    <ng-template else #elseblock>
      <div>Else Block</div>
    </ng-template>

    <br />
    <br />
    <br />
    Another way of using if else block
    <div *ngIf="dispName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <div>Then Block</div>
    </ng-template>

    <ng-template #elseBlock>
      <div>Else then Block</div>
    </ng-template>
  `,
  styles: [],
})
export class IfdirectiveComponent {
  public name = 'SathiyameyJeyam';
  public dispName = true;
}
