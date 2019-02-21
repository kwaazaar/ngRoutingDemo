import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailAComponent } from './home/detail-a/detail-a.component';
import { DetailBComponent } from './home/detail-b/detail-b.component';
import { DetailCComponent } from './home/detail-c/detail-c.component';
import { Sub1Component } from './home/detail-c/sub1/sub1.component';
import { Sub2Component } from './home/detail-c/sub2/sub2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailAComponent,
    DetailBComponent,
    DetailCComponent,
    Sub1Component,
    Sub2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
