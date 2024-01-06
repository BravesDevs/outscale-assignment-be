import { registerUserService, loginUserService } from "../services";

export const registerUserController = async (req, res, next) => {
  try {
    const { firstName, lastName, emailAddress, password } = req.body;
    return res.status(200).send(
      await registerUserService({
        firstName,
        lastName,
        emailAddress,
        password,
      })
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const loginUserController = async (req, res, next) => {
  try {
    const { emailAddress, password } = req.body;
    return res.status(200).send(
      await loginUserService({
        emailAddress,
        password,
      })
    );
  } catch (error) {
    next(error);
  }
};
