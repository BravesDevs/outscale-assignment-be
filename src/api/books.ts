import { publishBookService } from "../services";
export const publishBookController = async (req, res, next) => {
  try {
    return res.status(200).send(await publishBookService(req.body));
  } catch (err) {
    next(err);
  }
};
