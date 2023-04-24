const merge = (leftArray, rightArray) => {
    let result = []
    let leftPoint = 0
    let rightPoint = 0
    
    while (leftPoint < leftArray.length && rightPoint < rightArray.length) {
      if (leftArray[leftPoint] < rightArray[rightPoint]){
        result.push(leftArray[leftPoint])
        leftPoint++
      } else {
        result.push(rightArray[rightPoint])
        rightPoint++
      }
    }
    
    while (leftPoint < leftArray.length) {
      result.push(leftArray[leftPoint]);
      leftPoint++;
    }
  
    while (rightPoint < rightArray.length) {
      result.push(rightArray[rightPoint]);
      rightPoint++;
    }
    
    return result
  }