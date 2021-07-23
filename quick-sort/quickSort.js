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


function quickSort(arr) {
  if (arr.length < 2){
    return arr;
  }
  else {
    const pivot = arr[0];
    let less = arr.filter(n => n < pivot);
    let greater = arr.filter(n => n > pivot); 

    return quickSort(less).concat([pivot], quickSort(greater));
  }
}

const my_arr = [-1000,2,3,4,100,6,7, 30];

console.log(quickSort(my_arr));