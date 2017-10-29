import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../services/property.service';
import { Property, SaleType } from '../models/property';

@Component({
  selector: 'app-card-recent-sale',
  templateUrl: './card-recent-sale.component.html',
  styleUrls: ['./card-recent-sale.component.css']
})
export class CardRecentSaleComponent implements OnInit {

  recentPropertiesForSale: Array<Property>;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.requestRecentPropertiesFor(SaleType.Sale).subscribe(
      data => {
        this.recentPropertiesForSale = data;
      });
  }
}
