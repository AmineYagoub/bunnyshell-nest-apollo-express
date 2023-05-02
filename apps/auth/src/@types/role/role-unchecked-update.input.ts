import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PermissionUncheckedUpdateManyWithoutRolesNestedInput } from '../permission/permission-unchecked-update-many-without-roles-nested.input';
import { UserUncheckedUpdateManyWithoutRoleNestedInput } from '../user/user-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated?: DateTimeFieldUpdateOperationsInput;

  @Field(() => PermissionUncheckedUpdateManyWithoutRolesNestedInput, { nullable: true })
  permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput;

  @Field(() => UserUncheckedUpdateManyWithoutRoleNestedInput, { nullable: true })
  users?: UserUncheckedUpdateManyWithoutRoleNestedInput;
}
