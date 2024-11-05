import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHabitModalComponent } from './edit-habit-modal.component';

describe('EditHabitModalComponent', () => {
  let component: EditHabitModalComponent;
  let fixture: ComponentFixture<EditHabitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHabitModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHabitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
