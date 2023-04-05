import { Controller } from '@nestjs/common';
import { BodyService } from './body.service';

@Controller('body')
export class BodyController {
  constructor(private readonly bodyService: BodyService) {}
}
