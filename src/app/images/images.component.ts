import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/images.service' ;
import { Router } from '@angular/router';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  constructor(
    private imageService: ImageService,
    private router: Router
  ) {}

  title = 'image-gallery';
  images;

  ngOnInit() {
    this.imageService.getImages().subscribe(images => {
      console.log(images);
      this.images = images.pugs;
    });
  }

  showImage = (image) => {
    this.router.navigate(['/detail'], {queryParams: {url: image}});
  }
}
