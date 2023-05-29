import { Module } from '@nestjs/common';
import { ChurchService } from './church.service';
import { ChurchController } from './church.controller';
import { ChurchRepository } from './church.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChurchEntity } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([ChurchEntity])],
  controllers: [ChurchController],
  providers: [ChurchService, ChurchRepository],
})
export class ChurchModule {}
