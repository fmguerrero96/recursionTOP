function fibs(num) {
  let i = 0;
  let answer = [];
  let a = 0
  let b = 1 
  while(i < num){
    answer.push(a)
    i++
    x = b+a 
    a = b 
    b = x
  }
  return answer
}

/*
console.log(fibs(0)) -> []
console.log(fibs(1)) -> [ 0 ]
console.log(fibs(2)) -> [ 0, 1 ]
console.log(fibs(3)) -> [ 0, 1, 1 ]
console.log(fibs(4)) -> [ 0, 1, 1, 2 ]
console.log(fibs(5)) -> [ 0, 1, 1, 2, 3 ]
console.log(fibs(12)) -> [ 0,  1,  1,  2,  3, 5,  8, 13, 21, 34, 55, 89 ]
console.log(fibs(20)) -> [ 0,   1,    1,    2,    3,
                           5,   8,   13,   21,   34,
                          55,  89,  144,  233,  377,
                         610, 987, 1597, 2584, 4181 ]
*/