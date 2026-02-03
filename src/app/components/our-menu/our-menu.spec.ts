import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMenu } from './our-menu';

describe('OurMenu', () => {
  let component: OurMenu;
  let fixture: ComponentFixture<OurMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
