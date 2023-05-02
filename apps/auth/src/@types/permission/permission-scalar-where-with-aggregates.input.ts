import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PermissionScalarWhereWithAggregatesInput {
  @Field(() => [PermissionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<PermissionScalarWhereWithAggregatesInput>;

  @Field(() => [PermissionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<PermissionScalarWhereWithAggregatesInput>;

  @Field(() => [PermissionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<PermissionScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated?: DateTimeWithAggregatesFilter;
}
