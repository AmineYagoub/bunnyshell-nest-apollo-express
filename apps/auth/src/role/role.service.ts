import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../app/prisma.service';
import { RoleWhereUniqueInput } from '../@types/role/role-where-unique.input';
import { PermissionWhereUniqueInput } from '../@types/permission/permission-where-unique.input';
import { RoleWhereInput } from '../@types/role/role-where.input';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  /**
   * Find a Role by its unique key.
   *
   * @param input RoleWhereUniqueInput The unique key of the Role.
   * @returns Promise<Role | null>
   */
  async findUnique(input: RoleWhereUniqueInput) {
    try {
      return this.prisma.role.findUniqueOrThrow({
        where: input,
        include: { permissions: true },
      });
    } catch (error) {
      Logger.error(error);
    }
  }

  /**
   * Find all Roles.
   *
   * @returns Promise<Role[]>
   */
  async findAll(args: RoleWhereInput) {
    try {
      return this.prisma.role.findMany({
        where: args,
      });
    } catch (error) {
      Logger.error(error);
    }
  }

  /**
   * Link or unlink permission with role.
   *
   * @param role RoleWhereUniqueInput
   * @param permission PermissionWhereUniqueInput
   * @param link boolean
   * @returns Promise<Role>
   */
  async linkPermissionsWithRole(role: RoleWhereUniqueInput, permission: PermissionWhereUniqueInput, link: boolean) {
    try {
      return this.prisma.role.update({
        where: role,
        data: {
          permissions: link
            ? {
                connect: permission,
              }
            : {
                disconnect: permission,
              },
        },
      });
    } catch (error) {
      Logger.error(error);
    }
  }
}
