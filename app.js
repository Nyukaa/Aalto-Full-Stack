import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

let count = 4;

app.get("/", (c) => {
  count=count-1;
  if (count === '0'){
      count="Kaboom!"
  }
  return c.text(count);
});

export default app;