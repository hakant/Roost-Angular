import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopLocationsComponent } from './card-top-locations.component';

describe('CardTopLocationsComponent', () => {
  let component: CardTopLocationsComponent;
  let fixture: ComponentFixture<CardTopLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTopLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTopLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
