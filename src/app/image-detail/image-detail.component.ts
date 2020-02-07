import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ImageService} from '../services/images.service'

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private imageService: ImageService
  ) {}

  title = 'image-detail';
  imageUrl;
  images;

  ngOnInit() {
      console.log('image detail called');
      this.route.queryParams.subscribe(params => {
          this.imageUrl = params['url'];
          console.log(this.imageUrl);
      });

      this.getImages();
  }

  getImages() {
    this.imageService.getImages().subscribe(images => {
        console.log(images);
        this.images = images.pugs;
      });
  }

  navigateToHome() {
      this.router.navigate(['']);
  }

  showPrev() {
    const currentImageIndx = this.images.indexOf(this.imageUrl);
    const prevIndx = this.images[currentImageIndx - 1] || this.images[0];
    this.router.navigate(['/detail'], {queryParams: {url: prevIndx}});
  }

  showNext() {
    const currentImageIndx = this.images.indexOf(this.imageUrl);
    const nextIndx = this.images[currentImageIndx + 1] || this.images[0];
    this.router.navigate(['/detail'], {queryParams: {url: nextIndx}});
  }
}
