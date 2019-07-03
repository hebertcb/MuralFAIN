import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSlideComponent } from './video-slide.component';

describe('VideoSlideComponent', () => {
  let component: VideoSlideComponent;
  let fixture: ComponentFixture<VideoSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
