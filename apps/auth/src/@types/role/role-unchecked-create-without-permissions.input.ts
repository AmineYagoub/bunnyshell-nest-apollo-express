import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../user/user-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutPermissionsInput {
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

  @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, { nullable: true })
  users?: UserUncheckedCreateNestedManyWithoutRoleInput;
}