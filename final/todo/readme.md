# Todo API

This folder contains a simple Todo management API built with [Hono](https://hono.dev/) for Deno. It provides endpoints to create, list, update, and delete todos, with user authentication and PostgreSQL database storage.

## Structure

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
3. Start the API and database using Docker Compose:
   ```sh
   docker-compose up --build
   ```
