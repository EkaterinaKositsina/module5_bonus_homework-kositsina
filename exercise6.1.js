let word = 'Сантимент';
let wordInverted = '';
for(let i = 0; i<=word.length-1; i++){
  wordInverted = wordInverted + word[word.length-1-i];
  } 
if(word.toLowerCase() === wordInverted.toLowerCase()){
  console.log(`Слово \'${word}\' является палиндромом`);
} else {
  console.log(`Слово \'${word}\' не является палиндромом`);
}