const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRouters = require("./routes/admin");
const shopRouters = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// 讓伺服器提供 "public" 目錄下的靜態檔案，例如 CSS、JavaScript 和圖片。
// 這使得 "public" 目錄中的檔案可以直接透過 HTTP 請求存取。
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouters);

app.use(shopRouters);

// 404錯誤頁面
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(2000);
