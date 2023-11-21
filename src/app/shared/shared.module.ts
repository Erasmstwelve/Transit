import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavResponsiveComponent } from './components/nav-responsive/nav-responsive.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    NavResponsiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavigationComponent,
    FooterComponent,
    NavResponsiveComponent
  ]
})
export class SharedModule { }
