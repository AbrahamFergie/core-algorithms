//receive an array
//iterate through array
//check if arr element is multiple of 3
//do things
//check if arr element multiple of 5
//do things
//check if arr element is a multiple of 3 and 5
//do things
export default function fizzBuzz(arr){
  for(let num in arr){
    if(arr[num] % 3 === 0 && arr[num] % 5 == 0){
      arr.splice(num, 1, 'FizzBuzz')
    }else if(arr[num] % 3 === 0){
      arr.splice(num, 1, 'Fizz')
    }else if(arr[num] % 5 === 0){
      arr.splice(num,1,'Buzz')
    }
  }
  return arr
}
