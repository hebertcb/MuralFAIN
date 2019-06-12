import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides:Observable<any[]>;

  constructor(private firebase: AngularFireDatabase) {
    this.slides = firebase.list('slides').valueChanges();
  }

  ngOnInit() {
  }

}
