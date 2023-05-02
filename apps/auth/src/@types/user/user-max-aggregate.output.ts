import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @HideField()
  password?: string;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => Date, { nullable: true })
  created?: Date | string;

  @Field(() => Date, { nullable: true })
  updated?: Date | string;

  @Field(() => String, { nullable: true })
  roleId?: string;
}
