import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    const jwtToken = request.headers['fms-token'];
    if (!jwtToken) throw new UnauthorizedException('Invalid token');

    const payload = await this.jwtService.verifyAsync(jwtToken, {
      secret: process.env.secret,
    });

    switch (payload.userType) {
      case 'M':
      case 'A':
        break;
      default:
        throw new UnauthorizedException('Invalid userType from token');
    }

    response.locals.user = payload;

    return true;
  }
}
