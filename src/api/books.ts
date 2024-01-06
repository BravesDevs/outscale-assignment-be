import { publishBookService } from "../services";
export const publishBookController = async (req, res, next) => {
  try {
    const response = await publishBookService(req.body);
    res.status(200).json({ success: true, data: response });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
