import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CellGatheringMemberEntity } from './cell-gathering-member.entity';
import { CellEntity } from './cell.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('cell_gathering', { schema: 'feed_my_sheep' })
export class CellGatheringEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'cell_gathering_id',
    comment: '셀 모임 아이디',
  })
  cellGatheringId: number;

  @OneToMany(
    () => CellGatheringMemberEntity,
    (cellGatheringMemberEntity) => cellGatheringMemberEntity.cellGathering,
  )
  cellGatheringMemberList: CellGatheringMemberEntity[];

  @Column('bigint', { name: 'cell_id', comment: '셀 아이디' })
  cellId: number;

  @ManyToOne(() => CellEntity, (cellEntity) => cellEntity.cellGatheringList)
  @JoinColumn({ name: 'cell_id' })
  cell: CellEntity;

  @Column('varchar', {
    name: 'gathering_title',
    comment: '모임 이름 (날짜 혹은 특정 모임 이름)',
    length: 100,
  })
  gatheringTitle: string;

  @Column('date', { name: 'gathering_date', comment: '모임 날짜' })
  gatheringDate: string;

  @Column('datetime', { name: 'started_at', comment: '시작 시간' })
  startedAt: Date;

  @Column('datetime', { name: 'ended_at', comment: '종료 시간' })
  endedAt: Date;

  @Column('varchar', {
    name: 'gathering_place',
    comment: '모임 장소',
    length: 50,
  })
  gatheringPlace: string;

  @Column('varchar', {
    name: 'gathering_photo_url',
    nullable: true,
    comment: '모임 사진',
    length: 200,
  })
  gatheringPhotoUrl: string | null;

  @Column('varchar', {
    name: 'leader_comment',
    nullable: true,
    comment: '모임에 대한 리더 코멘트',
    length: 100,
  })
  leaderComment: string | null;

  @Column('varchar', {
    name: 'pastor_comment',
    nullable: true,
    comment: '모임에 대한 목사님 코멘트',
    length: 100,
  })
  pastorComment: string | null;

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
