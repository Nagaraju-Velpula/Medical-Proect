import { Injectable } from '@angular/core';
import { Image } from "./image.model";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images: Image[] = [
    {
      imageDesciption: "adobe1",
      image:
        "../../../assets/Images/AdobeStock1.jpeg"
    },
    {
      imageDesciption: "adobe2",
      image:
        "../../../assets/Images/AdobeStock2.jpeg"
    },
    {
      imageDesciption: "adobe3",
      image:
        "../../../assets/Images/AdobeStock3.jpeg"
    },
    {
      imageDesciption: "adobe4",
      image:
        "../../../assets/Images/AdobeStock4.png"
    }
  ];

  getImages() {
    return this.images.slice();
  }
}
