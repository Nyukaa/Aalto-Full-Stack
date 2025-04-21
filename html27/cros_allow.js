import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { cors } from "https://deno.land/x/hono@v3.12.11/middleware.ts";

const app = new Hono();

app.use('/*', cors())

const data = {
  name: "Karen Spärck Jones",
  yearOfBirth: 1935,
  title: "Professor",
};

app.get("/", (c) => c.json(data));

Deno.serve(app.fetch);