import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeoLocationService } from "app/shared/geo-location.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Demo App';

  get valueFromService(): any { return this._geoLocationService.placesMatchingSearchText; };

  constructor(private _geoLocationService: GeoLocationService) {
    // use for service injection
  }

  ngOnInit() {
    // use for state cleanup

    this._geoLocationService.findPlaceByName('murm');
  }

  ngOnDestroy(): void {
    // use for resourse destruction/cleanup
  }

}

