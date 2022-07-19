"use strict";
// 컨트롤러의 역할을 하는 소스파일
// req데이터를 가공하고 필요한 service에 데이터를 전달하는 역할
const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

module.exports = {
  home,
  login,
};
// {key : key}
// {
//   hello: hello,
//   login: login,
// }
// 이런식으로 저장됨(키와 값이 나간다)
