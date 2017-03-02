import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('receives a number and constructs a fibonacci sequence until it reaches that number', function() {
    expect(fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    expect(fibonacci(16)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610])
  })

})
