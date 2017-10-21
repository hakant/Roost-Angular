import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PropertyService } from './services/property.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { HeaderRecommendedComponent } from './header/header-recommended/header-recommended.component';
import { CardRecentSaleComponent } from './card-recent-sale/card-recent-sale.component';
import { CardRecentRentComponent } from './card-recent-rent/card-recent-rent.component';
import { CardTopLocationsComponent } from './card-top-locations/card-top-locations.component';
import { CardPropertiesAgentsComponent } from './card-properties-agents/card-properties-agents.component';
import { HomeTotalTitleComponent } from './home-total-title/home-total-title.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HeaderSearchComponent,
        HeaderTopComponent,
        HeaderMenuComponent,
        HeaderRecommendedComponent,
        CardRecentSaleComponent,
        CardRecentRentComponent,
        CardTopLocationsComponent,
        CardPropertiesAgentsComponent,
        HomeTotalTitleComponent
      ],
      providers: [ PropertyService ],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(component.title).toEqual('Roost Angular - Material Design Real Estate');
  }));
});
