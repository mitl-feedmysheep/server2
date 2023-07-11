import { Injectable } from '@nestjs/common';
import { RDSBaseRepository } from '../utils';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChurchEntity } from '@mitl-feedmysheep/entity';

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
