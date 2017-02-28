import { expect } from 'chai'
import isPalindrome from '../src/palindrome'

describe.only('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('Determine if a string is a palindrome. Return true or false.', function(){
    expect(isPalindrome('radar')).to.be.true
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true
    expect(isPalindrome('bananas')).to.be.false
  })

})
