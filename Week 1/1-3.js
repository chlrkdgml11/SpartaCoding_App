// 출력할때는 console.log()
console.log("Hello World")

// 최초로 변수를 선언할 때는 let / var를 사용
// var는 옛날방식
// let은 최신방식
let num = 1

let a = 1
let b = 2

console.log(a+b)

console.log(a/b)

let first = 'Bob'
let last = 'Lee'

console.log(first + last)

console.log(first + ' ' + last)

//문자와 숫자를 더하면 문자열이 된다
console.log(first + a)

//바뀌지 말아야 할 변수는 const 사용
//const변수를 변경하면 컴파일 에러
let value_box = '값'
value_box = '변경한 값'

console.log(value_box)

const value_fix = '값'
value_fix = '변경한 값'

console.log(value_fix) 