import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '@shared/services';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent {

  formError = false;
  submiting = false;
  error = false;

  constructor(
    private modalService: ModalService,
    private httpClient: HttpClient,
  ) { }

  submit(name: string, email: string, feedback: string) {
    // I were trying to use native solution instead of importing angular's FormsModule
    this.formError = !feedback;
    this.error = false;

    if (this.formError) {
      return;
    }

  }

  closeModal() {
    this.modalService.close();
  }
}
