import { Component, OnInit } from '@angular/core';
import { SchoolServiceService } from '../services/school-service.service';

@Component({
  selector: 'app-class1',
  templateUrl: './class1.component.html',
  styleUrls: ['./class1.component.scss'],
  // providers: [SchoolServiceService],
})
export class Class1Component implements OnInit {
  constructor(private _schoolServiceService: SchoolServiceService) {}

  ngOnInit(): void {}

  handleOnclick() {
    this._schoolServiceService.showClassName('Class 1');
  }
}
