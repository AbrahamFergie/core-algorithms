import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('take an array of numbers and replace multiples of 3 with \'Fizz\' and multiples of 5 are replaced with \'Buzz\'', function(){
    let arr = []
    for(let i = 1; i < 101; i++){
      arr.push(i)
    }
    expect(fizzBuzz(arr)[14]).to.eql('FizzBuzz')
    expect(fizzBuzz(arr)[29]).to.eql('FizzBuzz')
    expect(fizzBuzz(arr)[32]).to.eql('Fizz')
  })
})
