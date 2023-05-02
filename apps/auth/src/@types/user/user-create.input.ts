import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  @Validator.IsUUID()
  id?: string;

  @Field(() => Scalars.GraphQLEmailAddress, { nullable: false })
  @Validator.IsEmail()
  email!: string;

  @Field(() => String, { nullable: false })
  @Validator.MinLength(8)
  password!: string;

  @Field(() => Boolean, { nullable: true })
  @Validator.IsBoolean()
  isActive?: boolean;

  @Field(() => Date, { nullable: true })
  @Validator.IsDate()
  created?: Date | string;

  @Field(() => Date, { nullable: true })
  @Validator.IsDate()
  updated?: Date | string;

  @Field(() => RoleCreateNestedOneWithoutUsersInput, { nullable: false })
  role!: RoleCreateNestedOneWithoutUsersInput;
}
