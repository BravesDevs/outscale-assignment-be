const jwt = require("jsonwebtoken");

export const authorizeJwtToken = (req, res, next) => {
  let token = req.headers["authorization"];

  // Return Forbidden error response if token is not provided
  if (!token) {
    return res.status(403).send("Forbidden");
  }

  token = token.replace("Bearer ", "");
  let tokenData = verifyJwtToken(token);

  if (!tokenData) {
    // Return unauthorized error response if token is not valid
    return res.status(401).send("Unauthorized");
  }
  req.user = tokenData;
  return next();
};

const verifyJwtToken = (token) => {
  try {
    token = token.replace("Bearer ", "");
    let tokenData = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Remove extra JWT token keys
    delete tokenData.iat;
    delete tokenData.exp;

    // Return user object data
    return tokenData;
  } catch (error) {
    return null;
  }
};
