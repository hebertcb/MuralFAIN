import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-slide',
  inputs: ['slide'],
  templateUrl: './text-slide.component.html',
  styleUrls: ['./text-slide.component.css']
})
export class TextSlideComponent implements OnInit {
  slide: Object;

  constructor() { }

  ngOnInit() {
  }

}
