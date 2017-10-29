import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Property, SaleType } from '../models/property';

@Component({
  selector: 'app-card-recent-rent',
  templateUrl: './card-recent-rent.component.html',
  styleUrls: ['./card-recent-rent.component.css']
})
export class CardRecentRentComponent implements OnInit {

  recentPropertiesForRent: Array<Property>;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.requestRecentPropertiesFor(SaleType.Rent).subscribe(
      data => {
        this.recentPropertiesForRent = data;
      });
  }
}
