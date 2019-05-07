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

  viewmockresumenreserva() {
    this.dialog.open(ResumenReservaComponent);
  }
}
