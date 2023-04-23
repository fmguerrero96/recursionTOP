const fibsRec = function(num, answer = [], prev = 0, current = 1){
    if (num === answer.length){
      return answer
    }
    let next = prev + current
    answer.push(prev)
    return fibsRec(num, answer, current, next);
  }

  /*
console.log(fibsRec(0)) -> []
console.log(fibsRec(1)) -> [ 0 ]
console.log(fibsRec(2)) -> [ 0, 1 ]
console.log(fibsRec(3)) -> [ 0, 1, 1 ]
console.log(fibsRec(4)) -> [ 0, 1, 1, 2 ]
console.log(fibsRec(5)) -> [ 0, 1, 1, 2, 3 ]
console.log(fibsRec(12)) -> [ 0,  1,  1,  2,  3, 5,  8, 13, 21, 34, 55, 89 ]
console.log(fibsRec(20)) -> [ 0,   1,    1,    2,    3,
                              5,   8,   13,   21,   34,
                             55,  89,  144,  233,  377,
                            610, 987, 1597, 2584, 4181 ]
*/