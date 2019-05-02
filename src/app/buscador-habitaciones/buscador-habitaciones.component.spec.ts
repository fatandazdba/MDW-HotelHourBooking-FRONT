import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorHabitacionesComponent } from './buscador-habitaciones.component';

describe('BuscadorHabitacionesComponent', () => {
  let component: BuscadorHabitacionesComponent;
  let fixture: ComponentFixture<BuscadorHabitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorHabitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
