import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  public despesas: any[];

  constructor() {
    this.despesas = [];
  }
}
