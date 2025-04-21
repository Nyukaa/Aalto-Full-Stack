import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as songService from "./songService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const getAndRenderAddresses = async (c) => {
  const data = {
    addresses: await songService.listAddresses(),
  };

  return c.html(
    eta.render("index.eta", data),
  );
};

const listAddresses = async (c) => {
  return await getAndRenderAddresses(c);
};

const addAddressAndListAddresses = async (c) => {
  const body = await c.req.parseBody();
  await addressService.addAddress(body);

  return await getAndRenderAddresses(c);
};

export { addAddressAndListAddresses, listAddresses };