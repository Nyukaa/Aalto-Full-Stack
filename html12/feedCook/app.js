import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacks from "./feedbacks.js";
import * as courseController from "./courseController.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

// app.get("/", (c)=>{
//   return c.html(eta.render("index.eta"));
// });
app.get("/feedbacks/:id", async (c) => {
return c.text(`Feedback ${c.req.param("id")}: ${await feedbacks.getStore(c.req.param("id")) }`);
});
app.post("/feedbacks/:id", async (c) => {
  await feedbacks.increment(c.req.param("id"));
  return c.redirect("/");
});

app.get("/", courseController.showForm);
app.get("/courses", courseController.showForm);
app.get("/courses/:id", courseController.showCourse);
app.post("/courses", courseController.createCourse);
app.post("/courses/:id/delete", courseController.deleteCourse);
app.post("/courses/:id/feedbacks/:fid", courseController.rateCourse);
app.get("/courses/:id/feedbacks/:fid", courseController.getRateCourse);
export default app;
