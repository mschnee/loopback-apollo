import { PropertyDecoratorFactory } from "@loopback/metadata";
import { FIELD_KEY } from "../keys";

export function field() {
    return PropertyDecoratorFactory.createDecorator(FIELD_KEY, null, {
        decoratorName: '@apollo.field'
    })
}