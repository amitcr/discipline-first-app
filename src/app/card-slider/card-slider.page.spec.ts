import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardSliderPage } from './card-slider.page';

describe('CardSliderPage', () => {
  let component: CardSliderPage;
  let fixture: ComponentFixture<CardSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
