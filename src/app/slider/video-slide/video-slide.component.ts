import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-slide',
  inputs: ['slideurl'],
  templateUrl: './video-slide.component.html',
  styleUrls: ['./video-slide.component.css']
})
export class VideoSlideComponent implements OnInit {
  slideurl: string;

  constructor() { }

  ngOnInit() {
  }

}
