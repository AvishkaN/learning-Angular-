import { Component, Input, OnInit,EventEmitter, Output, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {

  @Input() rooms:RoomList[]=[];
  @Input() title:string='';

  @Output() greetEvent =new EventEmitter();

  name ='av';

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

  ngOnInit(): void {
  }

 

  callParent(room:RoomList){
    this.greetEvent.emit(room);
  }

}
