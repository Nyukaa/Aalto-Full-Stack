import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as courseService from "./courseService.js";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
const validator = z.object({
  title: z.string().min(4, { message: "The course name should be a string of at least 4 characters." }),
});
const showForm = async (c) => {
    return c.html(
      eta.render("courses.eta", { courses: await courseService.listCourses() }),
    );
  };

const createCourse = async (c) => {
    const body = await c.req.parseBody();
    const validationResult = validator.safeParse(body);
  if (!validationResult.success) {
    return c.html(
      eta.render("courses.eta", {
        ...body,
        courses: await courseService.listCourses(),
        errors: validationResult.error.format(),
      }),
    );
  }
    await courseService.createCourse(body);
    return c.redirect("/courses");
  };

const showCourse = async (c) => {
    const id = c.req.param("id");
    return c.html(
      eta.render("course.eta", {
        course: await courseService.getCourse(id),
        hascookie: getCookie(c, c.req.param("id")),
      }),
    );
  }; 

  const deleteCourse = async (c) => {
    const id = c.req.param("id");
    await courseService.deleteCourse(id);
    return c.redirect("/courses");
  };
  const rateCourse = async (c) => {
    const kv = await Deno.openKv();
    let imp = (await kv.get(["feedback",c.req.param("id"),c.req.param("fid")])).value ?? 0;
    imp++;
    setCookie(c, c.req.param("id"), 1 );
    await kv.set(["feedback",c.req.param("id"),c.req.param("fid")],imp);
    return c.redirect(`/courses/${c.req.param("id")}`);
  };

  const getRateCourse =  async (c) => {
    const kv = await Deno.openKv();
    const count = (await kv.get(["feedback",c.req.param("id"),c.req.param("fid")])).value ?? 0;

    return c.text(`Feedback ${c.req.param("fid")}: ${count}`);
      };


export {showForm, createCourse, showCourse, deleteCourse, rateCourse, getRateCourse };