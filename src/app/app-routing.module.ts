import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageDetailComponent } from './image-detail/image-detail.component'
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component'


const routes: Routes = [
  {
    path: 'detail',
    component: ImageDetailComponent
  },
  {
    path: '',
    component: ImagesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
