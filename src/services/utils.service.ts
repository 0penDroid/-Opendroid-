import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UtilsService {
  findInvalidControls(form: FormGroup) {
    const invalid = [];
    const controls = form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}
