import { Constructor } from "@loopback/context";
import { GraphQLScalarType } from "graphql";

export type TypeValue = Constructor<{}> | GraphQLScalarType | Function | object | symbol;
export interface RecursiveArray<TValue> extends Array<RecursiveArray<TValue> | TValue> {}

export type ReturnTypeFuncValue = TypeValue | RecursiveArray<TypeValue>;
export type ReturnTypeFunc = (returns?: void) => ReturnTypeFuncValue;
