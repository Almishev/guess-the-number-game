
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function (){

  let guess = document.getElementById("guessField").value
  guesses+=1;
  
  if(guess == answer){
    document.getElementById("answer").innerHTML= (`${answer} is the Number. It took you ${guesses} guesses`);
  }
  else if(guess < answer){
    document.getElementById("answer").innerHTML="TOO SMALL";
  }
  else{
    document.getElementById("answer").innerHTML="TOO BIG";
  }
}