"use stricet";
// 라우터 역할을 하는 소스파일
const express = require("express");
const router = express.Router(); // 라우터 불러오기. 기존에 작성된 app이랑 교체만 하면됨
const ctrl = require("./home.ctrl"); // 컨트롤러 불러오기
module.exports = router; // 라우터 사용할 수 있도록 내보내기

router.get("/", ctrl.home);

router.get("/login", ctrl.login);
