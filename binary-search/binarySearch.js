function binarySearch(arr, item) {
  let min = 0;
  let max = arr.length - 1;
  let msm = "Number not founded";

  while (min <= max) {
    let medium = Math.floor(min + max)/ 2;
    let guess = arr[medium];

    if (guess === item){
      return medium;
    }

    else if (guess > item){
      max -=1;
    }
     else {
      min +=1;
    }   
  
  }

  return msm;
}

myArr = [1,7,4,3,5,8,9];

 console.log(binarySearch(myArr, 5));
 console.log(binarySearch(myArr, 25));