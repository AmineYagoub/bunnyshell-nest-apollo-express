import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppService } from './app.service';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { GQLConfig, GQLConfigType, AppConfigModule } from '@bunnyshell-hack/config';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLEmailAddress } from 'graphql-scalars';

@Module({
  imports: [
    AppConfigModule,
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      useFactory: async (config: GQLConfigType) => ({
        ...config,
        resolvers: { Email: GraphQLEmailAddress },
      }),
      inject: [GQLConfig.KEY],
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
