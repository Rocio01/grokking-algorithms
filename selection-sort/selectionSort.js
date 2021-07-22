function findSmallest(arr) {
  smallest = arr[0];
  smallestIndex = 0;

  for(let i = 0; i < arr.length ; i++){
    if(arr[i] < smallest){
      smallest = arr[i];
      smallestIndex = i;
    }

  }
  return smallestIndex;

}

function selectionSort(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i ++) {
    let smallest = findSmallest(arr);
    let arrn = (arr.splice(smallest,1)).pop() 
    newArr.push(arrn) 
  }
  return newArr;
}

let arr = [1,5, -20 ,3,4,5,9,0, -7];
console.log(selectionSort(arr))