import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const AUTH_CONFIG_REGISTER_KEY = 'authConfig';

export const authConfig = registerAs(AUTH_CONFIG_REGISTER_KEY, () => ({
  // Host of the auth server
  protocol: process.env['AUTH_PROTOCOL'] || 'http',
  host: process.env['AUTH_HOST'] || '127.0.0.1',
  port: Number(process.env['AUTH_PORT']) || 9001,
  get url() {
    return `${this.protocol}://${this.host}:${this.port}`;
  },

  jwt: {
    key: process.env['JWT_SECRET'] || 'secret',
    expiresIn: '7d',
    aud: 'Web App',
    iss: 'Web App',
    refreshIn: '7d',
  },
  redis: {
    host: process.env['REDIS_HOST'] || 'localhost',
    port: Number(process.env['REDIS_PORT']) || 6379,
    password: process.env['REDIS_PASSWORD'] || 'secret',
  },
}));

export type AuthConfigType = ConfigType<typeof authConfig>;
export const InjectAuthConfig = () => Inject(authConfig.KEY);
