import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageDetailComponent } from './image-detail/image-detail.component'
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component'


const routes: Routes = [
  {
    path: 'detail',
    component: ImageDetailComponent,
    data: {animation: 'ImageDetail'}
  },
  {
    path: '',
    component: ImagesComponent,
    pathMatch: 'full',
    data: {animation: 'ImagesPage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
