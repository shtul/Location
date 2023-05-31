import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CurrentLocation } from 'src/app/core/ICurrentLocation';
import { LocationService } from 'src/app/services/location-service.service';
import { LocationNoteComponent } from '../location-note/location-note.component';

@Component({
  selector: 'app-current-location',
  templateUrl: './current-location.component.html',
  styleUrls: ['./current-location.component.css']
})
export class CurrentLocationComponent implements OnInit {
  currentLocation!: CurrentLocation;
  destroy$ = new Subject<boolean>()
  time: any
  @ViewChild("LocationNoteComponent")
  locationNote!: LocationNoteComponent;
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    // this.currentLocation={
    //   iss_position:{
    //     latitude:"",
    //     longitude:"",
    //   },
    //   timestamp:1,
    //   message:""
    // } as  CurrentLocation;
    this.time = setInterval(() => {
      this.showLocation();
    }, 5000)
  }

  showLocation(): void {
    this.locationService.getCurrentLocation().pipe(takeUntil(this.destroy$)).subscribe(data =>{
      this.currentLocation = data
    }
    )
  }
  openlocatonNotePopup(){
    this.locationNote.openPopup(this.currentLocation);
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    if (this.time) {
      clearInterval(this.time)
    }
  }
}
