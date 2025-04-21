import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/", (c) =>
  c.html(`
  <form method="POST" action="/emails">
    <input type="email" name="email" />
    <input type="submit" />
  </form>`));

app.post("/emails", async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  if (!body || !body.email || !body.email.includes("@")) {
    return c.text("not ok");
  }
  return c.text("ok");
});

Deno.serve(app.fetch);