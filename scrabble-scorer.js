// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let userWord='';
let userPick = 0;
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
 userWord = input.question(`              Let's play Scrabble! Enter a word: `);
 return userWord
};



const simpleScore = (word) => {
  word = word.toUpperCase();
  return word.length
}


const vowelBonusScore = (word) => {
  word = word.toUpperCase();
  let score = 0;
  let vowels = /[aeiou]/gi;
  for(let i = 0;i < word.length; i++) {
    word[i].match(vowels) ? score += 3 : score ++
  }
  return score 
}

let scrabbleScore = (word) => {
  let score = 0;
  	for (let i = 0; i < word.length; i++) {
      Object.keys(newPointStructure).includes(word[i]) ? score+= newPointStructure[word[i]] : null 
	}
  return score;

}

const scoringAlgorithms = [
   one = {
    name: 'Simple Score',
    description: 'Each letter is worth one point.',
    scoringFunction: simpleScore 
  },
  two = {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
  },
   three = {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore
  } 
]
function scorerPrompt() {
  console.log(`                  Which scoring system would you like?      `)
  for(let i = 0; i < scoringAlgorithms.length; i++){
    console.log(`
    ${i}. ${scoringAlgorithms[i].name} - ${scoringAlgorithms[i].description}`)
  }
  userPick = input.question('                                                                                              ...pick a number 0-2: '       );
  return userPick
}

// function transform(array) {
//   let newArr = '';
//   for (const pointValue in array){
//     newArr += array[pointValue]
//     }
//   return newArr
// };

const transform =  (array) =>  {

   let newArr = {};
  
  for (const key in array){
    for(let i = 0; i < array[key].length;i++){
      newArr[(array[key][i]).toLowerCase()] = Number(key)
    }
  }
  return newArr

}

let newPointStructure = transform(oldPointStructure);
console.log(newPointStructure)
function runProgram() {
  initialPrompt();
  scorerPrompt();
  console.log(`Your score for ${userWord} is:
   ${scoringAlgorithms[userPick].scoringFunction(userWord)}`)
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};



