"use stricet";
// 라우터 역할을 하는 소스파일
// 사용자로부터 날라온 요청을 구분하여 컨트롤러에 전달하는 역할을 한다.
// 즉 별다른 처리없이 요청과 그 처리를 담당하는 controller를 이어주는 역할만 한다
const express = require("express");
const router = express.Router(); // 라우터 불러오기. 기존에 작성된 app이랑 교체만 하면됨
const ctrl = require("./home.ctrl"); // 컨트롤러 불러오기
module.exports = router; // app.js에서 라우터 사용할 수 있도록 내보내기

router.get("/", ctrl.home);

router.get("/login", ctrl.login);
