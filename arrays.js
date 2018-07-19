var chocolateBars=["snickers", "hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(givenArray, value){
  
   var newArray = [value, ...givenArray]
   
  return newArray
}

function destructivelyAddElementToBeginningOfArray(givenArray, value){
  givenArray.unshift(value)
  
  return givenArray
}

function addElementToEndOfArray(givenArray, value){
  
  var newArray=[value..., givenArray]
  return newArray
}

function destructivelyAddElementToEndOfArray(givenArray, value){
  
  givenArray.push(value)
  return givenArray
}

function accessElementInArray(givenArray, index){
  return givenArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(givenArray){
  
  givenArray.shift()
  return givenArray
  
}

function removeElementFromBeginningOfArray(givenArray){
  
  givenArray.slice(1)
  return givenArray
  
}

function destructivelyRemoveElementFromEndOfArray(givenArray){
  
  givenArray.pop()
  return givenArray
}

function removeElementFromEndOfArray(givenArray){
  givenArray.slice(0,length-1)
  return givenArray
}



















