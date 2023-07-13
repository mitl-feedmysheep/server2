import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

class UserInfo {
  @IsString()
  userType: string;

  @IsString()
  authorizationId: number;
}

export class MemberInfo extends UserInfo {
  @IsNumber()
  @Type(() => Number)
  memberId: number;
}

export class AdminInfo extends UserInfo {
  @IsNumber()
  @Type(() => Number)
  adminId: number;
}
