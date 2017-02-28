let finalArray = []
let isSmallest = function(a, b){
  let smaller = 0
  return a > b ? smaller = b : smaller = a
}

export default function mergeSort(arr, num){
  if(arr.length === 0){
    return finalArray
  }
  let index
  let leftArray = []
  let rightArray = []
  let bigArray = []
  let smallest = num || 10000

  arr = arr.map(ele => [ele])

  for (let i = 0; i < arr.length; i = i + 2) {
    // console.log('arr', arr[i],'arr1', arr[i + 1],'num',smallest);
    if(arr[i + 1] === undefined || arr[i][0] < arr[i + 1][0]){
      smallest = isSmallest(smallest, arr[i][0])
      leftArray.push(arr[i].concat(arr[i + 1]))
    }else if(arr[i][0] > arr[i + 1][0]){
      smallest = isSmallest(smallest, arr[i + 1][0])
      rightArray.push(arr[i + 1].concat(arr[i]))
    }
    // bigArray.push(tempArray)
  }
  // finalArray.push(smallest)
  bigArray.push(leftArray.concat(rightArray))
  bigArray = bigArray.concat.apply([], bigArray)
  leftArray = []
  rightArray = []

  for (let i = 0; i < bigArray.length; i = i + 2) {
    if(bigArray[i + 1] === undefined){
      console.log('here', bigArray[i + 1]);
      leftArray.push(bigArray[i][0])
      rightArray.push(bigArray[i][1])
    }
    console.log(bigArray[i][0], bigArray[i + 1][0]);
    if(bigArray[i][0] > bigArray[i + 1][0]){
      leftArray.push(bigArray[i + 1][0])
      rightArray.push(bigArray[i + 1][1])
      if(bigArray[i][0] > bigArray[i + 1][1]){
        leftArray.push(bigArray[i + 1][1])
        rightArray.push(bigArray[i + 1][0])
      }
    }else{
      leftArray.push(bigArray[i][0])
      rightArray.push(bigArray[i][1])
    }
  }
  // bigArray = bigArray.concat.apply([], bigArray)
  // index = bigArray.indexOf(smallest)
  // finalArray.push(bigArray.splice(index,1))
  console.log('left',leftArray,'right', rightArray, smallest, 'bigArray',bigArray, 'smallest', smallest, finalArray);

  // return mergeSort(bigArray, smallest)
}
