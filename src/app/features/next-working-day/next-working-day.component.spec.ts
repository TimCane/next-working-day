import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextWorkingDayComponent } from './next-working-day.component';

describe('NextWorkingDayComponent', () => {
  let component: NextWorkingDayComponent;
  let fixture: ComponentFixture<NextWorkingDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextWorkingDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextWorkingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
