import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardSliderPage } from './card-slider.page';

const routes: Routes = [
  {
    path: '',
    component: CardSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardSliderPageRoutingModule {}
