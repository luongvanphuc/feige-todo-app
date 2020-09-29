import { Injectable } from '@angular/core';

import { AlertComponent } from './alert.component';
import { AlertDataModel } from './alert.model';
import { ModalService } from '../../services/modal.service';

@Injectable()

export class AlertService {

  constructor(private modalService: ModalService) { }

  open(data?: AlertDataModel) {
    const modalRef = this.modalService.open(AlertComponent, { centered: true });

    if (data) {
      modalRef.componentInstance.data = data;
    }

    return modalRef;
  }
}
