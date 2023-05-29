import { Controller, Get, UseGuards } from '@nestjs/common';
import { ChurchService } from './church.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../utils';

@Controller('church')
@UseGuards(JwtAuthGuard)
@ApiTags('교회')
export class ChurchController {
  constructor(private readonly churchService: ChurchService) {}

  @Get()
  @ApiOperation({
    summary: '교회 리스트',
    description: '등록된 교회의 리스트를 보여줍니다.',
  })
  async getChurchList() {
    return this.churchService.getChurchList();
  }
}
