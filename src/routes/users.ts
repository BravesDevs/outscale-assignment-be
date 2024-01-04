const express = require("express");
export const router = express.Router();

import { registerUserController, loginUserController } from "../api";

import { userRoutes } from "../common/constants";

router.route(userRoutes.REGISTER_USER).post(registerUserController);
router.route(userRoutes.LOGIN_USER).post(loginUserController);
