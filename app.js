const express = require("express");
const bodyParser = require("body-parser");
const adminRouters = require("./routes/admin");
const shopRouters = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouters);

app.use(shopRouters);

// 404錯誤頁面
app.use((req, res, next) => {
  res.status(404).send("<h1>頁面不存在！</h1>");
});

app.listen(2000);
