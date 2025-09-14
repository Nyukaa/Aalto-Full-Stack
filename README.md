## Aalto full stack

# 🛠️ API Suite – Todo & Book Management

Welcome to the **API Suite**!  
This repository contains two lightweight management APIs built with [Hono](https://hono.dev/) for **Deno**:

## 💡 Technologies

- **Deno + Hono** → API framework
- **PostgreSQL** → Database
- **Flyway** → Migrations
- **Eta** → Template engine
- **Docker & Docker Compose** → Containerization

---

- 📌 **Todo Management API** – manage user-specific todos with authentication
- 📚 **Book Management API** – manage a collection of books

Both services use **PostgreSQL** for data storage, **Flyway** for migrations, and are fully containerized with **Docker**.

---

## 🚀 Features

✅ **Todo API**

- User authentication (registration, login, logout)
- User-specific todos (add, list, update, delete)
- Session management

✅ **Book API**

- Add, view, update, and delete books
- Simple CRUD operations
- Clean Eta-based HTML views

✅ **Shared Features**

- PostgreSQL integration
- Flyway-managed migrations
- Docker & Docker Compose support
- Eta templates for HTML rendering

---

## 📂 Repository Structure

```
/todo-api/ # Todo Management API
/book-api/ # Book Management API
/flyway/ # Database migration scripts
docker-compose.yml
project.env

Each API also has its own `README.md` with detailed usage and endpoints.
```

---

## ⚡ Getting Started

1. **Configure environment variables**  
   Edit `project.env` with your database credentials.

2. **Run migrations**  
   Use Flyway to set up the database schema:

```sh
flyway migrate
```

3. Start services with Docker Compose

```
docker-compose up --build
```

4. Access services locally:

```
##Todo API → http://localhost:8000

## Book API → http://localhost:8001 (example port)
```

## 🔗 Links

📌 [Todo API README](https://github.com/Nyukaa/Aalto-Full-Stack/blob/main/final/todo/readme.md)

📚 [Book API README](https://github.com/Nyukaa/Aalto-Full-Stack/blob/main/final/book/readme.md)
