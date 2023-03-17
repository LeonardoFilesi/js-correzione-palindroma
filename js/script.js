/* 
const userWord = prompt("Dimmi una parole e ti dico se è palindroma");

const isUserWordPalindrome = isPalindrome(userWord);

@param {String} wordToCheck;
@return {Boolean} 

function isPalindrome(wordToCheck) {

    const revertWordToCheck = revertString(wordToCheck);
    if (wordToCheck === revertWordToCheck) {
        return(true);
    } else {
        return(false);
    }
    
}

@param{string} stringToRevert;
@return{string} la parola al contrario;

function revertString (stringToRevert) {
    let invertedString = "";
    for (let i )
} 
*/

// Pari o Dispari (correzione incompleta)

/* 
const userChoice = prompt("Dimmi pari o dispari");
const userNumber = prompt("Dimmi un numero da 1 a 5");
const computerNumber = getRndInteger(1, 5);

const numbersSum = userNumber + computerNumber;
const result = oddOrEven(numbersSum);

@param {number} = numberToCheck;
@return {string} = 

function getRndInteger(min, max) {
    return Math.floor(Math.random() max - min + 1) + min;
} 
*/

// .3 Create Element

const list = document.querySelector("ul");

for (let i = 0; i < 4; i++) {
   /*  const newLi = document.createElement("li");
    newLi.innerText = "item#" + i; */
    newLi.addEventListener("click", handleclick);
    list.append(newLi)
}

function createListItem(innerText) {
    const newLi = document.createElement("li");
    newLi.innerText = innerText;
    newLi classList.add = 
}