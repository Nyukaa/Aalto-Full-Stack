import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const validator = z.string();

let result = validator.safeParse("a string");
console.log(result);

result = validator.safeParse(123);
console.log(result);