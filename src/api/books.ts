import { publishBookService } from "../services";
export const publishBookController = async (req, res, next) => {
  try {
    const response = await publishBookService(req.body);
  } catch (err) {
    next(err);
  }
};
