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

let word = "07:05:45PM".split(":")
let m = "07:05:45PM".split("")

function timeConversion(s) {
  s.replace("PM", "");
  let splitNumbers =  s.replace("PM", "");
  let format = s.split("");
  let first = s.split(":");
  let result;
  if (format[format.length-2] === "P"  && first[0] !== "12"){
   let sum = String(parseInt(first[0])  + 12);
   splitNumbers = splitNumbers.split(":")
   splitNumbers.splice(0,1,sum);   
   result = splitNumbers.join(":")    
    }
  else if( first[0] === "12" && format[format.length-2] === "A"){
    format.splice(format.length-2);    
    format = format.join("");
   result =  format.replace(/^.{2}/g, '00');
   
  }
  else if(format[format.length-2] === "A" || format[format.length-2] === "P" ){
    format.splice(format.length-2);    
    result = format.join("");
    
  }
  console.log(result)
}
console.log(timeConversion("5:05:45AM"));
