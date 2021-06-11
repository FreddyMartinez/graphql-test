import express, { Application } from "express";
import compression from "compression";
import { createServer } from "http";

const app: Application = express();
app.use(compression());

app.get("/", (req, res) => {
	res.send("Hello Online Academy");
});

const httpServer = createServer(app);

const port = 3000;

httpServer.listen({ port }, () => console.log(`Listening on port ${port}`));
