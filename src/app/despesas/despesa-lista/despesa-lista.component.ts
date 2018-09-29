import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesa-lista',
  templateUrl: './despesa-lista.component.html',
  styleUrls: ['./despesa-lista.component.css']
})
export class DespesaListaComponent implements OnInit {

  public despesas: string[];

  constructor() {
    this.despesas = [
      'Despesa 1',
      'Despesa 2',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1000',
      'Despesa 1000',
      'Despesa 1000',
      'Despesa 1000',
      'Despesa 1000',
      'Despesa 1000',
      'Despesa 1000',
      'Despesa 1000',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1',
      'Despesa 1000',
      'Despesa 1',
      'Despesa FIMMMMM'
    ];
  }

  ngOnInit() {
  }

  novo() {
    console.log('TESTE');
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      if (this.despesas.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
