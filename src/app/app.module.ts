import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { SchoolComponent } from './school/school.component';
import { Class1Component } from './school/class1/class1.component';
import { Class2Component } from './school/class2/class2.component';
import { AddNewClassComponent } from './school/add-new-class/add-new-class.component';
import { LogServiceService } from './school/services/log-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    SchoolComponent,
    Class1Component,
    Class2Component,
    AddNewClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
    LogServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
