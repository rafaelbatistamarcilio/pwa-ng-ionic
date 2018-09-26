import { DespesaCadastroComponent } from './despesa-cadastro/despesa-cadastro.component';
import { DespesaListaComponent } from './despesa-lista/despesa-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DespesaListaComponent
  },
  {
    path: 'nova',
    component: DespesaCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRouting { }
