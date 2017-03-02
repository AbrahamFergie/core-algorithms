import { expect } from 'chai'
import isConnectedGraph from '../src/connectedGraph'

describe.only('isConnectedGraph()', function(){

  it('should be a function', function(){
    expect(isConnectedGraph).to.be.a('function')
  })

  it('Check if a graph is connected or disconnected. Return true or false.', function(){
    const graphA = {
      'a': ['b', 'c'],
      'b': ['a', 'd'],
      'c': ['a', 'd'],
      'd': ['b', 'c'],
    }
    const graphB = {
      'a': ['b'],
      'b': ['a'],
      'c': ['d'],
      'd': ['c'],
    }
    expect(isConnectedGraph(graphA)).to.be.true
    expect(isConnectedGraph(graphB)).to.be.false
  })
})
