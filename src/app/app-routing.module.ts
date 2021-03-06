import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VerHabitacionDialogComponent} from './ver-habitacion-dialog/ver-habitacion-dialog.component';
import {BuscadorHabitacionesComponent} from './buscador-habitaciones/buscador-habitaciones.component';
import {WelcomeComponent} from './welcome.component';
import {ResumenReservaComponent} from './home/reservas/resumenReserva.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: WelcomeComponent.URL},
  {path: WelcomeComponent.URL, component: WelcomeComponent},
  {
    path: HomeComponent.URL, component: HomeComponent,
    children: [
      {path: BuscadorHabitacionesComponent.URL, component: BuscadorHabitacionesComponent},
      {path: ResumenReservaComponent.URL, component: ResumenReservaComponent},

    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  static COMPONENTS = [
    HomeComponent,
    WelcomeComponent,
    BuscadorHabitacionesComponent,
    ResumenReservaComponent
  ];

  static DIALOGS = [
    VerHabitacionDialogComponent
  ];
}
