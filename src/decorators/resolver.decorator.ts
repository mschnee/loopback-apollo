import { ClassDecoratorFactory } from "@loopback/metadata";
import { RESOLVER_KEY } from "../keys";
import { ResolverDecoratorMetadata } from "../metadata/ResolverDecoratorMetadata";
import { ReturnTypeFunc } from "../types/TypeFn";

// must be on a class
export function resolver(resolverFor?: ReturnTypeFunc) {
    return ClassDecoratorFactory.createDecorator<ResolverDecoratorMetadata>(
        RESOLVER_KEY,
        {typeFn: resolverFor},
        {decoratorName: '@apollo.resolver'},
    );
}