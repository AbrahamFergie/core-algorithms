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
