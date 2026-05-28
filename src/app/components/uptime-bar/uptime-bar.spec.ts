import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptimeBar } from './uptime-bar';

describe('UptimeBar', () => {
  let component: UptimeBar;
  let fixture: ComponentFixture<UptimeBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UptimeBar],
    }).compileComponents();

    fixture = TestBed.createComponent(UptimeBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
