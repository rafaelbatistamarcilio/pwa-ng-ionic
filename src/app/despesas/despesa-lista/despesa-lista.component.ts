import { Despesa } from './../despesa.entity';
import { Component, OnInit } from '@angular/core';
import { DespesasService } from '../despesas.service';

@Component({
  selector: 'app-despesa-lista',
  templateUrl: './despesa-lista.component.html',
  styleUrls: ['./despesa-lista.component.css']
})
export class DespesaListaComponent implements OnInit {

  constructor(public despesaService: DespesasService) {
  }

  async ngOnInit() {
    await this.despesaService.updateStore();
  }

  formatarData(data) {
    return data.day.value + '/' + data.month.value + '/' + data.year.value;
  }
}
