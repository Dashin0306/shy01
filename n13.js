const express = require("express");
const path = require("path"); // 경로모뷸
const logger = require("morgan");

const app = express();
const port = 3000;
const _path = path.join(__dirname, "/dist");
console.log(__dirname);
console.log(__dirname + "/dist");
console.log(_path);

app.get("/", (req, res) => {
  res.send("홈페이지입니다.");
});

app.get("/story", (req, res) => {
  const arr = [
    "my life is pretty",
    "egg is Life",
    "Cute & I do not have cat",
    "Avengers are Dead",
    "kkkkkkkkkkk",
  ];

  const title = ["Pretty", "Egg", "Dog", "Avengers"];
  let list = "<h1>링크를 선택하세요</h1><h2></h2>";
  title.forEach(
    (v, i) => (list += `<li><a href="/story?id=${i}">${v}</a></li>`)
  );
  list += `</ul></h2> ${arr[req.query.id] ?? "선택하세요"}`;
  res.send(list);
});

app.listen(port, () => {
  console.log(port + "서버가 동작하였습니다.");
});
