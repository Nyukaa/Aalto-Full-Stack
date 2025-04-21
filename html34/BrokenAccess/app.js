const handleRequest = async (request) => {
    const url = new URL(request.url);
    const path = url.pathname.slice(1);
  
    return new Response(await Deno.readTextFile(path));
  };
  
  Deno.serve(handleRequest);