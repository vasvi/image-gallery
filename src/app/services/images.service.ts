import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ImageService {
    constructor(private http: HttpClient) {}

    url = 'http://www.mocky.io/v2/5daffe6d2f00001172c1374b';
    getImages = (): Observable<any> => {
        return this.http.get(this.url);
    }
}