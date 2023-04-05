import { Module } from '@nestjs/common';
import { BodyService } from './body.service';
import { BodyController } from './body.controller';

@Module({
  controllers: [BodyController],
  providers: [BodyService],
})
export class BodyModule {}
