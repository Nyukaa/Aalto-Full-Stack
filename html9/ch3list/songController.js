import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as songService from "./songService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const listSong = async (c) => {
  const data = {
    song: await songService.listSong(),
  };

  return c.html(
    eta.render("index.eta", data),
  );
};


const addSong = async (c) => {
  const body = await c.req.parseBody();
  await songService.addSong(body);

  return c.redirect("/");
};

export { addSong, listSong };
