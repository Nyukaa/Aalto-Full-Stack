import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const validator = z.object({
  email: z.string().email(),
  yearOfBirth: z.coerce.number().min(1900).max(2030),
});

const app = new Hono();

app.post("/emails", async (c) => {
  const body = await c.req.json();
  const validationResult = validator.safeParse(body);
  if (!validationResult.success) {
    return c.json({
      validation: "fail",
      errors: validationResult.error.format()
    });
  }

  return c.json({
    validation: "success"
  });
});

Deno.serve(app.fetch);
