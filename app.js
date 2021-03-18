//Generator Functions

//Function that returns a random index (number) of a string value that is passed in as an argument
function randomIndex(str){
    return Math.floor(Math.random() * str.length)
}

//Function that returns a random letter usng a random index in the "letter" string variable
function randomLetter(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    return letters[randomIndex(letters)];
}

function getRandomUpper {
   const letter = randomLetter();
   //Changing the letter to uppercase and returning it from the function
   return letter.toUpperCase();
}
console.log(getRandomUpper());

function getRandomLower(){
    //Running the "randomLetter" function to create a random letter and returning it from the function
    return randomLetter();
}
console.log(getRandomLower());

function getRandomNumber(){
    const numbers = `1234567890`;
    //Returns a random number using a random index in the "numbers" string
    [randomIndex(numbers)];
}
console.log(getRandomNumber());

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    symbols[randomIndex(symbols)];
}
console.log(getRandomSymbol());