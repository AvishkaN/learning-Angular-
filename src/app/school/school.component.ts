import { Component, OnInit } from '@angular/core';
import { LogServiceService } from './services/log-service.service';
import { SchoolServiceService } from './services/school-service.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
  providers: [SchoolServiceService],
})
export class SchoolComponent implements OnInit {
  constructor(private _schoolServiceService: SchoolServiceService) {}

  classes: any;

  ngOnInit(): void {
    this.classes = this._schoolServiceService.classes;
  }
}
