import {
  AfterContentChecked,
  AfterViewInit,
  ElementRef,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>hello<h1>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test2';
  role = 'User';

  @ViewChild('hotelName', { static: true }) hotelName!: ElementRef;
  // @ViewChild('user',{ read:ViewContainerRef}) vcr!:ViewContainerRef;

  // ngAfterViewInit(){
  //   const componnetRef=this.vcr.createComponent(RoomsComponent);
  //   componnetRef.instance.rooms.avilableRooms=256;
  // }

  ngOnInit() {
    // this.hotelName.nativeElement.innerText="7897897 Hilton HoteL"
  }
}
