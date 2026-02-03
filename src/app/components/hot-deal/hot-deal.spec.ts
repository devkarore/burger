import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDeal } from './hot-deal';

describe('HotDeal', () => {
  let component: HotDeal;
  let fixture: ComponentFixture<HotDeal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotDeal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotDeal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
