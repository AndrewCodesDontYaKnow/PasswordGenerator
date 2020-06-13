
// VARIABLES
// Arrays of lower case, upper case letters, special characters, and numbers
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_","."];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Function to prompt user for details on their password format
function passwordOption() {
  // Prompt for length, turn input into an integer
  var passwordLength = parseInt(prompt("How many characters would you like your password to be (8-128)?")); 
  // Detect NaN inputs and alert user if input is NaN, then return to the top of function if so
  if (isNaN(passwordLength) === true) {
    alert("Please enter a number.");
    return;
  }
  // If user input is less than 8, alert them and return to top of function
  if (passwordLength < 8) {
    alert("Please input a number between 8 and 128.");
    return;
  } 
  // If user input is more than 128 alert them and return to top of function
  if (passwordLength > 128) {
    alert("Please input a number between 8 and 128.");
    return;
  }
// Ask user to confirm if they want special characters
  var specialCharacters = confirm("If you want special characters, click OK, otherwise click cancel.");
// Ask user to confirm if they want numbers
  var numbers = confirm("If you want numbers, click OK, otherwise click cancel.");
// Ask user to confirm if they want upper case letters
  var upperCase = confirm("If you want upper case letters, click OK, otherwise click cancel.");
// Ask user to confirm if they want lower case letters
  var lowerCase = confirm("If you want lower case letters, click OK, otherwise click cancel.");
// If user says no to all the types of characters, all character type variables are false, and the user is 
// alerted to choose at least one type, and return to the top of function
  if (specialCharacters === false && numbers === false && upperCase === false && lowerCase === false) {
    alert("Please choose at least one type of character.");
    return;
  } 
// Create an object variable to hold password format info from the 4 confirm results
  var passwordFormat = {passwordLength: passwordLength, specialCharacters: specialCharacters, numbers: numbers, upperCase: upperCase, lowerCase: lowerCase}
// return the password format  object
  return passwordFormat;
}

// Function to take in the arrays of different types of characters, 
// make a variable randomIndex set to a random number in the range of the length of each array,
//  then create a variable randomChar set to the character at randomIndex in the array
// return the randomChar chosen from the array
function randomSelector(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomChar = arr[randomIndex];
  return randomChar;
}

// Main function to generate the password
function generatePassword() {
  // create variable set equal to the output of function passwordOption()
  var format = passwordOption();
  // create variable to hold the resulting possible characters from randomly selected characters in 
  // the user chosen arrays of characters
  var result = [];
  // create variable to hold all possible characters from the user chosen arrays, that will be concatenated into
  // this array variable possibleChars
  var possibleChars = [];
  // variable array to hold the guaranteed characters that will be randomly selected and pushed in to the array
  var guaranteedChar = [];

  // if in the output object of passwordOption, specialCharacters evaluates to true..
  if (format.specialCharacters) {
    // concatenate the characters in the array specialCharacters into possibleCharacters
    possibleChars = possibleChars.concat(specialCharacters);
    // then push a randomly selected character from specialCharacters into guaranteedChar
    guaranteedChar.push(randomSelector(specialCharacters));
  }

   //  if in the output object of passwordOption, numbers evaluates to true..
  if (format.numbers) {
    // concatenate the characters in the array numbers into possibleChars
    possibleChars = possibleChars.concat(numbers);
    // and push a random number into guaranteedChar
    guaranteedChar.push(randomSelector(numbers));
  }

  // if in the output object of passwordOption, upperCase evaluates to true..
  if (format.upperCase) {
    // concatenate the upperCase characters into possibleChars
    possibleChars = possibleChars.concat(upperCase);
    // and push a random upper case letter from the array into guaranteedChar
    guaranteedChar.push(randomSelector(upperCase));
  }

  // if in the output object of passwordOption, lowerCase evaluates to true..
  if (format.lowerCase) {
    // concatenate lowerCase into possibleChars
    possibleChars = possibleChars.concat(lowerCase);
    // and push a random lowerCase character into guaranteedChar
    guaranteedChar.push(randomSelector(lowerCase));
  }
  

  
  // Iterate through possibleChars passwordLength times..
  for (var i = 0; i < format.passwordLength; i++) {
    // for each iteration, choose a random character from possibleChars
    var possibleChar = randomSelector(possibleChars);
    // and push the single possibleChar into the result array
    result.push(possibleChar);
    // possible into result
  }

  // iterate guaranteedChar number of times 
  for (var i = 0; i < guaranteedChar.length; i++) {
    // and each time set the result index to the guaranteed index
    result[i] = guaranteedChar[i]
  }
  // return the joined result array
  return result.join("")
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




