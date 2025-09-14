# 📚 Book Management API

Welcome to the **Book API**!  
This project is a simple **Book management system** built with [Hono](https://hono.dev/) for Deno.  
It allows you to **create, view, update, and delete books**, with data stored in a **PostgreSQL database**.

---

## 💡 Technologies

- **Deno + Hono** → API framework
- **PostgreSQL** → Database
- **Flyway** → Migrations
- **Eta** → Template engine
- **Docker & Docker Compose** → Deployment

---

## 🚀 Features

✅ **Book Management**

- Add new books
- List all books
- View details of a specific book
- Update and delete books

✅ **Database Integration**

- PostgreSQL for storage
- Database schema managed with **Flyway**

✅ **HTML Views**

- Eta templates for rendering clean HTML pages

✅ **Docker Support**

- Quick setup with Docker and Docker Compose

---

## 📂 Project Structure

```
api/
├── app.js # API server entry point
├── app-run.js # Script to run the API
├── bookController.js # Handles book requests
├── bookService.js # Business logic for books
├── database.js # DB connection setup
├── templates/ # Eta templates
└── Dockerfile # Docker config
flyway/
└── sql/ # Migration scripts
docker-compose.yml # Docker Compose setup
project.env # Environment variables
```

---

## 🔗 Endpoints

- `GET /books` → List all books + add form
- `GET /books/:id` → Show book details
- `POST /books` → Add a new book
- `POST /books/:id` → Update a book
- `POST /books/:id/delete` → Delete a book

---

## ⚡ Getting Started

1. Set up the database with Flyway migrations:

```sh
 flyway migrate
```

2. Configure `project.env `with your database details.
3. Run with Docker Compose:

```
   docker-compose up --build
```

4. Or run locally with Deno:

```
   deno run --allow-net --allow-env api/app-run.js
```
