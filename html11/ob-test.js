import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const validator = z.object({
  email: z.string().email(),
});

let result = validator.safeParse("this-is-an@email.com");
console.log(result);

result = validator.safeParse({ email: "this-is-an@email.com" });
console.log(result);


import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const bookValidator = z.object({
    name: z.string(),
    pages:z.number(),
    isbn: z.string(),
});

const personValidator = z.object({
    firstName: z.string(),
    email:     z.string().email(),
    lastName:  z.string(),
});

const courseValidator = z.object({
    name:   z.string(),
    teacher:z.object({
        firstName: z.string(),
        email:     z.string().email(),
        lastName:  z.string(),
    }),
    book:   z.object({
        name: z.string(),
        pages:z.number(),
        isbn: z.string(),
    }),
});    
export { bookValidator, personValidator, courseValidator };
