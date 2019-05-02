import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHabitacionDialogComponent } from './ver-habitacion-dialog.component';

describe('VerHabitacionDialogComponent', () => {
  let component: VerHabitacionDialogComponent;
  let fixture: ComponentFixture<VerHabitacionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerHabitacionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHabitacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
