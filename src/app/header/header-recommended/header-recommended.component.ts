import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property';

@Component({
  selector: 'app-header-recommended',
  templateUrl: './header-recommended.component.html',
  styleUrls: ['./header-recommended.component.css']
})
export class HeaderRecommendedComponent implements OnInit {

  properties: Array<Property>;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.requestProperties().subscribe(
      data => {
        this.properties = data.list;
      });
  }
}
