import pokemon from "pokemon";
import fs from "node:fs";
import readline from "node:readline";

const pokemons = Array.from({ length: 150 }, () => pokemon.random("ko"));

// 폴더 생성
pokemons.forEach((name) => {
  fs.mkdirSync(name, { recursive: true });
});

console.log("폴더 생성 완료!");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 삭제 여부 확인
rl.question("방금 만든 폴더들을 삭제하시겠습니까? (y/n): ", (answer) => {
  if (answer.toLowerCase() === "y") {
    pokemons.forEach((name) => {
      fs.rmSync(name, { recursive: true, force: true });
      console.log(`${name} 폴더 삭제 완료!`);
    });
  } else {
    console.log("폴더를 그대로 유지합니다.");
  }

  rl.close();
});
