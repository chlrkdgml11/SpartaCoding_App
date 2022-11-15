let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

let podo_list = fruit_list.filter((value, index, array) => {
    return value == "포도"
})

console.log(podo_list)