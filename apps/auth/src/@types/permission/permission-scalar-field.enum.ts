import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
  id = 'id',
  title = 'title',
  description = 'description',
  created = 'created',
  updated = 'updated',
}

registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined });
