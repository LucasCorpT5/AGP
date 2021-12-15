import { Context } from "./context";
import { isEmail } from "class-validator";
import { Args, Ctx, Field, InputType, Query, Resolver } from "type-graphql";


@InputType()
class UserInputData {
    @Field()
    email: string;

    @Field()
    password: string;
}

@Resolver()
export class UserResolver {
    @Query((returns) => User, { nullable: true })
    async privateInfo(@Args("token") token: string, @Ctx() ctx: Context): Promise<User | null> {
        const dbToken = await ctx.prisma.tokens.findUnique({
            where: {
                token: token,
            },
            include: {
                user: true
            },
        })
        if (!dbToken) {
            return null;
        } else {
            const { user } = dbToken;
            return user;
        }
    }
}