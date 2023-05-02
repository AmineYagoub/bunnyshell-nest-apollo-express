import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  email!: number;

  @HideField()
  password!: number;

  @Field(() => Int, { nullable: false })
  isActive!: number;

  @Field(() => Int, { nullable: false })
  created!: number;

  @Field(() => Int, { nullable: false })
  updated!: number;

  @Field(() => Int, { nullable: false })
  roleId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
