import express from "express";
import compression from "compression";
import { IResolvers } from "@graphql-tools/utils";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlHTTP } from 'express-graphql'

const app = express();

app.use(compression());

const typeDefs = `
  type Query {
    hola: String!
    holaConNombre(nombre: String!): String!
    holaGraphQL: String!
  }
`;

const resolvers: IResolvers = {
  Query : {
    hola(): string{
      return 'Hola Mundo';
    },
    holaConNombre(__: void, { nombre }): string{
      return `Hola ${nombre}`;
    },
    holaGraphQL(): string {
      return 'Hola GraphQL';
    }
  }
}

const schema: GraphQLSchema = makeExecutableSchema({typeDefs, resolvers});

app.use("/", graphqlHTTP({
  schema,
  graphiql: true
}));

const port = 3000;

app.listen({ port }, () => {
	console.log(`Graphql app running on port ${port}`);
});
