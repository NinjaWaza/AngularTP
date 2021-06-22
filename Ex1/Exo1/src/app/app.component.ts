import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" id="firstInput" name="firstInput" [(ngModel)]="inputValue">
    <br /><br />
    <span style="border: 1px solid black">{{inputValue}}</span>
    <br /><br />
    <button (click)="inputValue = ''">Clear</button>
    <app-list-component></app-list-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exo1';
  inputValue : String;
}
