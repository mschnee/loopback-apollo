import { MetadataAccessor } from "@loopback/metadata";
import { ResolverDecoratorMetadata } from "./metadata/ResolverDecoratorMetadata";

export const RESOLVER_KEY = MetadataAccessor.create<
    ResolverDecoratorMetadata,
    ClassDecorator
  >('openapi-v3:class');
