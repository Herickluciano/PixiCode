import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Riferimenti } from './riferimenti';

describe('Riferimenti', () => {
  let component: Riferimenti;
  let fixture: ComponentFixture<Riferimenti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Riferimenti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Riferimenti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
