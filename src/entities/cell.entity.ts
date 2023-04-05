import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BodyEntity } from './body.entity';
import { CellGatheringEntity } from './cell-gathering.entity';
import { CellMemberEntity } from './cell-member.entity';
import { MemberEntity } from './member.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cell', { schema: 'feed_my_sheep' })
export class CellEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'cell_id',
    comment: '셀 아이디',
  })
  cellId: number;

  @OneToMany(
    () => CellMemberEntity,
    (cellMemberEntity) => cellMemberEntity.cell,
  )
  cellMemberList: CellMemberEntity[];

  @OneToMany(
    () => CellGatheringEntity,
    (cellGatheringEntity) => cellGatheringEntity.cell,
  )
  cellGatheringList: CellGatheringEntity[];

  @Column('bigint', { name: 'body_id', comment: '바디 아이디' })
  bodyId: number;

  @ManyToOne(() => BodyEntity, (bodyEntity) => bodyEntity.cellList)
  @JoinColumn({ name: 'body_id' })
  body: BodyEntity;

  @Column('bigint', { name: 'member_id', comment: '멤버 아이디 (리더)' })
  memberId: number;

  @OneToOne(() => MemberEntity, (memberEntity) => memberEntity.cell)
  member: MemberEntity;

  @Column('varchar', { name: 'cell_name', comment: '셀 이름', length: 50 })
  cellName: string;

  @Column('varchar', {
    name: 'cell_color',
    comment: '셀 색상 (색상 코드)',
    length: 10,
  })
  cellColor: string;

  @Column('varchar', {
    name: 'cell_logo_url',
    nullable: true,
    comment: '셀 로고 URL',
    length: 200,
  })
  cellLogoUrl: string | null;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: '셀 설명',
    length: 100,
  })
  description: string | null;

  @Column('tinyint', {
    name: 'is_valid',
    comment: '유효 여부',
    width: 1,
    default: () => "'1'",
  })
  isValid: boolean;

  @Column('date', { name: 'start_date', comment: '셀 시작날짜' })
  startDate: string;

  @Column('date', { name: 'end_date', comment: '셀 종료날짜' })
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
