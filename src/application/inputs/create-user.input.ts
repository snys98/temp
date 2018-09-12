import { InputType, Field, ArgsType, Int } from "type-graphql";
import { MaxLength, Length, Min, Max, ArrayMaxSize } from "class-validator";
@InputType()
export class CreateUserInput {
    @Field()
    @MaxLength(30)
    username: string;

    @Field({ nullable: true })
    @Length(30, 255)
    description?: string;

    @Field(type => [String])
    @ArrayMaxSize(30)
    usedNames: string[];
}

@ArgsType()
export class PageQueryArgs {
    @Field(type => Int, { nullable: true })
    @Min(0)
    pageIndex = 0;

    @Field(type => Int, { nullable: true })
    @Min(1) @Max(50)
    pageSize = 25;
}
