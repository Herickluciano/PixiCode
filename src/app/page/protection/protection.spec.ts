import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Protection } from './protection';

describe('Protection', () => {
  let component: Protection;
  let fixture: ComponentFixture<Protection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Protection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Protection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
