export default function fibonacci(num){
  let fib = []
  fib[0] = 0
  fib[1] = 1
  for(let i = 2; i < num; i++){
    fib[i] = fib[i - 2] + fib[i - 1] 
  }
  return fib
}
