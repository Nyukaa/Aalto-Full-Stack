// const response = await fetch("https://dog.ceo/api/breeds/image/random");
// const jsonData = await response.json();
// console.log(jsonData);
// console.log(jsonData.message);
// const data = {
//     "day": 1,
//     "month": 1,
//     "country": "fi",
//   };
  
//   const response = await fetch("https://nameday.abalin.net/api/V1/getdate", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(data),
//   });
  
//   const jsonData = await response.json();
//   //console.log(jsonData);
//   console.log(jsonData.nameday.fi);
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

const fetchNamedays = async (day, month) => {
  const data = {
    "day": day,
    "month": month,
    "country": "fi",
  };

  const response = await fetch("https://nameday.abalin.net/api/V1/getdate", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });


  const jsonData = await response.json();
  return jsonData.nameday.fi;
};

app.get("/", async (c) => {
  const namedays = await fetchNamedays(1, 4);
  return c.json({ namedays });
});

Deno.serve(app.fetch);
