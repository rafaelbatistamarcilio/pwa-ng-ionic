import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FormValidationService } from '../../shared/form-validation.service';
import { ToastController } from '@ionic/angular';
import { DespesasService } from '../despesas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despesa-cadastro',
  templateUrl: './despesa-cadastro.component.html',
  styleUrls: ['./despesa-cadastro.component.css']
})
export class DespesaCadastroComponent implements OnInit {

  public formObj: FormGroup;

  constructor(
    private formValidationService: FormValidationService,
    private toastController: ToastController,
    private despesaService: DespesasService,
    private router: Router) {

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
    let mensagem = '';
    this.formValidationService.markFieldsDirty(this.formObj);

    if (this.formObj.invalid) {
      mensagem = 'Preencha o formulário corretamente!';
    } else {

      try {
        await this.despesaService.add(this.formObj.getRawValue());
        mensagem = 'Despesa salva com sucesso';
      } catch (error) {

        mensagem = 'Erro ao salvar despesa: ' + JSON.stringify(error);
      }
    }

    const toast = await this.toastController.create({
      message: mensagem,
      closeButtonText: 'Ok',
      showCloseButton: true,
      position: 'bottom'
    });
    toast.present();

    await this.despesaService.updateStore();
    this.router.navigate(['despesas']);
  }

  isValid(field: AbstractControl) {
    if (field.invalid && field.dirty) { return 'danger'; }

    if (field.valid && field.dirty) { return 'success'; }

    return '';
  }
}
