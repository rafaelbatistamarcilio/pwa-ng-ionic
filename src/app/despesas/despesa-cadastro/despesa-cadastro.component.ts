import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormValidationService } from '../../shared/form-validation.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-despesa-cadastro',
  templateUrl: './despesa-cadastro.component.html',
  styleUrls: ['./despesa-cadastro.component.css']
})
export class DespesaCadastroComponent implements OnInit {

  public formObj: FormGroup;

  constructor(
    private formValidationService: FormValidationService,
    public toastController: ToastController) {

    this.formObj = new FormBuilder().group({
      tipo: [null, Validators.required],
      data: [null, Validators.required],
      valor: [null, Validators.required],
      descricao: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  async salvar() {

    this.formValidationService.markFieldsDirty(this.formObj);
    console.log(this.formObj.getRawValue());

    if (this.formObj.invalid) {
      const toast = await this.toastController.create({
        message: 'Preencha o formulário corretamente!',
        closeButtonText: 'Ok',
        showCloseButton: true,
        position: 'bottom'
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Despesa salva com sucesso',
        closeButtonText: 'Ok',
        showCloseButton: true,
        position: 'bottom'
      });
      toast.present();
    }
  }

  isValid(field: FormControl) {
    if (field.invalid && field.dirty) { return 'danger'; }

    if (field.valid && field.dirty) { return 'success'; }

    return '';
  }
}
