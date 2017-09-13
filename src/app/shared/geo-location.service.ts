import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export const GOOGLE_MAPS_API_KEY = 'AIzaSyAS90sANkxb9xIaE4eUazh8bRYm5aCBlXo';

@Injectable()
export class GeoLocationService {

  constructor(private _http: Http) { }

  placesMatchingSearchText: string[] = [];

  public findPlaceByName(text: string): void {
    const encodedSearchText = encodeURIComponent(text);
    this._http
      .get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodedSearchText}&types=(cities)&language=en_US&key=${GOOGLE_MAPS_API_KEY}`)
      .map(response => {
        const predictions = response.json().predictions;
        const nothingFound = (!predictions || predictions.length <= 0)
        return nothingFound ? <string[]>[] : <string[]>predictions.map(prediction => prediction.description);
      })
      .map(listOfPlaces => listOfPlaces.filter(place => place.indexOf('Russ') < 0))
      .subscribe(listOfPlaces => this.placesMatchingSearchText = listOfPlaces);
  }



}
