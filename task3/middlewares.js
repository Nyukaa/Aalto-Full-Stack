let inc = 0;
const requestCountingMiddleware = async (c, next) => {
  if (c.req.path === "/x-request-count" && c.req.method === "GET") {
    return c.text(inc);
  }
  await next();
  if (c.req.path !== "/x-request-count" || c.req.method !== "GET") {
    inc++;
   // console.log(inc);
  }
};




export { requestCountingMiddleware };