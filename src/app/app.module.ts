import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyAngularComponent } from './my-angular.component';
import { ReactRouterOutletDirective } from './react-router-outlet.directive';

import { UrlHandlingStrategy } from '@angular/router';
import { AngularReactUrlHandlingStrategy } from './angular-react-url-handling-strategy.service';

@NgModule({
  declarations: [
    AppComponent,
    MyAngularComponent,
    ReactRouterOutletDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: AngularReactUrlHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
