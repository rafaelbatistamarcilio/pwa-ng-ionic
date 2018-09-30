import { Injectable } from '@angular/core';
import { Despesa } from './despesa.entity';
import { DespesasRepository } from './despesas.repository';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  public despesas: Despesa[];

  constructor(private despesasRepository: DespesasRepository) {
    this.updateStore();

  }

  async updateStore() {
    this.despesas = await this.getAll();
  }

  getStore() {
    return this.despesas;
  }

  async getAll() {
    try {
      return await this.despesasRepository.getAll();
    } catch (error) {
      throw error;
    }
  }

  async add(data) {
    try {
      return await this.despesasRepository.add(data);
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      return await this.despesasRepository.update(id, data);
    } catch (error) {
      throw error;
    }
  }

  async remove(id) {
    try {
      await this.despesasRepository.remove(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
