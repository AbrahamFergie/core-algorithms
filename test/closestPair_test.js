import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe('closestPair()', function(){

  it('should be a function', function(){
    expect(closestPair).to.be.a('function')
  })
  it('Given a set of points on a 2-dimensional plane, return the pair of points with the least distance between them.', function(){
    const points = [[2,1], [4,0], [-1,0], [5,3], [-2,5], [3,-3],
    [-2,0], [3,4], [5,-4], [0,-2]]
    expect(closestPair(points)).to.eql({
      pair: [[-1, 0], [-2, 0]],
      distance: 1
    })
    const pointies = [[2,1], [4,0], [5,3], [-2,5], [3,-3],
    [3,4], [5,-4], [0,-2]]
    expect(closestPair(pointies)).to.eql({
      pair: [[2, 1], [4, 0]],
      distance: 5
    })
  })
})
