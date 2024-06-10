import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertsService } from '../../services/alert.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private alert: AlertsService,
    private router: Router
  ) {}

  toggle() {
    document
      .querySelector<HTMLDivElement>('.sidebar')
      ?.classList.toggle('active');
    document
      .querySelector<HTMLDivElement>('.menu-btn')
      ?.classList.toggle('active');
  }

  logout() {
    this.authService.setUsuarioAutenticado(false);
    this.storageService.setLocalStorage(null);
    this.router.navigate(['/login']);
    this.alert.swalAlert(
      'success',
      'Sua conta foi desconectada com sucesso!',
      false,
      5000
    );
  }
}
