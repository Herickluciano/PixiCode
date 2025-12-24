import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Competenze } from './competenze';

describe('Competenze', () => {
  let component: Competenze;
  let fixture: ComponentFixture<Competenze>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Competenze]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Competenze);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
