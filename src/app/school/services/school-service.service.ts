import { Injectable } from '@angular/core';
import { LogServiceService } from './log-service.service';

@Injectable()
// {
//   providedIn: 'root',
//
// }
export class SchoolServiceService {
  classes = [
    { name: 'Class 11', grade: 11, status: true },
    { name: 'Class 12', grade: 12, status: true },
    { name: 'Class 13', grade: 13, status: true },
  ];

  constructor(private logServiceService: LogServiceService) {}

  showClassName(className: String) {
    alert(`Welcome class ${className}`);
  }

  addNewClass() {
    this.classes.push({
      name: `Class 
       
      ${Math.floor(Math.random() * 20) + 1}`,
      grade: Math.floor(Math.random() * 20) + 1,
      status: false,
    });

    console.log(this.classes);

    this.logServiceService.classCreationLogMsg();
  }
}
