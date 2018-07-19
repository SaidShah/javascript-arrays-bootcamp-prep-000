var chocolateBars=["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(givenArray, value){
  givenArray.unshift(value)
   var newArray = [value, ...givenArray]
  return newArray
}

function destructivelyAddElementToBEginningOfArray(givenArray, value){
  
  
  var newArray = [value, ...givenArray]
  
  return newArray
}

return