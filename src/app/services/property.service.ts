import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PropertyResponse } from '../models/property-response';

@Injectable()
export class PropertyService {

  constructor(private http: HttpClient) { }

  public requestProperties(): Observable<PropertyResponse> {
    return this.http.get<PropertyResponse>('/api/properties.json');
  }
}

