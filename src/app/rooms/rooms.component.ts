import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
  Optional,
  Inject,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { localStorageToken } from '../localstorage.token';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'hilton hotel';
  hotelRomms = 25;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 5,
    avilableRooms: 10,
    bookedRooms: 15,
  };
  roomList: RoomList[] = [];
  selectedRoom!: RoomList;

  title = 'Room List';

  @ViewChild(HeaderComponent, { static: true })
  headerCompenent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(
    private _roomSevice: RoomsService,
    @Inject(localStorageToken) private localStorage1: any
  ) {}

  // ngDoCheck(){
  // }

  ngOnInit(): void {
    this.roomList = this._roomSevice.getRooms();

    this.localStorage1.setItem('name', 'done ');

    console.log(this.localStorage1);
  }

  ngAfterViewInit() {
    // this.headerCompenent.title='RRRR';
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'New Title';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 50,
      roomType: 'Deluxe Room 50',
      amenities: 'Air conditioner, Free wie',
      price: 6000,
      photos:
        'https://images.luxuryhotel.guru/hotelimage.php?p_id=4171893&code=0a59b6cd71094ff862ae6b57ccae75d1&webpage=amazing-hotel-suites.com&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F185181086.jpg%3Fk%3Da12281d2c6f7bc28fa39129e0b1b20601d791e38860bff0f4b84820f249f5f77%26o%3D',
      checkinTime: new Date(),
      checkoutTime: new Date('12-Nov-221'),
    };

    // this.roomList.push(room);

    this.roomList = [...this.roomList, room];
  }
}
