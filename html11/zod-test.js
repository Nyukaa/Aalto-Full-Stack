import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const validator = z.string().email();

let result = validator.safeParse("This is not an email");
console.log(result);

result = validator.safeParse("this-is-an@email.com");
console.log(result);