const express = require("express");
const router = express.Router();

const { home } = require("../controllers/other");
const userLogs = require("../middlewares/userLogs");

router.get("/",  userLogs, home)
router.get("/home",(req,res) => res.redirect("/"))

module.exports = router