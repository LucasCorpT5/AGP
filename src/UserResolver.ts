import { Arg, Ctx, Field, InputType, Query, Resolver, Mutation, ObjectType } from "type-graphql";
import { User } from "./User"
import { UserLog } from "./User"
import { Context } from "./context";
import { hash, compare } from "bcryptjs";
import { v4 as uuid } from "uuid";
@InputType()
class UserInputDataSing {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;
}
@InputType()
class UserInputDataLogin {
    @Field()
    email: string;

    @Field()
    password: string;
}

@ObjectType()
class UserWithToken {
    @Field()
    user: UserLog

    @Field()
    token: string
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
    async singUp(@Arg("data") data: UserInputDataSing, @Ctx() ctx: Context): Promise<User> {
        const hashedPassword = await hash(data.password, 10);
        return ctx.prisma.users.create({ data: { ...data, password: hashedPassword } });
    }

    @Mutation((returns) => UserWithToken)
    async Login(@Arg("data") data: UserInputDataLogin, @Ctx() ctx: Context): Promise<UserLog & { token: string } | null> {
        const user = await ctx.prisma.users.findUnique({
            where: {
                email: data.email
            }
        });

        if (!user) {
            return null;
        }
        const validation = await compare(data.password, user.password);

        if (!validation) {
            return null;
        }

        const tokenCode = uuid();

        const token = await ctx.prisma.tokens.create({
            data: { token: tokenCode, user: { connect: { id: user.id } } }
        });

        return { ...user, token: token.token };
    }
}