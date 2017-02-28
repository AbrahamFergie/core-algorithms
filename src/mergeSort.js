const merger = function(left, right){
  console.log('left: ',left, 'right: ',right)

  var result = []

  while(left.length && right.length){
    result.push(left[0] < right[0] ? left.shift() : right.shift())
  }

  while(left.length){
    result.push(left.shift())
  }

  while(right.length){
    result.push(right.shift())
  }
  return result
}

export default function mergeSort(data){
  console.log('data: ',data)
  if(data.length < 2){
    return data
  }
  var centerPoint = Math.round(data.length / 2)
  return merger(
    mergeSort(data.slice(0, centerPoint)),
    mergeSort(data.slice(centerPoint))
  )
}
