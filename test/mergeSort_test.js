import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe.only('mergeSort()', function(){

  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('implement merge sort algorithm on an array of numbers', function(){
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
