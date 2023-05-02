import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionCountAggregate } from './permission-count-aggregate.output';
import { PermissionMinAggregate } from './permission-min-aggregate.output';
import { PermissionMaxAggregate } from './permission-max-aggregate.output';

@ObjectType()
export class PermissionGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: false })
  created!: Date | string;

  @Field(() => Date, { nullable: false })
  updated!: Date | string;

  @Field(() => PermissionCountAggregate, { nullable: true })
  _count?: PermissionCountAggregate;

  @Field(() => PermissionMinAggregate, { nullable: true })
  _min?: PermissionMinAggregate;

  @Field(() => PermissionMaxAggregate, { nullable: true })
  _max?: PermissionMaxAggregate;
}
