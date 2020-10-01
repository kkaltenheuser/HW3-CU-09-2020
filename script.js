// Assignment Code - WK2 - HW3 - CU - 09 - 2020
/////////////////////////////////////////////////

// Initialize process of generating random password

var generateBtn = document.querySelector("#generate");
//
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

//Determine the length of the password

function determineLength() {
  passwordLength = prompt(
    "Choose the length of your password (between 8-128 characters): "
  );

  if (passwordLength < 8) {
    alert("Password length must be between 8-128 characters");
    determineLength();
  } else if (passwordLength > 128) {
    alert("Password length must be between 8-128 characters");
    determineLength();
  } else if (isNaN(passwordLength)) {
    alert("Password length must be between 8-128 characters");
    determineLength();
    // NAN = not a number
  } else {
    alert(
      "The following screens will inquire the types of characters you would like to be included in your password. If you end up choosing 'No' for all, your password will solely contain lowercase letters."
    );
  }
  return passwordLength;
}

//Determine whether the user wants to include uppercase characters in the password

function determineUppercase() {
  uppercaseCheck = prompt(
    "Include uppercase letters in your password? \n (Yes or No)"
    // \n is the JS equivalent to a linebreak in HTML
  );
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Yes or No");
    determineUppercase();
  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
    return uppercaseCheck;
  } else {
    alert("Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
}

//Determine whether the user wants to include numbers in the password

function determineNumbers() {
  numberCheck = prompt("Include numbers in your password? \n (Yes or No)");
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Yes or No");
    determineNumbers();
  } else if (numberCheck === "yes") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

//Determine whether the user wants to include special characters in the password

function determineSpecial() {
  specialCheck = prompt(
    "Include special characters in your password? \n (Yes or No)"
  );
  specialCheck = specialCheck.toLowerCase();
  if (specialCheck === null || specialCheck === "") {
    alert("Yes or No");
    determineSpecial();
  } else if (specialCheck === "yes") {
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no") {
    specialCheck = false;
    return specialCheck;
  } else {
    alert("Yes or No");
    determineSpecial();
  }
  return specialCheck;
}

//Uses input from the previous functions and auto-generates a password using a random generator

function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

  var characters = lowercaseChar;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck) {
    characters += uppercaseChar + numberChar + specialChar;
  } else if (uppercaseCheck && numberCheck) {
    characters += uppercaseChar + numberChar;
  } else if (numberCheck && specialCheck) {
    characters += numberChar + specialChar;
  } else if (uppercaseCheck && specialCheck) {
    characters += uppercaseChar + specialChar;
  } else if (uppercaseCheck) {
    characters += uppercaseChar;
  } else if (numberCheck) {
    characters += numberChar;
  } else if (specialCheck) {
    characters += specialChar;
  } else {
    characters === lowercaseChar;
  }
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // Math.floor allows for intergers versus decimals

  return password;
}

// Write password to the #password input

function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
