const express = require("express");
const router = express.Router();
const checkAdmin = require("../middlewares/checkAdmin");
const { admin } = require("../controllers/admin");

router.get ('/admin' , checkAdmin , admin);
module.exports = router
