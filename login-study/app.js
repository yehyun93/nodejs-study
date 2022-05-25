"use strict";

// 모듈
const express = require('express');
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use("/", home); // use -> 웨어

app.listen(PORT, () => {
  console.log('서버 가동');
});



