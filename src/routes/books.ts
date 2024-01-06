const express = require("express");
import { bookRoutes } from "../common/constants";
export const router = express.Router();
import {
  publishBookController,
  searchBooksController,
  unpublishBookController,
} from "../api";
import { authorizeJwtToken } from "../middlewares";

router
  .route(bookRoutes.PUBLISH_BOOK)
  .post(authorizeJwtToken, publishBookController);

router.route(bookRoutes.SEARCH_BOOKS).get(searchBooksController);

router
  .route(bookRoutes.UNPUBLISH_BOOK)
  .put(authorizeJwtToken, unpublishBookController);
