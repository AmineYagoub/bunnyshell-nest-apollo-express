import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedManyWithoutRolesInput } from '../permission/permission-create-nested-many-without-roles.input';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: true })
  created?: Date | string;

  @Field(() => Date, { nullable: true })
  updated?: Date | string;

  @Field(() => PermissionCreateNestedManyWithoutRolesInput, { nullable: true })
  permissions?: PermissionCreateNestedManyWithoutRolesInput;

  @Field(() => UserCreateNestedManyWithoutRoleInput, { nullable: true })
  users?: UserCreateNestedManyWithoutRoleInput;
}
