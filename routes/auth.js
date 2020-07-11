const express = require("express");
const router = express.Router();

// Import Controllers
const { register } = require("../controllers/auth.js");

router.post("/register", register);

module.exports = router;
