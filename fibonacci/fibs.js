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