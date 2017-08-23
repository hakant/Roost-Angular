import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
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
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
