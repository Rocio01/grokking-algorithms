function recursive_sum(arr){
  if (arr.length == 0){
    return 0
  } else {
   return arr[0] + recursive_sum(arr.slice(1))
  }

}

const my_arr = [1,2,3,4,5,6,7];

console.log(recursive_sum(my_arr));