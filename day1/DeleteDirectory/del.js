import pokemon from "pokemon";
import fs from "node";

pokemons.forEach((name) => {
  fs.rmSync(name, { recursive: true, force: true });
});

console.log("폴더 삭제 완료!");
