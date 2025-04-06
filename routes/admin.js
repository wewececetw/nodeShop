const express = require("express");

const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In the Middleware!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  //   next(); // 呼叫下一個middleware，讓請求繼續往下傳遞
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
