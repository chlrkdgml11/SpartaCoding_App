function get_sum(n) {
    let sum = 0
    for(let i = 0; i < n; i++) {
        sum += i
    }
    console.log('n-1까지의 합은', sum, '입니다')
    return sum
}

let result = get_sum(10)
console.log(result)


//과일 리스트
let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']
let cnt = 0

for(let i = 0; i < fruit_list.length; i++) {
    if(fruit_list[i] == '딸기') {
        cnt += 1
    }
    console.log('딸기의 개수는', cnt, '입니다')
}