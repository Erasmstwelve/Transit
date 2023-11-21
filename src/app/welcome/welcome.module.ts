import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { OfferComponent } from './components/offer/offer.component';
import { CtaComponent } from './components/cta/cta.component';
// import { AboutComponent } from './pages/about';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    OfferComponent,
    CtaComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
