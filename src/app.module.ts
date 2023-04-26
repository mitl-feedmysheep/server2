import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';
import { ChurchModule } from './church/church.module';
import { BodyModule } from './body/body.module';
import { CellModule } from './cell/cell.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import {
  AuthorizationEntity,
  BodyEntity,
  CellEntity,
  CellGatheringEntity,
  CellGatheringMemberEntity,
  CellGatheringMemberPrayerEntity,
  CellMemberEntity,
  ChurchEntity,
  MemberEntity,
  PartEntity,
} from './entities';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

console.log('NODE_ENV -->', process.env.PWD);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'prod'
          ? `${process.env.PWD}/src/env/.env.prod`
          : `${process.env.PWD}/src/env/.env.local`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: process.env.host,
      // port: +process.env.port,
      // username: process.env.username,
      // password: process.env.password,
      // database: process.env.database,
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'feed_my_sheep',
      entities: [
        AuthorizationEntity,
        BodyEntity,
        CellEntity,
        CellGatheringEntity,
        CellGatheringMemberEntity,
        CellGatheringMemberPrayerEntity,
        CellMemberEntity,
        ChurchEntity,
        MemberEntity,
        PartEntity,
      ],
      bigNumberStrings: false,
      logging: true,
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    MemberModule,
    AuthModule,
    ChurchModule,
    BodyModule,
    CellModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
