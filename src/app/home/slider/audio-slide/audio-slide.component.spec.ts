import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSlideComponent } from './audio-slide.component';

describe('AudioSlideComponent', () => {
  let component: AudioSlideComponent;
  let fixture: ComponentFixture<AudioSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
