import { Component, OnInit } from '@angular/core';
import { Comp1ServiceService } from '../comp1-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  selectedValue: string = '';

  constructor(private _Comp1ServiceService: Comp1ServiceService) {}

  ngOnInit(): void {
    this._Comp1ServiceService.dataEmiter.subscribe((value) => {
      this.selectedValue = value;
    });
  }
}
