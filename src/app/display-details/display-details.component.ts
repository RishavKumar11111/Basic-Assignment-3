import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  displayParagraph = false;
  counter = 0;
  btnArray = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleParagraph() {
    this.counter++;
    this.displayParagraph = this.displayParagraph == false ? true: false;
    this.btnArray.push(this.counter);
  }
}
