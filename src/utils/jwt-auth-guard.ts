import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    const jwtToken = request.headers['fms-token'];
    if (!jwtToken) throw new UnauthorizedException('invalid token');

    // TODO: 로직 추가 예정
    // const decodeJwtToken =
    return true;
  }
}
