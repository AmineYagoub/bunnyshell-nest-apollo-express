import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isActive?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  roleId?: keyof typeof SortOrder;

  @Field(() => RoleOrderByWithRelationInput, { nullable: true })
  role?: RoleOrderByWithRelationInput;
}
