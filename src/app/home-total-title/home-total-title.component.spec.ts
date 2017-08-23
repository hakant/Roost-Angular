import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTotalTitleComponent } from './home-total-title.component';

describe('HomeTotalTitleComponent', () => {
  let component: HomeTotalTitleComponent;
  let fixture: ComponentFixture<HomeTotalTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTotalTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTotalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
