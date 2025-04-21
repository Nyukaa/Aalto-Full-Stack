import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.post("/", async (c) => {
  const body = await c.req.parseBody();
  return c.text(`Hello ${body.name}!`);
});

export default app; 