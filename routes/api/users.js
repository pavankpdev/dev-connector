const express = require("express");
const _ = require("lodash");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { UserModel } = require("../../models/User.model");
const router = express.Router();

// @route   GET api/users
// @des     tests users routes
// @access  public
router.get("/", (req, res) => res.json({ msg: "Users Works" }));

// @route   POST api/users/resgister
// @des     tests users routes
// @access  public
router.post("/register", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ email: "already exists" });

    const avatar = gravatar.url(req.body.email, {
      s: "200", //Size
      r: "pg", //rating
      d: "mm" // placeholder
    });

    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      avatar,
      password: req.body.password
    });


    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    const saveUser = await newUser.save();

    res.send(saveUser);
  } catch (error) {
    res.status(501).send(error.message);
  }
});

module.exports = router;
