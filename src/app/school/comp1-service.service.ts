import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Comp1ServiceService {
  dataEmiter = new EventEmitter<string>();

  constructor() {}

  ChangeServiceValue(data: string) {
    this.dataEmiter.emit(data);
  }
}
