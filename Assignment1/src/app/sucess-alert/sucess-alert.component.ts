import { Component, OnInit } from '@angular/core';
import { $ } from '../../../node_modules/protractor';

@Component({
  selector: 'app-sucess-alert',
  templateUrl: './sucess-alert.component.html',
  styleUrls: ['./sucess-alert.component.css']
})
export class SucessAlertComponent implements OnInit {

  successMessage: string;
  constructor() { }

  ngOnInit() {
    this.successMessage = 'This is a success message';
  }

}
