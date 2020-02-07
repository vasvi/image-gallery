import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImagesComponent } from './images/images.component'

@NgModule({
  declarations: [
    AppComponent,
    ImageDetailComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ImageDetailComponent,
    ImagesComponent
  ]
})
export class AppModule { }
