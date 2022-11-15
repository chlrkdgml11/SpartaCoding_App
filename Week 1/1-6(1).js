//화살표 함수
let a = () => {
    console.log("arrow function")
}

a()


//딕셔너리 키와 값을 빠르게 꺼내기
let blog = {
    owner : "noah",
    url : "noahblog.tistory.con",
    getPost() {
        console.log("ES6 문법 정리")
    }
}

//기존 방식
//let owner = blog.owner
//let getPost = blog.getPost()


//비구조 할당
let {owner, getPost} = blog

let blogFunction = ({owner, url, getPost}) => {
    console.log(owner)
    console.log(url)
    console.log(getPost())
}

blogFunction(blog)
