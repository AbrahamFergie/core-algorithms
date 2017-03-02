let visited = []
const moveAround = function(point, paths){
  visited.push(point)
  for(var i = 0; i <= paths.length; i++){
    if(!visited.includes(paths[i])){
      return paths[i]
    }
  }
  return false
}

export default function isConnectedGraph(graph){
  let i = 0
  let next = true
  let result = []
  let points = Object.keys(graph).map(function(key){
    return key
  })
  let paths = Object.keys(graph).map(function(key){
    return graph[key]
  })
  while(next !== undefined){
    visited.push(points[i])
    next = moveAround(points[i], paths[i])
    if(next === false){
      return false
    }
    i++
  }
  points.forEach(point => {
    if(!visited.includes(point)){
      result.push(false)
    }else{
      result.push(true)
    }
  })
  if(result.includes(false)){
    result = []
    visited = []
    return false
  }else{
    result = []
    visited = []
    return true
  }
}
