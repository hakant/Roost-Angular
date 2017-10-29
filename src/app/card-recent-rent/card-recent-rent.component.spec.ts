import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PropertyService } from '../services/property.service';

import { CardRecentRentComponent } from './card-recent-rent.component';

describe('CardRecentRentComponent', () => {
  let component: CardRecentRentComponent;
  let fixture: ComponentFixture<CardRecentRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardRecentRentComponent],
      imports: [HttpClientModule],
      providers: [PropertyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecentRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
