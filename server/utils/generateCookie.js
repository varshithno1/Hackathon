const jwt = require("jsonwebtoken");

const generateTokenCookie = (user, res) => {
  const token = jwt.sign(
    { userId: user._id, isUser: user.isUser },
    process.env.JWT_SECRET,
    {
      expiresIn: "10d",
    }
  );

  console.log(token);

  // Set the token as a cookie in the response
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // milliseconds
    httpOnly: true, // prevent XSS attacks
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production" ? true : false,
  });

  res.token = token;

  console.log(res);
  console.log(res.cookie);
  console.log(res.cookies);

  // Return the response object
  return token;
};

module.exports = {
  generateTokenCookie,
};
