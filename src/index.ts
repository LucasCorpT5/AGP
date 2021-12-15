import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { context } from "./context";

const app = async () => {
    const schema = await buildSchema({ resolvers: [] })

    new ApolloServer({ schema, context }).listen({ port: 3000 }), () => {
        console.log("Server is running 🚀");
    }
}

app();