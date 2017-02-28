import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe.only('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('implement merge sort algorithm on an array of numbers', function(){
    expect(mergeSort([10, 2, 7, 5, 8, 3, 13, 6, 1, 4, 9, 12, 11])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
    expect(mergeSort([100,10000, 2, 95, 83, 0, 21, 93, 111100])).to.eql([0, 2, 21, 83, 93, 95, 100, 10000, 111100])
  })
})
