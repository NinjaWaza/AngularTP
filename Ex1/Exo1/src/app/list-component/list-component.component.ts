import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  template: `
    <ul *ngIf="!hidden">
      <li>Jean</li>
      <li>Jacques</li>
      <li>Martin</li>
    </ul>
    <button (click)="showHide()">Clear</button>
  `,
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  hidden : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showHide(){
    if(this.hidden){
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }

}
