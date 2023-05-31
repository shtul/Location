import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location-service.service';

@Component({
  selector: 'app-space-station',
  templateUrl: './space-station.component.html',
  styleUrls: ['./space-station.component.css']
})
export class SpaceStationComponent implements OnInit {

  constructor(private locationService: LocationService) { }
  message: string = "";
  isFileSaved: any = false;
  isCurrentlocationdataSaved: boolean = false;
  ngOnInit(): void {
  }
  saveLocation() {
    this.locationService.saveLocationData().subscribe(
      data => {
        this.isFileSaved = data;
        this.message = this.isFileSaved == true ? "Current location saved Succesfully!" : "Failed to save current location data";
        setTimeout(() => { location.reload() }, 2000);
      })
  }

  checkLocationdataInService() {
    this.isCurrentlocationdataSaved = this.locationService.currentLocationList.length > 0 ? true : false;
    return this.isCurrentlocationdataSaved;
  }
}
