import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRecommendedComponent } from './header-recommended.component';

describe('HeaderRecommendedComponent', () => {
  let component: HeaderRecommendedComponent;
  let fixture: ComponentFixture<HeaderRecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRecommendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
