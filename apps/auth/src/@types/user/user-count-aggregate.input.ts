import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  email?: true;

  @Field(() => Boolean, { nullable: true })
  password?: true;

  @Field(() => Boolean, { nullable: true })
  isActive?: true;

  @Field(() => Boolean, { nullable: true })
  created?: true;

  @Field(() => Boolean, { nullable: true })
  updated?: true;

  @Field(() => Boolean, { nullable: true })
  roleId?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
