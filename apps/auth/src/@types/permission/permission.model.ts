import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {
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

  @Field(() => [Role], { nullable: true })
  roles?: Array<Role>;

  @Field(() => PermissionCount, { nullable: false })
  _count?: PermissionCount;
}
