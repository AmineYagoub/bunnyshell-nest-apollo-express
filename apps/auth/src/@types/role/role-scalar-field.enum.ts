import { registerEnumType } from '@nestjs/graphql';

export enum RoleScalarFieldEnum {
  id = 'id',
  title = 'title',
  description = 'description',
  created = 'created',
  updated = 'updated',
}

registerEnumType(RoleScalarFieldEnum, { name: 'RoleScalarFieldEnum', description: undefined });
