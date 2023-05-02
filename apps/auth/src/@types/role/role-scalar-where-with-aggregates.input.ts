import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RoleScalarWhereWithAggregatesInput {
  @Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<RoleScalarWhereWithAggregatesInput>;

  @Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<RoleScalarWhereWithAggregatesInput>;

  @Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<RoleScalarWhereWithAggregatesInput>;

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
