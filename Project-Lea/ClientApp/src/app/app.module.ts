import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurrentLocationComponent } from './modules/current-location/current-location.component';
import { LocationNoteComponent } from './modules/location-note/location-note.component';
import { CommonModule } from '@angular/common';
import { SpaceStationComponent } from './modules/space-station/space-station.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentLocationComponent,
    LocationNoteComponent,
    SpaceStationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SpaceStationComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
