import { Component, OnInit } from '@angular/core';
import { SchoolServiceService } from '../services/school-service.service';

@Component({
  selector: 'app-add-new-class',
  templateUrl: './add-new-class.component.html',
  styleUrls: ['./add-new-class.component.scss'],
  // providers: [SchoolServiceService],
})
export class AddNewClassComponent implements OnInit {
  constructor(private _schoolServiceService: SchoolServiceService) {}

  ngOnInit(): void {}

  addNewClass() {
    this._schoolServiceService.addNewClass();
  }
}
