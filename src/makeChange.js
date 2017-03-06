const coins = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
}
const takeQuarter = function(amountGiven, price){
  amountGiven = amountGiven - 25
  coins.quarters++
  return amountGiven
}
const takeDime = function(amountGiven, price){
  amountGiven = amountGiven - 10
  coins.dimes++
  return amountGiven
}
const takeNickel = function(amountGiven, price){
  amountGiven = amountGiven - 5
  coins.nickels++
  return amountGiven
}
const takePenny = function(amountGiven, price){
  amountGiven = amountGiven - 1
  coins.pennies++
  return amountGiven
}
export default function makeChange({price, amountGiven}) {
  let results = {}
  if(price === amountGiven) {
    results.quarters = coins.quarters
    results.dimes = coins.dimes
    results.nickels = coins.nickels
    results.pennies = coins.pennies

    coins.quarters = 0
    coins.dimes = 0
    coins.nickels = 0
    coins.pennies = 0
    return results
  }
  if(amountGiven - price >= 25){
    amountGiven = takeQuarter(amountGiven, coins)
    return makeChange({price: price, amountGiven: amountGiven})
  }else if(amountGiven - price >= 10){
    amountGiven = takeDime(amountGiven, price)
    return makeChange({price: price, amountGiven: amountGiven})
  }else if(amountGiven - price >= 5){
    amountGiven = takeNickel(amountGiven, price)
    return makeChange({price: price, amountGiven: amountGiven})
  }else if(amountGiven - price >= 1){
    amountGiven = takePenny(amountGiven, price)
    return makeChange({price: price, amountGiven: amountGiven})
  }
}
