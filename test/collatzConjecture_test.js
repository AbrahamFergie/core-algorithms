import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  it('take a number a perform an evaluation based on what the current number is then returns an array', function(){
    expect(collatzConjecture(7)).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
    expect(collatzConjecture(12)).to.eql([ 7,22,11,34,17,52,26,13,40,20,10,
    5,16,8,4,2,1,12,6,3,10,5,16,8,4,2,1])
  })
})
