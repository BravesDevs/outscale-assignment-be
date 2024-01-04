export enum bookRoutes {
  PUBLISH_BOOK = "/books/publish",
  SEARCH_BOOKS = "/books/search",
  UNPUBLISH_BOOK = "/books/unpublish/:bookId",
  USER_BOOKS = "/books/user",
  PUBLISHED_BOOKS = "/books/published",
}

export enum userRoutes {
  REGISTER_USER = "/auth/signup",
  LOGIN_USER = "/auth/login",
}
