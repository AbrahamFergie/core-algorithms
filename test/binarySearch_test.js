import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe.only('binarySearch()', function(){

  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })
  it("Search for a number within an array using the binary search algorithm.", function(){
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect(binarySearch(numbers, 45)).to.eql(8)
    expect(binarySearch(numbers, 25)).to.eql(4)
    expect(binarySearch(numbers, 45)).to.eql(8)
    expect(binarySearch(numbers, 100)).to.eql(- 1)
  })

})
