import { Inject, Injectable } from '@angular/core';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { Room, RoomList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 29,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free wie',
      price: 2000,
      photos:
        'https://images.luxuryhotel.guru/hotelimage.php?p_id=4171893&code=0a59b6cd71094ff862ae6b57ccae75d1&webpage=amazing-hotel-suites.com&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F185181086.jpg%3Fk%3Da12281d2c6f7bc28fa39129e0b1b20601d791e38860bff0f4b84820f249f5f77%26o%3D',
      checkinTime: new Date(),
      checkoutTime: new Date('12-Nov-221'),
    },
    {
      roomNumber: 21,
      roomType: 'Deluxe Room 2',
      amenities: 'Air conditioner, Free wie',
      price: 4000,
      photos:
        'https://images.luxuryhotel.guru/hotelimage.php?p_id=4171893&code=0a59b6cd71094ff862ae6b57ccae75d1&webpage=amazing-hotel-suites.com&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F185181086.jpg%3Fk%3Da12281d2c6f7bc28fa39129e0b1b20601d791e38860bff0f4b84820f249f5f77%26o%3D',
      checkinTime: new Date(),
      checkoutTime: new Date('12-Nov-221'),
    },
    {
      roomNumber: 22,
      roomType: 'Deluxe Room 3',
      amenities: 'Air conditioner, Free wie',
      price: 5000,
      photos:
        'https://images.luxuryhotel.guru/hotelimage.php?p_id=4171893&code=0a59b6cd71094ff862ae6b57ccae75d1&webpage=amazing-hotel-suites.com&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F185181086.jpg%3Fk%3Da12281d2c6f7bc28fa39129e0b1b20601d791e38860bff0f4b84820f249f5f77%26o%3D',
      checkinTime: new Date(),
      checkoutTime: new Date('12-Nov-221'),
    },
    {
      roomNumber: 23,
      roomType: 'Deluxe Room 4',
      amenities: 'Air conditioner, Free wie',
      price: 6000,
      photos:
        'https://images.luxuryhotel.guru/hotelimage.php?p_id=4171893&code=0a59b6cd71094ff862ae6b57ccae75d1&webpage=amazing-hotel-suites.com&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F185181086.jpg%3Fk%3Da12281d2c6f7bc28fa39129e0b1b20601d791e38860bff0f4b84820f249f5f77%26o%3D',
      checkinTime: new Date(),
      checkoutTime: new Date('12-Nov-221'),
    },
    {
      roomNumber: 21,
      roomType: 'Deluxe Room 4',
      amenities: 'Air conditioner, Free wie',
      price: 6000,
      photos:
        'https://images.luxuryhotel.guru/hotelimage.php?p_id=4171893&code=0a59b6cd71094ff862ae6b57ccae75d1&webpage=amazing-hotel-suites.com&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F185181086.jpg%3Fk%3Da12281d2c6f7bc28fa39129e0b1b20601d791e38860bff0f4b84820f249f5f77%26o%3D',
      checkinTime: new Date(),
      checkoutTime: new Date('12-Nov-221'),
    },
  ];
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(config);
  }

  getRooms() {
    return this.roomList;
  }
}
