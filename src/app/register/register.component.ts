import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertsService } from '../../services/alert.service';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  rForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private alert: AlertsService,
    private utils: UtilsService,
    private router: Router
  ) {
    this.rForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      role: [1, [Validators.required]],
    });
  }

  register() {
    if (this.rForm.valid) {
      this.auth.register(this.rForm.value).subscribe({
        next: () => {
          this.alert.swalAlert(
            'success',
            'Conta criada com sucesso!',
            false,
            5000
          );
          this.router.navigate(['/opendroid/login']);
        },
      });
    } else {
      this.alert.swalAlert(
        'warning',
        `O Campo ${this.utils.findInvalidControls(this.rForm)} é inválido.`,
        false,
        5000
      );
    }
  }
}
