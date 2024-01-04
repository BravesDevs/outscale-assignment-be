# Book Management System (Devang MP)

## Objective

The Book Management System is a MERN stack application that focuses on managing books with essential functionalities such as user authentication, book publishing, searching, and listing. This project aims to provide a robust backend RESTful API to support these features.

## Backend Endpoints

### User Authentication

1. **POST /api/auth/signup**

   - Register a new user.

2. **POST /api/auth/login**
   - Log in an existing user.

### Book Management

3. **POST /api/books/publish**

   - Publish a new book.

4. **GET /api/books/search?title={searchQuery}**

   - Search for books by title.

5. **PUT /api/books/unpublish/{bookId}**

   - Unpublish a book.

6. **GET /api/books/user**

   - Get a list of books published by the current user.

7. **GET /api/books/published**
   - Get a list of all published books.

## JWT Authentication

- Utilize JSON Web Tokens (JWT) for token-based user authentication.
- Include the JWT token in the Authorization header for authenticated requests.
- Implement middleware for verifying JWT tokens and extracting user information.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Set up your environment variables for database connection and JWT secret.
5. Run the server: `npm start`
