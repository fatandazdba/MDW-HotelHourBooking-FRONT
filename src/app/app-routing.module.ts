import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CrudComponent} from './core/crud.component';
import {VerHabitacionDialogComponent} from './ver-habitacion-dialog/ver-habitacion-dialog.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static COMPONENTS = [
    HomeComponent
  ];

  static DIALOGS = [
    VerHabitacionDialogComponent
  ];
}
