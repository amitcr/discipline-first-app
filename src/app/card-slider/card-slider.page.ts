import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.page.html',
  styleUrls: ['./card-slider.page.scss'],
})
export class CardSliderPage implements OnInit {
  
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }

}
