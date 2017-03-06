export default function factorial(num){
  let total = 1
  for (var i = 1; i <= num; i++) {
    total = total * i
  }
  return total
}
