const path = require("path");
const parser = require("body-parser");
const express = require("express");
const app = express();

const admin = require("./routes/admin");
const shop = require("./routes/shop");
const rootDir = require("./utils/path");

app.use(parser.urlencoded({ extended: false }));

app.use("/admin", admin);
app.use(shop);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "error.html"));
});
app.listen(3000);
