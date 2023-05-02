import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUncheckedCreateNestedManyWithoutRolesInput } from '../permission/permission-unchecked-create-nested-many-without-roles.input';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../user/user-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateInput {
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

  @Field(() => PermissionUncheckedCreateNestedManyWithoutRolesInput, { nullable: true })
  permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput;

  @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, { nullable: true })
  users?: UserUncheckedCreateNestedManyWithoutRoleInput;
}
