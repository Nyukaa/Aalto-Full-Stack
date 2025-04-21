import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { cors } from "https://deno.land/x/hono@v3.12.11/middleware.ts";

const app = new Hono();

app.use('/*', cors())

let count = 0;

app.post("/count", (c) => {
  count++;
  return c.json({ count });
});

app.get("/count", (c) => c.json({ count }));

Deno.serve(app.fetch);