import express from "express";
import compression from "compression";
import schema from "./schema";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";

const app: any = express();

app.use(compression());

const server = new ApolloServer({ schema, introspection: true });

server.applyMiddleware({ app });

const port = 3000;
const httpServer = createServer(app);

httpServer.listen({ port }, () => {
	console.log(`Graphql app running on port ${port}`);
});
