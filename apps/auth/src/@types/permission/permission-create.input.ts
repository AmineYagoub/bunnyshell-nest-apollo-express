import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedManyWithoutPermissionsInput } from '../role/role-create-nested-many-without-permissions.input';

@InputType()
export class PermissionCreateInput {
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

  @Field(() => RoleCreateNestedManyWithoutPermissionsInput, { nullable: true })
  roles?: RoleCreateNestedManyWithoutPermissionsInput;
}
