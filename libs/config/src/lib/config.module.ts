import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GQLConfig } from './graphql.config';
import { authConfig } from './auth.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [GQLConfig, authConfig],
    }),
  ],
})
export class AppConfigModule {}
