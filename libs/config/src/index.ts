export * from './lib/config.module';
export * from './lib/auth.config';
export * from './lib/graphql.config';
export const isProd = process.env['NODE_ENV'] === 'production';
