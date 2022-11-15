//List
let a_list = []
let b_list = [1, 2, 'hey', 3]

console.log(b_list[1])
console.log(b_list[2])

//리스트의 값 추가
b_list.push('헤이')

console.log(b_list)

//리스트의 길이값
console.log(b_list.length)

//Dictionary
let a_dict = {}
let b_dict = {'name' : 'Bob', 'age' : 21}

console.log(b_dict['name'])
console.log(b_dict['age'])

b_dict['height'] = 180

console.log(b_dict['height'])

//List와 Dictionary의 조합
let names = [{'name' : 'Bob', 'age' : 20}, {'name' : 'carry', 'age' : 38}]

console.log(names[0]['name'])
console.log(names[1]['name'])

let new_name = {'name' : 'john', 'age' : 7}

names.push(new_name)

console.log(names)

//딕셔너리의 값을 출력할때는 키를 이용해도 되지만 .(연결연산자)를 사용해도 가능
//let b_dict = {'name' : 'Bob', 'age' : 21}
console.log(b_dict.name)









