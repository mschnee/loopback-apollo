import {HttpOptions} from '@loopback/http-server';
import {
  ApolloServerExpressConfig,
  GetMiddlewareOptions,
} from 'apollo-server-express';

export interface ApolloComponentOptions {
    asMiddleware: boolean;
    apollo: ApolloServerExpressConfig;
    middleware: GetMiddlewareOptions;
}