import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const sessionCounts = new Map();
const app = new Hono();
const secret = "secret";
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const getAndIncrementCount = (sessionId) => {
  let count = sessionCounts.get(sessionId) ?? 0;
  count++;
  sessionCounts.set(sessionId, count);
  return count;
};

app.get("/", async (c) => {
  const sessionId = await getSignedCookie(c, secret, "sessionId") ??
    crypto.randomUUID();
  await setSignedCookie(c, "sessionId", sessionId, secret, {
    path: "/",
  });
  const count = getAndIncrementCount(sessionId);
  if (count <=  3){
  return c.html(eta.render("index.eta", "Hello! Here is the paywalled content."));
  }
  return c.html(eta.render("index.eta", "To see more, register and pay up!"));
});

export default app;