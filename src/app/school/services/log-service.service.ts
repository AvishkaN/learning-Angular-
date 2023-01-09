import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
export class LogServiceService {
  constructor() {}

  classCreationLogMsg() {
    console.log('new class creation ------> ');
  }
}
