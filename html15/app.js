import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.use("*", async (c, next) => {
  console.log("Middleware 1 - before");
  await next();
  console.log("Middleware 1 - after");
});

app.use("*", async (c, next) => {
  console.log("Middleware 2 - before");
  await next();
  console.log("Middleware 2 - after");
});

app.get("/", (c) => c.text("Hello middlewares!"));

Deno.serve(app.fetch);