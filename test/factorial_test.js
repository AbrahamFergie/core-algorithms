import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('takes a number then returns the factorial of that number',function(){
    expect(factorial(5)).to.eql(120)
    expect(factorial(10)).to.eql(3628800)
    expect(factorial(20)).to.eql(2432902008176640000)
  })

})
