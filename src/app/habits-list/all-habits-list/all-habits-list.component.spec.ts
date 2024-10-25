import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHabitsListComponent } from './all-habits-list.component';

describe('AllHabitsListComponent', () => {
  let component: AllHabitsListComponent;
  let fixture: ComponentFixture<AllHabitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHabitsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllHabitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
