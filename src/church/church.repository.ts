import { Injectable } from '@nestjs/common';
import { RDSBaseRepository } from '../utils';
import { ChurchEntity } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChurchRepository extends RDSBaseRepository<ChurchEntity> {
  constructor(
    @InjectRepository(ChurchEntity)
    private readonly churchRepository: Repository<ChurchEntity>,
  ) {
    super(churchRepository);
  }

  getChurchList() {
    return this.churchRepository.find({ where: { isValid: true } });
  }
}
