import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;

  @Field(() => BoolNullableFilter, { nullable: true })
  isActive?: BoolNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  roleId?: StringFilter;

  @Field(() => RoleRelationFilter, { nullable: true })
  role?: RoleRelationFilter;
}
