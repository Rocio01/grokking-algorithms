function firstReverse(str){
  strLength = str.length -1
  second = str;
  for (let i = strLength; i >= 0; i --){    
    str += str[i]     
  } 
   str = str.replace(second, "");
  return str
}

myStr = "hello World";


function FirstFactorial(num) { 
  let val = 1;
  for (let i = num; i >= 1; i --) {
   val *= i;
  }
 
  return val; 

}

function LongestWord(sen) { 

  senArr = sen.replace(/[^a-zA-Z0-9 ]/g, "").split(' ')
  biggest = senArr[0];
  bigindex = 0;

  for (let i = 0; i < senArr.length; i ++) {
    if (senArr[i].length > biggest.length ) {
      biggest = senArr[i];

    }
    
  }
 
  return biggest;

}

// console.log(LongestWord("Wilmer Alexis!!! Martinez"))

function miniMaxSum(arr) {
  arr.sort()
  let sum = arr.reduce((total, amount) => total + amount);
  let maxSum = sum - arr[0];
  let miniSum = sum - arr[arr.length - 1];
  console.log(miniSum, maxSum)

}

let arr = [3, 2, 1, 5, 7, 6, 8, 8, 8];

//  console.log(miniMaxSum(arr))
function birthdayCakeCandles(candles) {
  // Write your code here
 let maxElement = Math.max(...candles);
 result = 0
 for (let i = 0; i <=  candles.length; i ++){
   if (maxElement == candles[i]){
     result += 1    
   }  
 }
 return result
}

// console.log(birthdayCakeCandles(arr))

function timeConversion(s) {
  s.replace("PM", "");
  let splitNumbers =  s.replace("PM", "");
  let format = s.split("");
  let first = s.split(":");
  let result;
  let x = format[format.length-2];
  if (x === "P"  && first[0] !== "12"){
   let sum = String(parseInt(first[0])  + 12);
   splitNumbers = splitNumbers.split(":");
   splitNumbers.splice(0,1,sum);   
   result = splitNumbers.join(":");    
  }
  else if( first[0] === "12" && x === "A"){
    format.splice(format.length-2);    
    format = format.join("");
    result =  format.replace(/^.{2}/g, '00');   
  }
  else if(x === "A" || x === "P" ){
    format.splice(format.length-2);    
    result = format.join("");    
  }
  return result;
}
// console.log(timeConversion("5:05:45PM"));

let twoSum = function(nums, target) {

  let result = [];
  for(let i = 0; i < nums.length; i ++){
    for(let w = i + 1; w < nums.length; w ++){
      if(nums[i] + nums[w] === target){
        result.push(i);
        result.push(w);
      }
    }
   
  }
  return result;
};

 console.log(twoSum([2,7,11,15], 26));
var reverse = function(x) {
  let s  =  parseInt(x.toString().split("").reverse().join(""));
  if (s < (Math.pow(2, 31) * -1) || s > Math.pow(2, 31) - 1) {
    return 0; }
  return s * Math.sign(x);
  
 }
//  console.log((reverse(0)));

var isPalindrome = function(x) {
  let s = parseInt(x.toString().split("").reverse().join("")); 
  if (s === x || x === 0){
    return true
  }
  else if (s !== x || x < 0) {
    return !x
  }

};

// console.log(isPalindrome(0))

const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

function countWords(text){
  let uniques = {};
  let words = text.match(/[\w']+/g);

  for(let i = 0; i < words.length; i ++){
    let word = words[i];
    if(uniques[word]){
       uniques[word] += 1;
    } else {
      uniques[word] = 1;
    }
    
  }
 return uniques
}

function countWords1(text){
  let uniques = new Map();
  let words = text.match(/[\w']+/g);
  for(let i = 0; i < words.length; i ++){
    let word = words[i];
    let currentValue = uniques.get(word); 
    if(uniques.get(word)){
      uniques.set(word, currentValue + 1);
    } else {
      uniques.set(word,  1)
    }    
  }
  return uniques
}

// console.log(countWords1(sonnet));

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

 var longestCommonPrefix = function(strs) {
   let prefix = "";
   let first = strs[0];
   for(let i = 0; i < first.length; i ++){
     let char = first[i];
     for( let j = 1; j < strs.length; j ++){ 
      if (strs[j][i] !== char){
        return prefix
      }
      
     }
     prefix += char
    
 }
 return prefix
}


let strs = [""]
// console.log(longestCommonPrefix(strs));