import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacks from "./feedbacks.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get("/", (c)=>{
  return c.html(eta.render("index.eta"));
});
app.get("/feedbacks/:id", async (c) => {
return c.text(`Feedback ${c.req.param("id")}: ${await feedbacks.getStore(c.req.param("id")) }`);
});
app.post("/feedbacks/:id", async (c) => {
  await feedbacks.increment(c.req.param("id"));
  return c.redirect("/");
});


export default app;
