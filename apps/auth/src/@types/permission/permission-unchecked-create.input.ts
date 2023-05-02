import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUncheckedCreateNestedManyWithoutPermissionsInput } from '../role/role-unchecked-create-nested-many-without-permissions.input';

@InputType()
export class PermissionUncheckedCreateInput {
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

  @Field(() => RoleUncheckedCreateNestedManyWithoutPermissionsInput, { nullable: true })
  roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput;
}
