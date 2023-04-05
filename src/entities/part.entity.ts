import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BodyEntity } from './body.entity';
import { ChurchEntity } from './church.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('part', { schema: 'feed_my_sheep' })
export class PartEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'part_id',
    comment: '파트 아이디',
  })
  partId: number;

  @OneToMany(() => BodyEntity, (bodyEntity) => bodyEntity.part)
  bodyList: BodyEntity[];

  @Column('bigint', { name: 'church_id', comment: '교회 아이디' })
  churchId: number;

  @ManyToOne(() => ChurchEntity, (churchEntity) => churchEntity.partList)
  @JoinColumn({ name: 'part_id' })
  church: ChurchEntity;

  @Column('varchar', {
    name: 'part_name',
    comment: '파트 이름 (ex. 새청)',
    length: 50,
  })
  partName: string;

  @Column('varchar', {
    name: 'part_logo_url',
    nullable: true,
    comment: '파트 로고 URL',
    length: 200,
  })
  partLogoUrl: string | null;

  @Column('varchar', {
    name: 'part_location',
    comment: '파트 위치',
    length: 200,
  })
  partLocation: string;

  @Column('varchar', {
    name: 'part_number',
    nullable: true,
    comment: '파트 전화번호',
    length: 20,
  })
  partNumber: string | null;

  @Column('varchar', {
    name: 'youtube_url',
    nullable: true,
    comment: '유투브 주소',
    length: 100,
  })
  youtubeUrl: string | null;

  @Column('varchar', {
    name: 'instagram_url',
    nullable: true,
    comment: '인스타그램 주소',
    length: 100,
  })
  instagramUrl: string | null;

  @Column('varchar', {
    name: 'facebook_url',
    nullable: true,
    comment: '페이스북 주소',
    length: 100,
  })
  facebookUrl: string | null;

  @Column('varchar', {
    name: 'part_description',
    nullable: true,
    comment: '설명',
    length: 100,
  })
  partDescription: string | null;

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
