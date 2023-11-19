let ticTacToe = ""; 
let nextLetter = 'x';
for(let i = 1; i<10; i++){
  ticTacToe += nextLetter + ' ';
  nextLetter = nextLetter == 'x' ? 'o' : 'x';
  if(i%3===0){
    ticTacToe = ticTacToe+'\n';
  }
}
console.log(ticTacToe)