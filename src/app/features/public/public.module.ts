import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
// import { AboutComponent } from './view/about/about.component';
// import { HomeComponent } from './view/home/home.component';
import { HomeView } from './view/home/home.view';
import { AboutView } from './view/about/about.view';
import { AcercaDeView } from './view/acerca-de/acerca-de.view';
import { NotFoundView } from './view/not-found/not-found.view';


@NgModule({
  declarations: [
    PublicComponent,
    HomeView,
    AboutView,
    AcercaDeView,
    NotFoundView
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
  , schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line to include CUSTOM_ELEMENTS_SCHEMA

})
export class PublicModule { }
