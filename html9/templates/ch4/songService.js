const addsong = async (songData) => {
    const kv = await Deno.openKv();
    await kv.set(["addresses", addressData.name], songData);
  };
  
  export { addsong };