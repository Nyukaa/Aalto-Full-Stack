

// const accessControlMiddleware = async (c, next) => {
//   const authenticated = c.user;
//   if (!authenticated) {
//     return c.text("You have not authenticated!", 401);
//   }

//   await next();
// }



const errorMiddleware = async (c, next) => {
  try {
    await next();
  } catch (e) {
    // send the error to another service
    console.log(e);
  }
};

const loggerMiddleware = async (c, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${c.req.method} ${c.req.path} - ${ms}ms`);
};

export { 
  //accessControlMiddleware,  
  errorMiddleware, 
  loggerMiddleware
};
