import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Comp1ServiceService {
  // dataEmiter = new EventEmitter<string>();
  dataEmiter = new Subject<string>();

  constructor() {}

  ChangeServiceValue(data: string) {
    // this.dataEmiter.emit(data);
    this.dataEmiter.next(data);
  }
}
