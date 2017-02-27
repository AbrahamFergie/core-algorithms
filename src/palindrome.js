export default function isPalindrome(str){
  let reversedStr = str
  reversedStr = reversedStr.replace(/[^a-zA-z]/g, '')
  reversedStr = reversedStr.toLowerCase().split('').reverse()
  str = str.replace(/[^a-zA-Z]/g, '')
  str = str.toLowerCase().split('')
  for (var i = 0; i < str.length; i++) {
    if(str[i] !== reversedStr[i]){
      return false
    }
  }
  return true
}
