import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cookis } from './cookis';

describe('Cookis', () => {
  let component: Cookis;
  let fixture: ComponentFixture<Cookis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cookis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cookis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
