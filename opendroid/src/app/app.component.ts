import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'opendroid';

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.getLocalStorage()?.token) {
      this.authService.setUsuarioAutenticado(true);
      this.router.navigate(['/opendroid/forum']);
    }
  }
}
