import {
  publishBookService,
  searchBooksService,
  unpublishBookService,
  getUserBooksService,
  getPublishedBooksService,
} from "../services";

export const publishBookController = async (req, res, next) => {
  try {
    const response = await publishBookService(req.body);
    res.status(200).json({ success: true, data: response });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const searchBooksController = async (req, res, next) => {
  try {
    const response = await searchBooksService(req.query.title);
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const unpublishBookController = async (req, res, next) => {
  try {
    const response = await unpublishBookService(req.params.bookId);
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getUserBooksController = async (req, res, next) => {
  try {
    const response = await getUserBooksService(req.user.id);
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getPublishedBooksController = async (req, res, next) => {
  try {
    const response = await getPublishedBooksService();
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
