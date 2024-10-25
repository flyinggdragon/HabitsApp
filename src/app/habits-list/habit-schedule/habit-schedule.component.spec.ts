import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitScheduleComponent } from './habit-schedule.component';

describe('HabitScheduleComponent', () => {
  let component: HabitScheduleComponent;
  let fixture: ComponentFixture<HabitScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
