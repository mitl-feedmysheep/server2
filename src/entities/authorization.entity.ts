import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MemberEntity } from './member.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('authorization', { schema: 'feed_my_sheep' })
export class AuthorizationEntity {
  @ApiProperty({
    example: 1,
    description: '권한 아이디',
    required: true,
  })
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'authorization_id',
    comment: '권한 아이디',
  })
  authorizationId: number;

  @OneToOne(() => MemberEntity, (memberEntity) => memberEntity.authorization)
  @JoinColumn({ name: 'authorization_id' })
  member: MemberEntity;

  @ApiProperty({
    example: 1,
    description: '교회 아이디',
    required: true,
  })
  @Column('bigint', { name: 'church_id', comment: '교회 아이디' })
  churchId: number;

  @ApiProperty({
    example: 1,
    description: '권한',
    required: true,
  })
  @Column('int', {
    name: 'level',
    comment: '1~10: 모든권한 / 11~20: 서브권한 / 100: 기본권한',
    default: () => "'100'",
  })
  level: number;

  @ApiProperty({
    example: '목사',
    description: '권한 이름 (ex. 목사)',
    required: true,
  })
  @Column('varchar', {
    name: 'level_name',
    comment: '권한 이름 (ex. 목사)',
    length: 20,
  })
  levelName: string;

  @ApiProperty({
    example: '2023-04-01 12:13:14',
    description: '생성일시',
    required: true,
  })
  @Column('datetime', {
    name: 'created_at',
    comment: '생성일시',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @ApiProperty({
    example: 15,
    description: '생성자',
    required: true,
  })
  @Column('int', { name: 'created_by', comment: '생성자' })
  createdBy: number;

  @ApiProperty({
    example: '2023-04-01 12:13:14',
    description: '수정일시',
    required: true,
  })
  @Column('datetime', {
    name: 'updated_at',
    comment: '수정일시',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ApiProperty({
    example: 15,
    description: '수정자',
    required: true,
  })
  @Column('int', { name: 'updated_by', comment: '수정자' })
  updatedBy: number;
}
