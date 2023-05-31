import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Const } from '../core/const';
import { CurrentLocation } from '../core/ICurrentLocation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ' })
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  currentLocationList: CurrentLocation[] = []
  constructor(
    private http: HttpClient
  ) { }
  getCurrentLocation(): Observable<any> {
    return this.http.get(environment.API_URL + Const.Current_Location)
  }
  saveLocationData() {
    return this.http.post(environment.API_URL + Const.Save_Location,
      {
        CurrentLocation:this.currentLocationList
      },httpOptions);
  }
}
