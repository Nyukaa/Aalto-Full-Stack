import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";
import { getHello } from "../../services/helloService.js";
import { setHello } from "../../services/helloService.js";

Deno.test("Calling 'getHello()' returns 'Oh, hello there!'", async () => {
  assertEquals(getHello(), "Oh, hello there!");
});
Deno.test("Message using setHello() returned from getHello", async () => {
    setHello();
    assertEquals(getHello(), "Oh, hello there!");
});
Deno.test("Message using Hello! in setHello  returned from getHello", async () => {
    setHello("Hello!");
    assertEquals(getHello(), "Hello!");
});
Deno.test("Message using Hello! in setHello  returned from getHello", async () => {
    setHello("Hello new world");
    assertEquals(getHello(), "Hello new...");
});

//deno test --coverage=test_cov
//deno coverage test_cov