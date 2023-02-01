let passGenerator = document.querySelector("#generate");

passGenerator.addEventListener("click", writePassword);

function writePassword() {

let passLengthRequest= alert ("You are about to change your password\n Please read the instructions carefully");
 
    passLengthRequest= prompt ("Please provide the length of the password you would like to have");
 
while (passLengthRequest < 8 || passLengthRequest > 128 || passLengthRequest == "null"){
 
    passLengthRequest = alert("New password should be above 8 charactors and below 128 charators long");
 
    passLengthRequest= prompt ("Please provide the length of the password you would like to have");
 
  }
 
 let needCapitalLetters = confirm ("Would you like to have capital letters in your new password?")
 
 let needSmallLetters = confirm ("Would you like to have small letters in your new password?")
 
 let needSpecialCharactors = confirm ("Would you like to have special charactors in your new password?")
 
 let needNUmbers = confirm ("Would you like to have numbers in your new password?")
 
  
 
 while (!needCapitalLetters && !needSmallLetters && !needSpecialCharactors && !needNUmbers ){
 
 passLengthRequest = alert ("you must choose one critiera from the requirement to continue")
 
 passLengthRequest= prompt ("Please provide the length of the password you would like to have");
 
 needCapitalLetters = confirm ("Would you like to have capital letters in your new password?")
 
 needSmallLetters = confirm ("Would you like to have small letters in your new password?")

 needSpecialCharactors = confirm ("Would you like to have special charactors in your new password?")
 
 needNUmbers = confirm ("Would you like to have numbers in your new password?")
 }
 
 let password = generatePassword(passLengthRequest,needCapitalLetters,needSmallLetters,needSpecialCharactors,needNUmbers);
 
 let passHolder = document.querySelector("#password");
 
 passHolder.value = password;
 
 }
 
  
 
 function generatePassword(length, needCapitalLetters, needSmallLetters, needSpecialCharactors, needNUmbers){
 
  let password = "";
 
  let setOfCharactors = "";
 
 if (needCapitalLetters){
 
   setOfCharactors += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
 }
 
 if (needSmallLetters){
 
   setOfCharactors += "abcdefghijklmnopqrstuvwxyz";
 
 }
 
  
 
 if (needSpecialCharactors){
 
   setOfCharactors += "!@#$%^&*"
 
 }
 
 if (needNUmbers){
 
   setOfCharactors += "0123456789";
 
 }
 
 for (let i = 0; i < length; i++) {
 
   password += setOfCharactors.charAt(Math.floor(Math.random() * setOfCharactors.length));
 
 }
 
 return password;
 
  
 
 }