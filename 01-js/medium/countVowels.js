/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str=str.toLowerCase();
    let vowels=['a', 'e', 'i', 'o', 'u'];
    let cnt=0;
    for(let i=0; i<str.length; i++){
      if(vowels.includes(str[i])){
        cnt++;
      }
    }
    // console.log( cnt);
    return cnt;
}

// countVowels("soham");
module.exports = countVowels;