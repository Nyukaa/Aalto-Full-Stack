# 📌 Todo Management API

Welcome to the **Todo API**!  
This project is a simple yet powerful **Todo management system** built with [Hono](https://hono.dev/) for Deno.  
It includes **user authentication**, **PostgreSQL storage**, and a modular architecture with controllers, services, and middleware.

---

## 💡 Technologies

- **Deno + Hono** → API framework
- **PostgreSQL** → Database
- **Flyway** → Migrations
- **Eta** → Template engine
- **Docker & Docker Compose** → Deployment

---

## 🚀 Features

✅ **User Authentication**

- Register, log in, and log out
- Session-based user management

✅ **Todo Management**

- Add new todos
- List user-specific todos
- Update and delete todos

✅ **Database Integration**

- PostgreSQL for persistent storage
- Schema migrations with **Flyway**

✅ **HTML Views**

- Rendered with Eta templates

✅ **Docker Support**

- Ready-to-use setup with Docker and Docker Compose

---

## 📂 Project Structure

- `api/`
  - `app.js`: Main entry point for the API server
  - `app-run.js`: Script to run the API server
  - `authController.js`: Handles authentication (login, registration, logout)
  - `todoController.js`: Handles HTTP requests and responses for todo operations
  - `todoService.js`: Business logic and database queries for todos
  - `userService.js`: Business logic and database queries for users
  - `mainController.js`: Handles main page rendering
  - `middlewares.js`: Middleware functions (e.g., authentication, user context)
  - `sessionService.js`: Session management
  - `database.js`: Database connection setup
  - `deps.js`: External dependencies
  - `templates/`: Eta templates for rendering HTML views
  - `Dockerfile`: Docker configuration for the API
  - `Архив.zip`: Archive of previous versions or backups
- `flyway/`
  - `sql/`: Database migration scripts for setting up and updating the schema
- `docker-compose.yml`: Docker Compose configuration for running the API and database
- `project.env`: Environment variables for database and service configuration

## Endpoints

- `GET /todos` — List all todos for the authenticated user and show the add todo form
- `GET /todos/:id` — Show details for a specific todo
- `POST /todos` — Add a new todo
- `POST /todos/:id` — Update an existing todo
- `POST /todos/:id/delete` — Delete a todo
- `GET /auth/login` — Show login form
- `POST /auth/login` — Log in a user
- `GET /auth/registration` — Show registration form
- `POST /auth/registration` — Register a new user
- `POST /auth/logout` — Log out the current user
- `GET /` — Main page

## Database

- Uses PostgreSQL for data storage
- Database migrations managed with Flyway (`flyway/sql/`)
- Main tables: `todos`, `users`, `addresses`, `books`, `ratings`
- Todos are user-specific (see `V5__user_specific_todos.sql`)

## Running the API

1. Copy or edit `project.env` with your database credentials.
2. Run database migrations with Flyway.

```sh
 flyway migrate
```

3. Run with Docker Compose:

```
   docker-compose up --build
```

4. Or run locally with Deno:

```
   deno run --allow-net --allow-env api/app-run.js
```
