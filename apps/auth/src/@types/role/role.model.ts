import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Permission } from '../permission/permission.model';
import { User } from '../user/user.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true, defaultValue: '' })
  description!: string | null;

  @Field(() => Date, { nullable: false })
  created!: Date;

  @Field(() => Date, { nullable: false })
  updated!: Date;

  @Field(() => [Permission], { nullable: true })
  permissions?: Array<Permission>;

  @Field(() => [User], { nullable: true })
  users?: Array<User>;

  @Field(() => RoleCount, { nullable: false })
  _count?: RoleCount;
}
