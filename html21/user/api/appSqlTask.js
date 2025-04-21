import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";

const sql = postgres('postgres://username:password@postgresql_database:5432/database', {});
const portConfig = { port: 7777 };
//const items = [];

const handleGetItem = async (request, urlPatternResult) => {
    try {
        const id = urlPatternResult.pathname.groups.id;
        const items = await sql`SELECT * FROM todos WHERE id = ${id}`;
        return Response.json(items[0]);
    } catch(e){
        return  new Response("Empty", { status: 404 }); 
    }
  };
    

const handleGetItems = async (request) => {
    const items = await sql`SELECT * FROM todos`;
    return Response.json(items);
};

const handlePostItems = async (request) => {
    try {
        const item = await request.json();
        //items.push(item);
        if (item.item) {
        await sql`INSERT INTO todos (todo) VALUES (${item.item})`;
        return new Response("OK", { status: 200 });
        }
        else {
          
            return  new Response("Null", { status: 400 });
        };
    } catch (e) {
      console.error(e);
        return  new Response("Not Json", { status: 400 });
    }
   
  
}  
const urlMapping = [
    {
        method: "GET",
        pattern: new URLPattern({ pathname: "/todos/:id" }),
        fn: handleGetItem,
      },
    
    {
      method: "GET",
      pattern: new URLPattern({ pathname: "/todos" }),
      fn: handleGetItems,
    },
    {
      method: "POST",
      pattern: new URLPattern({ pathname: "/todos" }),
      fn: handlePostItems,
    },
    
  ];
  
  const handleRequest = async (request) => {
    const mapping = urlMapping.find(
      (um) => um.method === request.method && um.pattern.test(request.url)
    );
  
    if (!mapping) {
      return new Response("Not found", { status: 404 });
    }
  
    const mappingResult = mapping.pattern.exec(request.url);
    return await mapping.fn(request, mappingResult);
  };
Deno.serve(portConfig, handleRequest);