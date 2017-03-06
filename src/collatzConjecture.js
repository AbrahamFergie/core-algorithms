let arr = []
export default function collatzConjecture(num){
  if(num === 1){
    arr.push(1)
    return arr
  }
  if(num % 2 === 0){
    arr.push(num)
    num = num / 2
    return collatzConjecture(num)
  }else if(num % 2 !== 0){
    arr.push(num)
    num = num * 3 + 1
    return collatzConjecture(num)
  }
}
