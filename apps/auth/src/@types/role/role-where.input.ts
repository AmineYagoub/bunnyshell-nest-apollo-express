import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PermissionListRelationFilter } from '../permission/permission-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class RoleWhereInput {
  @Field(() => [RoleWhereInput], { nullable: true })
  AND?: Array<RoleWhereInput>;

  @Field(() => [RoleWhereInput], { nullable: true })
  OR?: Array<RoleWhereInput>;

  @Field(() => [RoleWhereInput], { nullable: true })
  NOT?: Array<RoleWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated?: DateTimeFilter;

  @Field(() => PermissionListRelationFilter, { nullable: true })
  permissions?: PermissionListRelationFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  users?: UserListRelationFilter;
}
