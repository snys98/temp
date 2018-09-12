
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class User {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    username: string;

    @Field(type => [String], { nullable: true })
    usedNames?: string[];
}
