import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SlidesService } from '../services/slides.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slideList: any[];

  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    return this.slidesService.getSlides()
    .snapshotChanges().subscribe(item => {
      this.slideList=[];
      item.forEach( element => {
        let x = element.payload.toJSON();
        x["$key"]=element.key;
        this.slideList.push(x as any);
      });
    });
  }

}
