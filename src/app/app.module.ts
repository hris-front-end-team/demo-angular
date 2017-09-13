// imports are for TypeScript language
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { appRoutes } from "app/app/app-routing.module";
import { RouterModule } from "@angular/router";
import { MainPageComponent } from './main-page/main-page.component';
import { GeoLocationService } from './shared/geo-location.service';

@NgModule({
  // declarations are used by Angular compiler (run time) when compiling templates
  declarations: [
    AppComponent,
    HeaderComponent,
    OtherPageComponent,
    MainPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    GeoLocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
