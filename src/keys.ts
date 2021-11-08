import { BindingKey, CoreBindings } from "@loopback/core";
import { MetadataAccessor } from "@loopback/metadata";
import { ApolloServer } from "apollo-server-express";
import { ApolloComponent } from "./apollo.component";
import { ResolverDecoratorMetadata } from "./metadata/ResolverDecoratorMetadata";
import { ApolloComponentOptions } from "./types/ApolloComponentOptions";

export const CONFIG: BindingKey<ApolloComponentOptions> =
  CoreBindings.APPLICATION_CONFIG.deepProperty('apollo');
    

export const GRAPHQL_SERVER = BindingKey.create<ApolloServer>(
  'servers.ApolloServer',
);


export const COMPONENT = BindingKey.create<ApolloComponent>(
  'components.ApolloComponent',
);

export const RESOLVER_KEY = MetadataAccessor.create<
  ResolverDecoratorMetadata,
  ClassDecorator
>('apollo:type-resolver');

export const FIELD_KEY = MetadataAccessor.create<any, PropertyDecorator>('apollo:type-field');