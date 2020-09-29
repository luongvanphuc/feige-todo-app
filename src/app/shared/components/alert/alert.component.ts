import { Component, Input, OnInit } from '@angular/core';

import { AlertDataModel } from './alert.model';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() data: AlertDataModel;

  title = '';
  content = '';
  buttonLabel = 'OK';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title || this.title;
      this.content = this.data.content || this.content;
      this.buttonLabel = this.data.buttonLabel || this.buttonLabel;
    }
  }

  submit() {
    this.modalService.close();
  }
}
