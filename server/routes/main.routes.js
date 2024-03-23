// Main Router - /api/v1

const express = require("express");
const router = express.Router();

const userRouter = require("../controller/user.controller.js");
const userDB = require("../models/accountModel");

const { generateTokenCookie } = require("../utils/generateCookie.js");
const { signUpMiddleware } = require("../middleware/signupMiddleware.js");
const { signInMiddleware } = require("../middleware/signinMiddleware.js");
const userAuth = require("../middleware/userAuth.js");
const adminAuth = require("../middleware/adminAuth.js");

router.post("/signup", signUpMiddleware, async (req, res) => {
  try {
    const { username, email, password, isUser } = req.body;

    const profilePic = `https://api.dicebear.com/8.x/lorelei/svg?seed=${req.body.username}`;
    const newUser = await userDB.create({
      username: username,
      email: email,
      password: password,
      profilePic: profilePic,
      isUser,
    });

    if (newUser) {
      const token = generateTokenCookie(newUser._id, res);
      await newUser.save();

      res.json({
        msg: "Signed Up Successfully",
        jwt: token,
        isUser: isUser,
      });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error at SIGNUP: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/signin", signInMiddleware, async (req, res) => {
  try {
    const user = await userDB.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(411).json({
        message: "User not found",
      });
    }

    if (user.password !== req.body.password) {
      return res.status(411).json({
        message: "Wrong password",
      });
    }

    const jwt = generateTokenCookie(user, res);

    return res.json({
      msg: "Signed in Successfully",
      jwt: jwt,
      isUser: user.isUser,
    });
  } catch (error) {
    console.log("Error at Signing: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/signout", (req, res) => {
  try {
    res.cookie("jwt", { maxAge: 0 });
    res.status(200).json({ msg: "Logged out successfully" });
  } catch (error) {
    console.log("Error at LOGOUT: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.use("/user", userRouter);
// router.use("/user", userAuth, userRouter);
// router.use("/admin", adminAuth, adminRouter);

module.exports = router;
