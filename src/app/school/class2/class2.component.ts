import { Component, OnInit } from '@angular/core';
import { SchoolServiceService } from '../services/school-service.service';

@Component({
  selector: 'app-class2',
  templateUrl: './class2.component.html',
  styleUrls: ['./class2.component.scss'],
  // providers: [SchoolServiceService],
})
export class Class2Component implements OnInit {
  constructor(private _schoolServiceService: SchoolServiceService) {}

  ngOnInit(): void {}

  handleOnclick() {
    this._schoolServiceService.showClassName('Class 2');
  }
}
