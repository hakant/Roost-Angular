import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Property } from '../models/property';
import { PropertyResponse } from '../models/property-response';

@Injectable()
export class PropertyService {

  constructor(private http: HttpClient) { }

  public requestPropertiesNearBy(location: string): Observable<Array<Property>> {
    return this.http.get<PropertyResponse>('/api/properties.json').map((response) => {
      return response.list.filter(p => p.address
        .toUpperCase()
        .indexOf(location.toUpperCase()) > -1
      );
    });
  }
}

