import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CellEntity } from './cell.entity';
import { MemberEntity } from './member.entity';
import { PartEntity } from './part.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('body', { schema: 'feed_my_sheep' })
export class BodyEntity {
  @ApiProperty({
    example: 1,
    description: '바디 아이디',
    required: true,
  })
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'body_id',
    comment: '바디 아이디',
  })
  bodyId: number;

  @OneToMany(() => CellEntity, (cellEntity) => cellEntity.body)
  cellList: CellEntity[];

  @ApiProperty({
    example: 15,
    description: '멤버 아이디 (팀장)',
    required: true,
  })
  @Column('bigint', { name: 'member_id', comment: '멤버 아이디 (팀장)' })
  memberId: number;

  @OneToOne(() => MemberEntity, (memberEntity) => memberEntity.body)
  member: MemberEntity;

  @ApiProperty({
    example: 5,
    description: '파트 아이디',
    required: true,
  })
  @Column('bigint', { name: 'part_id', comment: '파트 아이디' })
  partId: number;

  @ManyToOne(() => PartEntity, (partEntity) => partEntity.bodyList)
  @JoinColumn({ name: 'part_id' })
  part: PartEntity;

  @ApiProperty({
    example: '양육',
    description: '바디 이름',
    required: true,
  })
  @Column('varchar', { name: 'body_name', comment: '바디 이름', length: 50 })
  bodyName: string;

  @ApiProperty({
    example:
      'https://www.shutterstock.com/image-photo/example-word-written-on-wooden-260nw-1765482248.jpg',
    description: '바디 로고 사진 (팀 대표사진)',
    required: true,
  })
  @Column('varchar', {
    name: 'body_logo_url',
    nullable: true,
    comment: '바디 로고 사진 (팀 대표사진)',
    length: 200,
  })
  bodyLogoUrl: string | null;

  @ApiProperty({
    example: '저희 양육팀은 ~~ 역할을 가지고 있습니다.',
    description: '바디 역할 (팀 소개)',
    required: true,
  })
  @Column('varchar', {
    name: 'body_role',
    comment: '바디 역할 (팀 소개)',
    length: 200,
  })
  bodyRole: string;

  @ApiProperty({
    example: '창세기 1장 1절...',
    description: '바디 말씀 (팀 주제 말씀)',
    required: true,
  })
  @Column('varchar', {
    name: 'body_words',
    comment: '바디 말씀 (팀의 주제 말씀)',
    length: 200,
  })
  bodyWords: string;

  @ApiProperty({
    example: '새청 80% 간부화를 목표로..',
    description: '바디 목표',
    required: true,
  })
  @Column('varchar', { name: 'body_goal', comment: '바디 목표', length: 200 })
  bodyGoal: string;

  @ApiProperty({
    example: '양육팀은..',
    description: '바디 설명',
    required: true,
  })
  @Column('varchar', {
    name: 'body_description',
    nullable: true,
    comment: '바디 설명',
    length: 200,
  })
  bodyDescription: string | null;

  @ApiProperty({
    example: true,
    description: '유효여부',
    required: true,
  })
  @Column('tinyint', { name: 'is_valid', comment: '유효여부', width: 1 })
  isValid: boolean;

  @ApiProperty({
    example: '2023-01-01',
    description: '바디 시작날짜',
    required: true,
  })
  @Column('date', { name: 'start_date', comment: '바디 시작날짜' })
  startDate: string;

  @ApiProperty({
    example: '2023-12-31',
    description: '바디 종료날짜',
    required: true,
  })
  @Column('date', { name: 'end_date', comment: '바디 종료날짜' })
  endDate: string;

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
