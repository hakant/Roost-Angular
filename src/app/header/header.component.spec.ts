import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderRecommendedComponent } from './header-recommended/header-recommended.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent,
        HeaderTopComponent,
        HeaderSearchComponent,
        HeaderRecommendedComponent,
        HeaderMenuComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
