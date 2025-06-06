import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as bookService from "./bookService.js";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


const validator = z.object({
  title: z.string().min(3, { message: "The book name should be a string of at least 3 characters." }),
  ISBN: z.string().length(13,{ message: "The ISBN should be a string of 13 characters.", }),
  pages: z.coerce.number({message: "The number of pages should be a number between 1 and 1000.",
  })
    .min(1, { message: "The number of pages should be a number between 1 and 1000." })
    .max(1000, { message: "The number of pages should be a number between 1 and 1000." }),
});

const showForm = async (c) => {
    return c.html(
      eta.render("books.eta", { books: await bookService.listBooks() }),
    );
  };

const createBook = async (c) => {
    const body = await c.req.parseBody();
    const validationResult = validator.safeParse(body);
  if (!validationResult.success) {
    return c.html(
      eta.render("books.eta", {
        ...body,
        books: await bookService.listBooks(),
        errors: validationResult.error.format(),
      }),
    );
  }
    await bookService.createBook(body);
    return c.redirect("/books");
  };

const showBook = async (c) => {
    const id = c.req.param("id");
    return c.html(
    eta.render("book.eta", { book: await bookService.getBook(id) }),
    );
  }; 

   
  const updateBook = async (c) => {
    const id = c.req.param("id");
    const body = await c.req.parseBody();
    await bookService.updateBook(id, body);
    return c.redirect(`/books/${id}`);
  };

  const deleteBook = async (c) => {
    const id = c.req.param("id");
    await bookService.deleteBook(id);
    return c.redirect("/books");
};
export {showForm, createBook, showBook, updateBook, deleteBook };