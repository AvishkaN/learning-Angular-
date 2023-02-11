import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
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

  arr1 = [1, 2, 3, 4, 5, 6];
  arr2 = [7, 8, 9, 10];

  // myObserver = new Observable((observer) => {
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   observer.next(4);
  //   observer.error(new Error('something went wrong 💣💣 '));
  //   observer.next(5);
  // });

  // myObserver = Observable.create((observer: any) => {
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   observer.next(4);
  //   observer.error(new Error('something went wrong 💣💣 '));
  //   observer.next(5);
  // });

  // myObserver = of(this.arr1, this.arr2);

  myObserver = from(this.arr1);

  ngOnInit(): void {
    this.classes = this._schoolServiceService.classes;

    this.myObserver.subscribe(
      (value: any) => {
        console.log(value);
      },
      (error: any) => {
        alert(error.message);
      },
      () => {
        console.log('👉 all values return successfully');
      }
    );
  }
}
