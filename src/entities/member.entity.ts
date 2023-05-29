import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuthorizationEntity } from './authorization.entity';
import { BodyEntity } from './body.entity';
import { CellGatheringMemberEntity } from './cell-gathering-member.entity';
import { CellMemberEntity } from './cell-member.entity';
import { CellEntity } from './cell.entity';
import { ChurchEntity } from './church.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('member', { schema: 'feed_my_sheep' })
export class MemberEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'member_id',
    comment: '멤버 아이디',
  })
  memberId: number;

  @ManyToOne(() => ChurchEntity, (churchEntity) => churchEntity.memberList)
  @JoinColumn()
  church: ChurchEntity;

  @OneToOne(() => BodyEntity, (bodyEntity) => bodyEntity.member)
  @JoinColumn()
  body: BodyEntity;

  @OneToOne(() => CellEntity, (cellEntity) => cellEntity.member)
  @JoinColumn()
  cell: CellEntity;

  @OneToOne(
    () => CellGatheringMemberEntity,
    (cellGatheringMemberEntity) => cellGatheringMemberEntity.member,
  )
  @JoinColumn()
  cellGatheringMember: CellGatheringMemberEntity;

  @OneToOne(
    () => CellMemberEntity,
    (cellMemberEntity) => cellMemberEntity.member,
  )
  @JoinColumn()
  cellMember: CellMemberEntity;

  @OneToOne(
    () => AuthorizationEntity,
    (authorizationEntity) => authorizationEntity.member,
  )
  authorization: AuthorizationEntity;

  @Column('bigint', { name: 'church_id', comment: '교회 아이디' })
  churchId: number;

  @Column('bigint', { name: 'authorization_id', comment: '권한 아이디' })
  authorizationId: number;

  @Column('varchar', { name: 'member_name', comment: '멤버 이름', length: 10 })
  memberName: string;

  @Column('varchar', { name: 'sex', comment: '성별 (M / F)', length: 1 })
  sex: string;

  @Column('date', { name: 'birthday', comment: '멤버 생년월일' })
  birthday: string;

  @Column('varchar', { name: 'phone', comment: '멤버 휴대폰번호', length: 20 })
  phone: string;

  @Column('varchar', {
    name: 'profile_image_url',
    nullable: true,
    comment: '멤버 프로필 이미지 URL',
    length: 200,
  })
  profileImageUrl: string | null;

  @Column('varchar', {
    name: 'address',
    nullable: true,
    comment: '멤버 주소',
    length: 100,
  })
  address: string | null;

  @Column('varchar', {
    name: 'member_description',
    nullable: true,
    comment: '멤버 특이사항',
    length: 100,
  })
  memberDescription: string | null;

  @Column('tinyint', {
    name: 'millitary_service',
    comment: '멤버 복무중 여부',
    width: 1,
    default: () => "'0'",
  })
  millitaryService: boolean;

  @Column('tinyint', {
    name: 'studying_abroad',
    comment: '멤버 유학중 여부',
    width: 1,
    default: () => "'0'",
  })
  studyingAbroad: boolean;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    comment: '멤버 로그인 이메일',
    length: 100,
  })
  email: string | null;

  @Column('datetime', {
    name: 'registered_at',
    nullable: true,
    comment: '멤버 가입일시',
  })
  registeredAt: Date | null;

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
