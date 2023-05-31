import { Component, OnInit } from '@angular/core';
import { CurrentLocation } from 'src/app/core/ICurrentLocation';
import { LocationService } from 'src/app/services/location-service.service';

@Component({
  selector: 'app-location-note',
  templateUrl: './location-note.component.html',
  styleUrls: ['./location-note.component.css']
})
export class LocationNoteComponent implements OnInit {
  currentLocation!: CurrentLocation;
  displayStyle = "none";
  isEmptyNote?: boolean;
  isNoteSaved:boolean=false;
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
  }
  openPopup(data: CurrentLocation) {
    this.currentLocation = data;
    this.displayStyle = "block";
    this.isNoteSaved=false;
  }
  closePopup() {
    this.displayStyle = "none";
  }
  SaveNote() {
    this.locationService.currentLocationList.push({...this.currentLocation});
    debugger
    this.currentLocation={message:""};
    this.isNoteSaved=true;
    setTimeout(()=>{this.closePopup()},2000);
  }

  CheckIsEmptyNote() {
    return this.currentLocation.message.length>1? true : false;
  }
}
