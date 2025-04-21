import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacks from "./feedbacks.js";

const app = new Hono();

app.get("/feedbacks/:id", async (c) => {
return c.text(`Feedback ${c.req.param("id")}: ${await feedbacks.getStore(c.req.param("id")) }`);
});
app.post("/feedbacks/:id", async (c) => {
  await feedbacks.increment(c.req.param("id"));
 
});


export default app;