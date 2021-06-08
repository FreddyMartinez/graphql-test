import express from "express";
import compression from "compression";
import { graphqlHTTP } from 'express-graphql'
import schema from "./schema";

const app = express();

app.use(compression());

app.use("/", graphqlHTTP({
  schema,
  graphiql: true
}));

const port = 3000;

app.listen({ port }, () => {
	console.log(`Graphql app running on port ${port}`);
});
