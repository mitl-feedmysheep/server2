import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CellEntity } from './cell.entity';
import { MemberEntity } from './member.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cell_member', { schema: 'feed_my_sheep' })
export class CellMemberEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'cell_member_id',
    comment: '셀 멤버 아이디',
  })
  cellMemberId: number;

  @Column('bigint', { name: 'cell_id', comment: '셀 아이디' })
  cellId: number;

  @ManyToOne(() => CellEntity, (cellEntity) => cellEntity.cellMemberList)
  cell: CellEntity;

  @Column('bigint', { name: 'member_id', comment: '멤버 아이디' })
  memberId: number;

  @OneToOne(() => MemberEntity, (memberEntity) => memberEntity.cellMember)
  member: MemberEntity;

  @Column('tinyint', { name: 'is_valid', comment: '유효 여부', width: 1 })
  isValid: boolean;

  @Column('date', { name: 'start_date', comment: '시작 날짜' })
  startDate: string;

  @Column('date', { name: 'end_date', comment: '종료 날짜' })
  endDate: string;

  @Column('varchar', {
    name: 'excluded_reason',
    nullable: true,
    comment: '제외 사유',
    length: 50,
  })
  excludedReason: string | null;

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
