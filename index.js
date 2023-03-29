import readlineSync from 'readline-sync';
import { KeyGeneration } from './classes/KeyGeneration.js';
import { Hmac } from './classes/Hmac.js';
import { menu } from './src/menu.js';
import { winResult } from './src/winResult.js';
import { randGenerator } from './src/randGenerator.js';
import { Table } from './classes/Table.js';
import { Rule } from './classes/Rules.js';

const [, , ...rest] = process.argv;
const length = rest.length;

if (length % 2 === 0) {
  console.log("Error: You must provide even number of moves.");
  console.log("Example: node game.js rock paper scissors");
  process.exit(1);
}

if (length < 3) {
  console.log("Error: You must provide at least three moves.");
  console.log("Example: node game.js rock paper scissors");
  process.exit(1);
}

const uniqueRest = new Set(rest);
  if (uniqueRest.size !== length) {
    console.log("Error: Moves must be non-repeating strings.");
    console.log("Example: node game.js rock paper scissors");
    process.exit(1);
  }

let userChoice;

//AI part

while (userChoice !== '0') {
  
  let cpuChoice = randGenerator(length);
  let cpuChoiceValue = rest[cpuChoice];
  
  const key = KeyGeneration.create();
  const initKey = new Hmac(key);
  let cpuHmac = initKey.computeHMAC(cpuChoiceValue)
  console.log(cpuHmac);
  
  const winElements = winResult(cpuChoice, rest);

  //User part
  menu(rest);
  userChoice = readlineSync.question('Enter your move: ');

  if (userChoice === '?') {
    const rule = Rule.compose(rest);
    Table.show(rule);
  }

  if (userChoice !== '?') {
    let userChoiceValue = rest[userChoice - 1];
    
    console.log(`Your move: ${userChoiceValue}`);
    console.log(`Computer move: ${cpuChoiceValue}\n`);
  
    if (cpuChoiceValue === userChoiceValue) {
      console.log("it's draw");
      console.log('------------------------------------------------------------------\n\n')
    } else if (winElements.includes(userChoiceValue)) {
      console.log('You Win!');
      console.log('------------------------------------------------------------------\n\n')

    } else {
      console.log('You lose!');
      console.log('------------------------------------------------------------------\n\n')
    }
  }
}
  
console.log('It was a good game :)\nSee you soon');
