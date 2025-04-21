import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();
const secret = "secret";

const sessionResourceAccess = new Map();

const passwordMap = new Map();
passwordMap.set("very secret password", "1");
passwordMap.set("super secret password", "2");

app.get("/", (c) =>
  c.html(`<form method="POST" action="/authenticate">
  <input type="password" name="password" />
  <input type="submit" />
</form>`));

app.post("/authenticate", async (c) => {
  const body = await c.req.parseBody();
  if (!passwordMap.has(body.password)) {
    return c.text("Invalid password, you are not authenticated!", 401);
  }

  const sessionId = crypto.randomUUID();
  await setSignedCookie(c, "sessionId", sessionId, secret, {
    path: "/",
  });
  const resourceId = passwordMap.get(body.password);
  sessionResourceAccess.set(sessionId, resourceId);

  return c.redirect(`/secrets/${resourceId}`);
});

app.get("/secrets/:id", async (c) => {
  const sessionId = await getSignedCookie(c, secret, "sessionId");
  if (!sessionId || !sessionResourceAccess.has(sessionId)) {
    return c.text("You have not authenticated!", 401);
  }

  const askedForResource = c.req.param("id");
  const accessToResource = sessionResourceAccess.get(sessionId);

  if (askedForResource !== accessToResource) {
    return c.text("You are not authorized!", 401);
  }

  return c.text(`Here's the secret ${c.req.param("id")}`);
});

Deno.serve(app.fetch);
