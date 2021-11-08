import { Constructor } from "@loopback/core";
import { GraphQLSchema } from "graphql";

export async function buildSchema(resolvers: Constructor<{}>[]): Promise<GraphQLSchema> {
    return {}
}