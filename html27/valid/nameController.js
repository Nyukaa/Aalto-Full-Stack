import * as nameService from "./nameService.js";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const validator = z.object({
    name: z.string(),
});   
const getNames = (c) => {
  return c.json(nameService.getNames());
};

const postName = async (c) => {
  const body = await c.req.json();
  const validationResult = validator.safeParse(body);
  if (!validationResult.success) {
    return c.json({
      validation: "fail",
      errors: validationResult.error.format()
    });
  }
  nameService.addName(body);
  return c.json({
    validation: "success"
  });

};

export { getNames, postName };
