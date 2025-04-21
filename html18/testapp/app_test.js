import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";
import app from "./app.js";

Deno.test("GET / returns 'Hello World!'", async () => {
  let res = await app.request("/");
  let body = await res.text();
  assertEquals(body, "Hello World!");
});
// synitise, so we need to close broser\
//Deno.test({
//   name: "GET / returns 'Hello World!'", 
//   fn: async () => {
//     let request = new Request("http://localhost/");
//     let res = await app.request(request);
//     let body = await res.text();
//     assertEquals(body, "Hello World!");
//   },
//   sanitizeResources: false,
//   sanitizeOps: false,
// });