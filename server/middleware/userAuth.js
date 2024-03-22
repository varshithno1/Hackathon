const jwt = require("jsonwebtoken");
const userDB = require("../models/accountModel");

const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log("Token:", token);

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized Access: No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded:", decoded);

    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Unauthorized Access: Invalid Token" });
    }

    const user = await userDB.findById(decoded.userId).select("-password");
    console.log("User:", user);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized Access: No User Found" });
    }

    if (user.isUser != true) {
      return res.status(401).json({ message: "Unauthorized Access: No Entry" });
    }

    req.user = user;
    console.log("req.user:", req.user);
    next();
  } catch (error) {
    console.error("Error in userAuth:", error.message);
    res.status(500).json({ message: "Internal Server Error...." });
  }
};

module.exports = userAuth;
