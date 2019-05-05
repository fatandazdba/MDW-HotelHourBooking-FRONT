import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VerHabitacionDialogComponent} from './ver-habitacion-dialog/ver-habitacion-dialog.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: HomeComponent.URL},
  {path: HomeComponent.URL, component: HomeComponent},
  {
    path: HomeComponent.URL, component: HomeComponent,
    children: [
      // {path: AlarmComponent.URL, component: AlarmComponent},

    ]
  }
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
