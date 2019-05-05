import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VerHabitacionDialogComponent} from './ver-habitacion-dialog/ver-habitacion-dialog.component';
import {BuscadorHabitacionesComponent} from './buscador-habitaciones/buscador-habitaciones.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: HomeComponent.URL},
  {path: HomeComponent.URL, component: HomeComponent},
  {
    path: HomeComponent.URL, component: HomeComponent,
    children: [
      {path: BuscadorHabitacionesComponent.URL, component: BuscadorHabitacionesComponent},

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
    BuscadorHabitacionesComponent
  ];

  static DIALOGS = [
    VerHabitacionDialogComponent
  ];
}
