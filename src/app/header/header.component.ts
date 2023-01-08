import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers: [RoomsService],
})
export class HeaderComponent implements OnInit {
  constructor(private _roomSevice: RoomsService) {}

  title = '';
  roomList: any;

  ngOnInit(): void {
    // this.title="new Title";
    this.roomList = this._roomSevice.getRooms();
  }
}
