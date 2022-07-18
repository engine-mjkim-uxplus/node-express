"use stricet";
// 모듈
const express = require("express");
const app = express();
// 라우팅
const home = require("./routes/home");
// 앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드
// </>루트 경로로 오면 홈으로 이동하게 됨. 즉 index.js파일로 이동해서 '/'경로에 따라서 해당 콜백함수가 실행

module.exports = app;
