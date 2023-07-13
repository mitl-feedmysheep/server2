import { Controller, Get, UseGuards } from '@nestjs/common';
import { ChurchService } from './church.service';
import { JwtAuthGuard } from 'src/utils';

@Controller('church')
@UseGuards(JwtAuthGuard)
export class ChurchController {
  constructor(private readonly churchService: ChurchService) {}

  @Get()
  async getChurchList() {
    return this.churchService.getChurchList();
  }
}
