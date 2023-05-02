import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  @Validator.IsUUID()
  id?: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: true })
  @Validator.IsEmail()
  email?: string;
}
