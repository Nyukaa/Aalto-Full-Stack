import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

const data = {
  name: "Karen Spärck Jones",
  yearOfBirth: 1935,
  title: "Professor",
};

app.get("/", (c) => c.json(data));
app.post("/", async (c) => {
    const body = await c.req.json();
    console.log(body);
    body.message = "thanks";
    return c.json(body);
  });

app.get("/secret/:secret", (c) => {
   const data = {
  secret: c.req.param("secret"),
}; 
return c.json(data);
});
app.post("/", async (c) => {
    const body = await c.req.json();
    return c.json(body);
  });
Deno.serve(app.fetch);
//export default app;