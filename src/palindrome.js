export default function isPalindrome(str){
  let reversedStr = str
  reversedStr = reversedStr.replace(/[^a-zA-z]/g, '')
  reversedStr = reversedStr.toLowerCase().split('').reverse().join('')
  str = str.replace(/[^a-zA-Z]/g, '')
  str = str.toLowerCase()
  return str === reversedStr
}
