import { isProd } from '../';
import { Inject } from '@nestjs/common';
import { Federation2Config } from '@nestjs/graphql';
import { ConfigType, registerAs } from '@nestjs/config';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

export const GQL_REGISTER_KEY = 'GQLConfig';

export const GQLConfig = registerAs(GQL_REGISTER_KEY, () => ({
  autoSchemaFile: {
    federation: {
      version: 2,
    } as Federation2Config,
  },
  cors: false,
  graphiql: !isProd,
  federationMetadata: true,
  debug: !isProd,
  plugins: [
    isProd
      ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: 'my-graph-id@my-graph-variant',
          footer: false,
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ApolloServerPluginInlineTraceDisabled(),
  ],
  context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),
}));

export type GQLConfigType = ConfigType<typeof GQLConfig>;
export const InjectGQLConfig = () => Inject(GQLConfig.KEY);
