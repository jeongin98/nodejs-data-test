// 기본 설정
const express = require("express");
const app = express();
const PORT = 3000;

// 정적 파일 불러오기
app.use(express.static(__dirname + "/public"));

/* 라우팅 정의 */
// 처음시작
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// json 파일 전송
app.get("/v1/members", (req, res) => {
    res.sendFile(__dirname + "/members.json"); // json 형태로 response원할시 res.json({data:"1"}) 같은 형식으로 쓰면 됨
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`); // 웹 서버 실행시 출력되는 문장
});



// 터미널에 node index.js 입력시 서버 이용 가능