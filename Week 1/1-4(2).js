let myname = 'choikanghee'

console.log(myname.toUpperCase())

//split
let myemail = 'rkdgml1106@gmail.com'

let result = myemail.split('@')

console.log(result)

let result2 = result[1].split('.')

console.log(result2)

console.log(myemail.split('@')[1].split('.'))

//join
let txt = '서울시-마포구-망원동'

let names = txt.split('-')

console.log(names)

console.log(names.join('<'))


//사용자 함수
function sum(a, b) {
    console.log('a = ', a, 'b = ', b)
    return a + b
}

console.log(sum(3, 5))
console.log(sum(4, -1))

let result3 = sum(4, 9)

console.log(result3)


let func = function() {
    console.log('변수에 함수 삽입하기')
}

func()