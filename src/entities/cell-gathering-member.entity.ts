import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CellGatheringMemberPrayerEntity } from './cell-gathering-member-prayer.entity';
import { CellGatheringEntity } from './cell-gathering.entity';
import { MemberEntity } from './member.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cell_gathering_member', { schema: 'feed_my_sheep' })
export class CellGatheringMemberEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'cell_gathering_member_id',
    comment: '셀 모임 멤버 아이디',
  })
  cellGatheringMemberId: number;

  @OneToMany(
    () => CellGatheringMemberPrayerEntity,
    (cellGatheringMemberPrayerEntity) =>
      cellGatheringMemberPrayerEntity.cellGatheringMember,
  )
  cellGatheringMemberPrayerList: CellGatheringMemberPrayerEntity[];

  @Column('bigint', { name: 'cell_gathering_id', comment: '셀 모임 아이디' })
  cellGatheringId: number;

  @ManyToOne(
    () => CellGatheringEntity,
    (cellGatheringEntity) => cellGatheringEntity.cellGatheringMemberList,
  )
  @JoinColumn({ name: 'cell_gathering_id' })
  cellGathering: CellGatheringEntity;

  @Column('bigint', { name: 'member_id', comment: '멤버 아이디' })
  memberId: number;

  @OneToOne(
    () => MemberEntity,
    (memberEntity) => memberEntity.cellGatheringMember,
  )
  member: MemberEntity;

  @Column('tinyint', {
    name: 'worship_attandance',
    comment: '예배 참석 여부',
    width: 1,
    default: () => "'0'",
  })
  worshipAttandance: boolean;

  @Column('tinyint', {
    name: 'cell_gathering_attandance',
    comment: '셀 모임 참석 여부',
    width: 1,
    default: () => "'0'",
  })
  cellGatheringAttandance: boolean;

  @Column('varchar', {
    name: 'story',
    nullable: true,
    comment: '삶 나눔',
    length: 500,
  })
  story: string | null;

  @Column('varchar', {
    name: 'leader_comment',
    nullable: true,
    comment: '모임의 멤버에 대한 리더 코멘트',
    length: 100,
  })
  leaderComment: string | null;

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
