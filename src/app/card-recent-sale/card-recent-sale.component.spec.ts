import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PropertyService } from '../services/property.service';

import { CardRecentSaleComponent } from './card-recent-sale.component';

describe('CardRecentSaleComponent', () => {
  let component: CardRecentSaleComponent;
  let fixture: ComponentFixture<CardRecentSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardRecentSaleComponent],
      imports: [HttpClientModule],
      providers: [PropertyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecentSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
