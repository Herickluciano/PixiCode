import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confiance } from './confiance';

describe('Confiance', () => {
  let component: Confiance;
  let fixture: ComponentFixture<Confiance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confiance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confiance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
