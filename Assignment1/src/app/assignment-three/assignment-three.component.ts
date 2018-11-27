import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  showDetails = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    this.logs.push('hey');
  }

  getBackground() {
    if (this.logs.length > 5) {
      return 'blue';
    } else {
      return 'white';
    }
  }

}
