import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as middlewares from "./middlewares.js";

const app = new Hono();

app.use("*", middlewares.loggerMiddleware);
//app.use("*", middlewares.addUserToContextMiddleware);
//app.use("*", middlewares.accessControlMiddleware);
app.use("*", middlewares.errorMiddleware);

app.get("/", (c) => c.text("Hello middlewares!"));

Deno.serve(app.fetch);