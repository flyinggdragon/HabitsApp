import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitDisplayerComponent } from './habit-displayer.component';

describe('HabitDisplayerComponent', () => {
  let component: HabitDisplayerComponent;
  let fixture: ComponentFixture<HabitDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
