const express = require("express");
const router = express.Router();

// @route   GET api/users
// @des     tests users routes
// @access  public
router.get("/", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
