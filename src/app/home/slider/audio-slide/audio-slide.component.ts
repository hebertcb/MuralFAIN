import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-slide',
  inputs: ['slide'],
  templateUrl: './audio-slide.component.html',
  styleUrls: ['./audio-slide.component.css']
})
export class AudioSlideComponent implements OnInit {
  slide: Object;

  constructor() { }

  ngOnInit() {
  }

}
