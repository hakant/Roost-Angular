import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property';

declare let $: any;

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
        // @hakant: Can you find a better way for doing this?
        // setTimeout makes sure the enableSlick function runs after the view is rendered
        setTimeout(this.enableSlick, 0);
      });
  }

  enableSlick() {
    $('.header__recommended .listings-grid').slick({
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      dotsClass: 'slick-dots slick-dots-light',
      infinite: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        }
      ]
    });
  }
}
