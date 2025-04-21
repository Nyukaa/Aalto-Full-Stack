import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as courseService from "./courseService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showForm = async (c) => {
    return c.html(
      eta.render("courses.eta", { courses: await courseService.listCourses() }),
    );
  };

const createCourse = async (c) => {
    const body = await c.req.parseBody();
    await courseService.createCourse(body);
    return c.redirect("/courses");
  };

const showCourse = async (c) => {
    const id = c.req.param("id");
    return c.html(
    eta.render("course.eta", { course: await courseService.getCourse(id) }),
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
    await kv.set(["feedback",c.req.param("id"),c.req.param("fid")],imp);
    return c.redirect(`/courses/${c.req.param("id")}`);
  };
  const getRateCourse =  async (c) => {
    const kv = await Deno.openKv();
    const count = (await kv.get(["feedback",c.req.param("id"),c.req.param("fid")])).value ?? 0;

    return c.text(`Feedback ${c.req.param("fid")}: ${count}`);
      };


export {showForm, createCourse, showCourse, deleteCourse, rateCourse, getRateCourse };