import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prouzek } from './prouzek';

describe('Prouzek', () => {
  let component: Prouzek;
  let fixture: ComponentFixture<Prouzek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prouzek],
    }).compileComponents();

    fixture = TestBed.createComponent(Prouzek);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
