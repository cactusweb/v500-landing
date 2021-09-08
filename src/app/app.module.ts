import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstrumentsComponent } from './components/instruments/instruments.component';
import { FaqComponent } from './components/faq/faq.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomeComponent } from './screens/home/home.component';
import { UserAgreementComponent } from './screens/user-agreement/user-agreement.component';
import { MonitorsComponent } from './components/monitors/monitors.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { MainMobileComponent } from './components/main-mobile/main-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    InstrumentsComponent,
    FaqComponent,
    FeaturesComponent,
    HomeComponent,
    UserAgreementComponent,
    MonitorsComponent,
    HeaderMobileComponent,
    MainMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
