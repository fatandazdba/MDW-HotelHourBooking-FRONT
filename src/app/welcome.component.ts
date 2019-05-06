import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ResumenReservaComponent} from './home/reservas/resumenReserva.component';
import {Router} from '@angular/router';

// import {LoginDialogComponent} from './core/login-dialog.component';

@Component({
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css'],
})
export class WelcomeComponent {
  static URL = 'welcome';

  constructor(private dialog: MatDialog, private router: Router) {
  }

  login() {

    // this.router.navigate([HomeComponent.URL, ResumenReservaComponent.URL]);
    this.dialog.open(ResumenReservaComponent);
    // this.router.navigate([ResumenReservaComponent.URL]);
    /*  this.dialog.open(LoginDialogComponent,
        {
          data: {homeUrl: HomeComponent.URL}
        }
      );*/
  }
}
