import { Despesa } from './../despesa.entity';
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
    this.formValidationService.markFieldsDirty(this.formObj);

    if (this.formObj.invalid) {
      this.exibirMensagem( 'Preencha o formulário corretamente!');
    } else {

      try {
        const despesa: Despesa = this.formObj.getRawValue();
        await this.despesaService.add(despesa);
        this.exibirMensagem( 'Despesa salva com sucesso');
        this.router.navigate(['despesas']);
      } catch (error) {
        this.exibirMensagem( 'Erro ao salvar despesa: ' + JSON.stringify(error) );
      }
    }
  }

  isValid(field: AbstractControl) {
    if (field.invalid && field.dirty) { return 'danger'; }

    if (field.valid && field.dirty) { return 'success'; }

    return '';
  }

  async exibirMensagem(mensagem) {
    const toast = await this.toastController.create({
      message: mensagem,
      closeButtonText: 'Ok',
      showCloseButton: true,
      position: 'bottom'
    });
    toast.present();
  }
}
