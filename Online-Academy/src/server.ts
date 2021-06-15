import express, { Application } from "express";
import compression from "compression";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import schema from './schema/index';
import expressPlayground from 'graphql-playground-middleware-express'

const app: Application = express();
app.use(compression());

const server = new ApolloServer({ schema, introspection: true })

server.applyMiddleware({ app });

app.get("/", expressPlayground({ endpoint: "graphql" }));

const httpServer = createServer(app);

const port = 3000;

httpServer.listen({ port }, () => console.log(`Listening on port ${port}`));
