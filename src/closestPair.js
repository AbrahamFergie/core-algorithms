const pythagorize = function(a, b){
  let c = 0
  return c = a * a + b * b
}

export default function closestPair(points){

  let pairs = []
  let newArray = []
  let closestPair = {}
  let lowestweight = Infinity

  for (var i = 0; i < points.length; i++) {
    for (var j = 1; j < points.length; j++) {
       pairs.push({ pair: [points[i],points[j]], distanceX: 0, distanceY: 0 })
    }
  }
  for (var i = 0; i < pairs.length; i++) {
    let firstX = pairs[i].pair[0][0]
    let secondX = pairs[i].pair[1][0]
    let firstY = pairs[i].pair[0][1]
    let secondY = pairs[i].pair[1][1]
    let distanceX = pairs[i].distanceX
    let distanceY = pairs[i].distanceY

    if(firstX !== secondX || firstY !== secondY){

      let result = 100
      distanceX = Math.abs(firstX - secondX)
      distanceY = Math.abs(firstY - secondY)

      let hypotenuse = pythagorize(distanceX, distanceY)

      if(hypotenuse < lowestweight) {
        lowestweight = hypotenuse
        closestPair = {
          pair: [[firstX, firstY], [secondX, secondY]],
          distance: lowestweight
        }
      }
    }
  }
  return closestPair
}
