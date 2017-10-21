import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PropertyService } from '../../services/property.service';
import { HeaderRecommendedComponent } from './header-recommended.component';

describe('HeaderRecommendedComponent', () => {
  let component: HeaderRecommendedComponent;
  let fixture: ComponentFixture<HeaderRecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRecommendedComponent ],
      providers: [ PropertyService ],
      imports: [HttpClientModule]
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
