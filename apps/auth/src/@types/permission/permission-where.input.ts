import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoleListRelationFilter } from '../role/role-list-relation-filter.input';

@InputType()
export class PermissionWhereInput {
  @Field(() => [PermissionWhereInput], { nullable: true })
  AND?: Array<PermissionWhereInput>;

  @Field(() => [PermissionWhereInput], { nullable: true })
  OR?: Array<PermissionWhereInput>;

  @Field(() => [PermissionWhereInput], { nullable: true })
  NOT?: Array<PermissionWhereInput>;

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

  @Field(() => RoleListRelationFilter, { nullable: true })
  roles?: RoleListRelationFilter;
}
