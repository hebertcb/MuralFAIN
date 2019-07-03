import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SlidesService } from '../../services/slides.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{
  slideList: Observable<any[]>;

  constructor(private slidesService: SlidesService) {
    this.slideList = this.slidesService.getSlides()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  ngOnInit() { 
  }

}
