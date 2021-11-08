import { field } from "../../decorators/field.decorator";

export class Review {
    @field()
    score: number;
}