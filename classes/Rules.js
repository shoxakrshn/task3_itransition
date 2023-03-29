import { winResult } from "../src/winResult.js";

export class Rule {
  static compose(rest) {
    const len = rest.length;
    let d_table = {};

    for (let i = 0; i < len; i +=1) {
      d_table[rest[i]] = [];
      let win = winResult(i, rest);

    for (let j = 0; j < len; j += 1) {
      if (i === j) {
        d_table[rest[i]][rest[j]] = 'draw';
      } else if (win.includes(rest[j])) {
        d_table[rest[i]][rest[j]] = 'win';
      } else {
        d_table[rest[i]][rest[j]] = 'lose';
      }
    }
  }

  return d_table;
  }
}
