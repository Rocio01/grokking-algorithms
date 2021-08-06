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

let arr = [3, 2, 1, 5, 7, 6];

 console.log(miniMaxSum(arr))