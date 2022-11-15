//문자열을 쉽게 쓸수있는 백틱
const id = "myId"
const url = `http://noahblog.tistory.com/login/${id}`

const message1 = "줄바꿈을 하려면 \n 이 기로를 써야 했죠!"

console.log(message1)

const message2 = `줄바꿈도 마음대로
사용이 가능합니다.`

console.log(message2)


//객체 리터럴
let name = "스파르타"
let job = "developer"

//키와 value가 같으면 아래와 같이 딕셔너리 선언 가능
let user = {
    name,
    job
}

console.log(user)