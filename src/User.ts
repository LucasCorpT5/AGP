import { Field, ObjectType, ID } from "type-graphql";
import { IsEmail } from "class-validator";

@ObjectType()
export class User {
    @Field((type) => ID)
    id: string;

    @Field((type) => String)
    name: string;

    @Field()
    email: string;

    @Field((type) => String)
    password: string;

    @Field((type) => Date)
    createdAt: Date;
}

@ObjectType()
export class UserLog {
    @Field((type) => ID)
    id: string

    @Field((type) => String)
    name: string

    @Field((type) => String)
    email: string
}