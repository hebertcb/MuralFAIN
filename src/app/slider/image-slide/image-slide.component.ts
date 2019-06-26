import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  inputs: ['slide'],
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']
})
export class ImageSlideComponent implements OnInit {
  slide: Object;

  constructor() { }

  ngOnInit() {
  }

}
