import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";

import { echo } from "../app.js";

Deno.test("Function echo returns message", () => {
    assertEquals(echo("Anna"), "Anna");
  });  
Deno.test("Function echo returns 'echoechoecho'", () => {
    assertEquals(echo(), "echoechoecho");
  });
Deno.test("Function echo returns 'hello world'", () => {
    assertEquals(echo("Anna"), "hello world");
  });  
