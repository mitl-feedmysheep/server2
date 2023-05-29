import { Injectable } from '@nestjs/common';
import { ChurchRepository } from './church.repository';

@Injectable()
export class ChurchService {
  constructor(private readonly churchRepository: ChurchRepository) {}

  async getChurchList() {
    const result = await this.churchRepository.getChurchList();

    console.log('result -->', result);
    return result;
  }
}
