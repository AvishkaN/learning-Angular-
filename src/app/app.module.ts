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
import { Comp1Component } from './school/comp1/comp1.component';
import { Comp2Component } from './school/comp2/comp2.component';
import { FormsModule } from '@angular/forms';
import { Comp1ServiceService } from './school/comp1-service.service';

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
    Comp1Component,
    Comp2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
    Comp1ServiceService,
    LogServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
