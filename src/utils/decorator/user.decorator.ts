import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const response = ctx.switchToHttp().getResponse();
    const user = response.locals.user;
    return data && data.length ? user?.[data] : user;
  },
);
