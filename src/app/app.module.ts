import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child-2/child-2.component';
import { TextDirective } from './text.directive';
import {greenTextDirective} from "./child-1/greenText.directive";

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    TextDirective,
    greenTextDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
