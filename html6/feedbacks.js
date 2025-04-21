const getStore = async (val) =>  {
    const kv = await Deno.openKv();
    const count = await kv.get(["feedback",val]);
    return count.value ?? 0;
  };
  
const increment = async (val) => {
    const kv = await Deno.openKv();
    let imp = (await kv.get(["feedback",val])).value ?? 0;
    imp++;
    await kv.set(["feedback",val],imp);
  };
  
  export { getStore, increment };
