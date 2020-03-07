const express = require("express");
const router = express.Router();

// @route   GET api/profile
// @des     tests profile routes
// @access  public
router.get("/", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
