import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHabitsComponent } from './daily-habits.component';

describe('DailyHabitsComponent', () => {
  let component: DailyHabitsComponent;
  let fixture: ComponentFixture<DailyHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyHabitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
