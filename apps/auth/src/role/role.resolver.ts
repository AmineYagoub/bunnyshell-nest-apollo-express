import { Args, Resolver } from '@nestjs/graphql';

import { RoleService } from './role.service';
import { Role } from '../@types/role/role.model';
import { Query } from '@nestjs/common';
import { FindManyRoleArgs } from '../@types/role/find-many-role.args';
import { RoleWhereInput } from '../@types/role/role-where.input';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private roleService: RoleService) {}

  @Query(() => [Role])
  async finsAllRoles(@Args('args') args: RoleWhereInput) {
    return this.roleService.findAll(args);
  }
}
