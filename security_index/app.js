"use strict";

const express = require('express');
const app = express();

// 라우팅
const admin = require("./routes/admin");
const home = require("./routes/home");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.use("/admin", admin);
app.use("/", home);


app.listen(3000, () => {
  console.log("서버 가동");
});