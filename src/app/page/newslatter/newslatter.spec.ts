import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newslatter } from './newslatter';

describe('Newslatter', () => {
  let component: Newslatter;
  let fixture: ComponentFixture<Newslatter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newslatter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newslatter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
