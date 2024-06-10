import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JWT_DTO } from '../../models/jwt.dto';
import { UserDTO } from '../../models/user.dto';
import { AlertsService } from '../../services/alert.service';
import { UtilsService } from '../../services/utils.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  lForm!: FormGroup;
  usuario!: UserDTO;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private alert: AlertsService,
    private utils: UtilsService,
    private router: Router
  ) {
    this.lForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  login() {
    if (this.lForm.valid) {
      this.auth.authenticate(this.lForm.value).subscribe({
        next: (response) => {
          this.auth.successfulLogin(response.body as JWT_DTO).email;
          this.auth.setUsuarioAutenticado(true);
          this.router.navigate(['/opendroid/forum']);
          this.alert.swalAlert('success', 'Logado com sucesso!', false, 5000);
        },
      });
    } else {
      this.alert.swalAlert(
        'warning',
        `O Campo ${this.utils.findInvalidControls(this.lForm)} é inválido.`,
        false,
        5000
      );
    }
  }
}
