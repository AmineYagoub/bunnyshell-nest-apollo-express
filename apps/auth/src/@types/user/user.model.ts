import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../role/role.model';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @HideField()
  password!: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isActive!: boolean | null;

  @Field(() => Date, { nullable: false })
  created!: Date;

  @Field(() => Date, { nullable: false })
  updated!: Date;

  @Field(() => String, { nullable: false })
  roleId!: string;

  @Field(() => Role, { nullable: false })
  role?: Role;
}
