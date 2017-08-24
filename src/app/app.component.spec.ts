import { TestBed, async } from '@angular/core/testing';

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
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Roost Angular - Material Design Real Estate');
  }));

  it('should render small title in header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header.section__title small').textContent)
    .toContain('Villas, Apartments, Office Spaces and Commercial Buildings');
  }));
});
