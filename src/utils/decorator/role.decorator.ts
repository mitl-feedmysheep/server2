import { SetMetadata } from '@nestjs/common';
import { USER_TYPE_CODE } from '../policy/constant';

export const ROLES_KEY = 'roles';
export const Roles = (roles: USER_TYPE_CODE) => SetMetadata(ROLES_KEY, roles);
