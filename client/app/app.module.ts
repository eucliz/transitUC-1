import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { AgmCoreModule } from '@agm/core';

import { DevicesComponent } from './components/devices/devices.component';
import { PositionsComponent } from './components/positions/positions.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, AgmCoreModule.forRoot({ apiKey:'AIzaSyALVN1iIhQwVG55k76y8QE2B8YlBvENRnQ' })],
  declarations: [ AppComponent, DevicesComponent, PositionsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
