import { Component, OnInit } from '@angular/core';
import { Comp1ServiceService } from '../comp1-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  inputValue: string = '';

  constructor(private _Comp1ServiceService: Comp1ServiceService) {}

  ngOnInit(): void {}

  handleClick() {
    console.log(this.inputValue);

    this._Comp1ServiceService.ChangeServiceValue(this.inputValue);
  }
}
