var chocolateBars=["snickers", "hundred grand", "kitkat","skittles"]

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

function addessElementInArray(givenArray, index){
  return givenArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(givenArray, value){
  
  givenArray.shift()
  return givenArray
  
}

function removeElementFromBeginningOfArray(givenArray,index){
  
  givenArray.slice(1)
  return givenArray
  
}

function destructivelyRemoveElementFromEndOfArray(givenArray, index){
  
  givenArray.pop()
  return givenArray
}

function removeElementFromEndOfArray(givenArray){
  givenArray.slice(0,length-1)
  return givenArray
}



















