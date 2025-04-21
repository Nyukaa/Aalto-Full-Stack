
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { cors } from "https://deno.land/x/hono@v3.12.11/middleware.ts";

const app = new Hono();
app.use(cors());

const apiKeyVerification = async (c, next) => {
  console.log(c.req.header("API_KEY"));
  if (c.req.header("API_KEY") === "Alohomora") {
    await next();
  } else {
    return c.text("Invalid API key", 400);
  }
};

app.use("*", apiKeyVerification);

app.get("/", (c) => c.json({ pass: "You pass." }));

Deno.serve(app.fetch);