import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NvD3Module } from 'ng2-nvd3';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import 'd3';
import 'nvd3';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    ChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
