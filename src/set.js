export default class Set{
  constructor(){
    this.sequence = []
  }

  union(arr1, arr2){
    this.sequence = []
    for (let i = 0; i < arr1.length; i++) {
      if(!this.sequence.includes(arr1[i])){
        this.sequence.push(arr1[i])
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      if(!this.sequence.includes(arr2[i])){
        this.sequence.push(arr2[i])
      }
    }
    return this.sequence
  }

  intersect(arr1, arr2){
    this.sequence = []
    for (let i = 0; i < arr1.length; i++) {
      for (let k = 0; k < arr2.length; k++) {
        if(arr1[i] === arr2[k]){
          this.sequence.push(arr1[i])
        }
      }
    }
    return this.sequence
  }

  complement(arr1, arr2){
    this.sequence = []
    for (let i = 0; i < arr1.length; i++) {
      if(!arr1.includes(arr2[i])){
        this.sequence.push(arr2[i])
      }
    }
    return this.sequence
  }

  difference(arr1, arr2){
    this.sequence = []
    arr1.map(ele => {
      if(!arr2.includes(ele)) this.sequence.push(ele)
    })
    for (let i = 0; i < arr2.length; i++) {
      if(!arr1.includes(arr2[i])){
        this.sequence.push(arr2[i])
      }
    }
    return this.sequence
  }
}
