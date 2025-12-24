import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiducia } from './fiducia';

describe('Fiducia', () => {
  let component: Fiducia;
  let fixture: ComponentFixture<Fiducia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fiducia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fiducia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
