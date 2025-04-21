import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { cors, jwt } from "https://deno.land/x/hono@v3.12.11/middleware.ts";
import { sign } from "https://deno.land/x/hono@v3.12.11/utils/jwt/jwt.ts";

const jwtSecretKey = "secret";

const app = new Hono();
app.use("*", cors());
app.use("/api/secret/*", jwt({ secret: jwtSecretKey }));

app.get("/api/secret/me", async (c) => {
  const payload = c.get("jwtPayload");
  console.log("User making request:");
  console.log(payload);

  const secret = {
    message: "Found it!"
  };
  return c.json(secret);
});

app.post("/api/auth", async (c) => {
  const body = await c.req.json();

  if (body.password !== "Alohomora") {
    return c.json({ error: "Invalid password." }, 400);
  }

  const user = {
    id: 1,
    username: "Harry Potter",
  };

  const signedToken = await sign(user, jwtSecretKey);
  c.header("Access-Control-Expose-Headers", "*");
  c.header("Authorization", `Bearer ${signedToken}`);
  return c.json(user);
});

Deno.serve(app.fetch);
//curl --verbose -X POST -d '{"password":"Alohomora"}' localhost:8000/api/auth
//curl -X POST -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYXJyeSBQb3R0ZXIifQ.rsjeBSezjW1tqbGMaIsP4qL6THi4JV7TyW0axrAd940' localhost:8000/api/secret/me
//{"id":1,"username":"Harry Potter","message":"Correct credentials!"}