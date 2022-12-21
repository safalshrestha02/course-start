const path = require("path");
const express = require("express");
const parser = require("body-parser");
const app = express();

app.set("view-engine", "pug");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404.ejs", { pageTitle: "Page Not Found" });
});

app.listen(3000);
