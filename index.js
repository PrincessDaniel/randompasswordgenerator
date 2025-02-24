const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let upperCaseLetters = []
let lowerCaseLetters = []
let numbersAndSymbols = []




//const includeNumbersAndSymbols = true

for(let i = 0; i < characters.length; i++) {
  let char = characters[i]
  
    if (char >= "A" && char <= "Z") {
      upperCaseLetters.push(char)
    }
    else if (char >= "a" && char <= "z") {
      lowerCaseLetters.push(char)
    }
    else {
      numbersAndSymbols.push(char)
    }
}
//console.log(numbersAndSymbols)

const generatePasswordBtn = document.getElementById("generate-password")
const toggleSymbolsAndNumbers = document.getElementById("toggle-symbols")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

function passwordDisplay() {
  let includeNumbersAndSymbols = toggleSymbolsAndNumbers.checked
  passwordOne.textContent = generatePassword(includeNumbersAndSymbols)
  passwordTwo.textContent = generatePassword(includeNumbersAndSymbols)
}

function generatePassword(includeNumbersAndSymbols = true) {
  let passwordLength = document.getElementById("password-length").value
  
  /*if(passwordLength < 4 || passwordLength > 30) {
    alert("Please enter a password length between 4 and 30")
  } */
  
  let allowedCharacters = [...upperCaseLetters, ...lowerCaseLetters]
    
  if (includeNumbersAndSymbols) {
  //let allowedCharacters = [].concat(upperCaseLetters, lowerCaseLetters, numbersAndSymbols)
    allowedCharacters = allowedCharacters.concat(numbersAndSymbols)
  }
  
  let randomPhrase = ""
  
  for (i = 0; i < passwordLength; i++) {
      const randomCharacter = Math.floor(Math.random() * allowedCharacters.length)
      
      //let randomPassword = characters[randomNumber]
      //console.log(randomPassword)
      randomPhrase += allowedCharacters[randomCharacter]
  }
  return randomPhrase
}

function copyToClipboard(elementId) {
  passwordText = document.getElementById(elementId).textContent
  
  if(!passwordText) {
    alert("No password to copy")
    return
  }
  
  navigator.clipboard.writeText(passwordText)
    .then(() => {
      alert("Password copied: " + passwordText)
    })
    
    .catch(err => console.error("Failed to copy password", err))
}