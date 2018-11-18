import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NvD3Module } from 'ng2-nvd3';

import { AppComponent } from './app.component';
import 'd3';
import 'nvd3';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    HttpClientModule,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
