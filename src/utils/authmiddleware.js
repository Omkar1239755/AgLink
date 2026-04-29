import jwt from "jsonwebtoken";


const authMiddleware = (req, res, next) => {
  try {

    //  token header se lo
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "No token provided"
      });
    }

    // 🔥 Bearer token handle
    const splitToken = token.split(" ")[1];

    // 🔥 verify token
    const decoded = jwt.verify(splitToken, process.env.JWT_SECRET);

    // 🔥 user data attach kar do request me
    req.user = decoded;

    next(); // 🔥 next controller pe bhejo

  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Invalid token"
    });
  }
};

export default authMiddleware;