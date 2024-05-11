const jwt = require("jwt");

const JWT_SECRET_KEY = "your_secret_key";

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized: Token not provided",
      status: 401,
    });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: "Forbidden: Invalid token",
        status: 403,
      });
    }
    req.user = decoded;
    next();
  });
};
