const fibsRec = function(num, answer = [], prev = 0, current = 1){
    if (num === answer.length){
      return answer
    }
    let next = prev + current
    answer.push(prev)
    return fibsRec(num, answer, current, next);
  }