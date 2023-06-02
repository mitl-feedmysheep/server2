import { Injectable } from '@nestjs/common';
import { ChurchRepository } from './church.repository';

@Injectable()
export class ChurchService {
  constructor(private readonly churchRepository: ChurchRepository) {}

  getChurchList() {
    return this.churchRepository.getChurchList();
  }
}
