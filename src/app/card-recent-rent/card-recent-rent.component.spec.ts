import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecentRentComponent } from './card-recent-rent.component';

describe('CardRecentRentComponent', () => {
  let component: CardRecentRentComponent;
  let fixture: ComponentFixture<CardRecentRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRecentRentComponent ]
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
