function recursionSum(arr){
  if (arr.length == 0){
    return 0
  } else {
   return arr[0] + recursionSum(arr.slice(1))
  }

}

function itemsListCount(arr){
  if (arr.length == 0){
    return 0
  } else {
    return 1 + itemsListCount(arr.slice(1))
  }
}

function maxNumber(arr){
  if (arr.length === 0){
    return null
  }

  else if (arr.length === 1){
    return arr[0];
  }
  else {
    max = maxNumber(arr.slice(1));
    if(arr[0] > max ){
      return arr[0]
    }else{
      return max
    }
  }
}

const my_arr = [1,2,3,4,5,6,7, 30];

console.log(recursionSum(my_arr));
console.log(itemsListCount(my_arr));

console.log(maxNumber(my_arr));