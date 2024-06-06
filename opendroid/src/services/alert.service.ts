import { ElementRef, Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

@Injectable()
export class AlertsService {
  swalAlert(icon: SweetAlertIcon, msg: string, button: boolean, timer: number) {
    const alert = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: button,
      timer: timer,
      timerProgressBar: true,
      didOpen: (toast: {
        addEventListener: (arg0: string, arg1: any) => void;
      }) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    alert.fire({ icon: icon, title: msg });
  }

  swalCustomPop(
    element: ElementRef,
    dismissal: boolean
  ): Promise<SweetAlertResult> {
    return Swal.fire({
      html: element.nativeElement,
      heightAuto: false,
      showConfirmButton: false,
      allowEscapeKey: dismissal,
      allowOutsideClick: dismissal,
      showCloseButton: dismissal,
      padding: '0',
    });
  }
}
