import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardSliderPageRoutingModule } from './card-slider-routing.module';

import { CardSliderPage } from './card-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardSliderPageRoutingModule
  ],
  declarations: [CardSliderPage]
})
export class CardSliderPageModule {}
