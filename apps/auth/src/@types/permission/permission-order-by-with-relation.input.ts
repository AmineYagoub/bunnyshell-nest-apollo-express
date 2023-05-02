import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByRelationAggregateInput } from '../role/role-order-by-relation-aggregate.input';

@InputType()
export class PermissionOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated?: keyof typeof SortOrder;

  @Field(() => RoleOrderByRelationAggregateInput, { nullable: true })
  roles?: RoleOrderByRelationAggregateInput;
}
