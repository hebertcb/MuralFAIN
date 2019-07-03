import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-slide',
  inputs: ['slide'],
  templateUrl: './video-slide.component.html',
  styleUrls: ['./video-slide.component.css']
})
export class VideoSlideComponent implements OnInit {
  slide: Object;

  constructor() { }

  ngOnInit() {
  }

}
