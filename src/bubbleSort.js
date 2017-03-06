export default function bubbleSort(arr){
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      let temp
      if(arr[i] > arr[j]){
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr.reverse()
}
