const randomNumber = () => {
  const random = 1 + Math.floor(Math.random() * (100 - 1 + 1));
  return random;
};
const playerGuess = () => {
  const theGuess = parseInt(
    prompt("Please enter a integer number form 1 to 100!")
  ); // mishod inja baraye tabdil kardan be number az "unaryPlus" ham estefade kard
  if (theGuess !== null) {
    if (!isNaN(theGuess)) {
      if (theGuess < 1 || theGuess > 100) {
        console.log("You should enter a integer number form 1 to 100!");
        playerGuess();
      } else return theGuess;
    } else {
      console.log("You should enter a number form 1 to 100 not a string!");
      playerGuess();
    }
  } else playerGuess();
};
const compare = (random, theGuess) => {
  if (random === theGuess) {
    console.log("Congrats! You win!");
    return 1;
  } else {
    theGuess > random
      ? console.log("Wrong! You should search for smaller integer!")
      : console.log("Wrong! You should search for biger integer!");
  }
};

const random = randomNumber();
const turns = 10;
for (let i = 0; i < turns; i++) {
  const theGuess = playerGuess();
  const isTrue = compare(random, theGuess);
  if (isTrue) break;
  if (i >= 10) console.log("Game Osver!");
}
