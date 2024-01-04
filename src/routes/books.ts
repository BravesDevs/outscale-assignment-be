const express = require("express");
import { bookRoutes } from "../common/constants";
export const router = express.Router();
import { publishBookController } from "../api";

router.route(bookRoutes.PUBLISH_BOOK).post(publishBookController);
