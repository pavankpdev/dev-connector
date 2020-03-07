const express = require("express");
const router = express.Router();

// @route   GET api/posts
// @des     tests post routes
// @access  public
router.get("/", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
