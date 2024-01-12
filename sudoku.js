const { EOL } = require("os");
const fs = require("fs")
function read() {
  return fs.readFileSync("./puzzles.txt", "utf-8");
}

function solve(str) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  const arrMassivStrokIgrovihPoley = str.trim().split(EOL); // строка с символами
  const arrGameBoards = arrMassivStrokIgrovihPoley.map((el) => el.split(""));
  return arrGameBoards;
}
console.log(solve(read()));

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}
//sadnkajsdnjasnj
function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
// start
