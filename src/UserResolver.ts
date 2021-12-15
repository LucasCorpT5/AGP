import { Arg, Ctx, Field, InputType, Query, Resolver, Mutation } from "type-graphql";
import { User } from "./User"
import { Context } from "./context";


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
    async privateInfo(
        @Arg("token") token: string,
        @Ctx() ctx: Context): Promise<User | null> {
        const dbToken = await ctx.prisma.tokens.findUnique({
            where: {
                token: token
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


    @Mutation((returns) => User)
    async singUp(@Arg("data") data: UserInputData, @Ctx() ctx: Context): Promise<User> {
        return ctx.prisma.users.create({ data });
    }
}