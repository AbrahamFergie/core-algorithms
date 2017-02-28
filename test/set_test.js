import { expect } from 'chai'
import Set from '../src/Set'

describe.only('set()', function(){
  const mySet = new Set()
  const a = [1, 2, 3, 4]
  const b = [2, 4, 6, 8]
  it('should be a function', function(){
    expect(Set).to.be.a('function')
  })
  it('Return the union of two sets.', function(){
    expect(mySet.union(a, b)).to.eql([1, 2, 3, 4, 6, 8])
  })
  it('Return the intersection of two sets.', function(){
    expect(mySet.intersect(a, b)).to.eql([2, 4])
  })
  it('Return the complement of two sets.', function(){
    expect(mySet.complement(a, b)).to.eql([6, 8])
  })
  it('Return the symmetric difference of two sets.', function(){
    expect(mySet.difference(a, b)).to.eql([1, 3, 6, 8])
  })
})
