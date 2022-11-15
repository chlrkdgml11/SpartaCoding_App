function is_adult(age) {
    if(age >= 20) {
        console.log('성인입니다.')
    } else {
        console.log('미성년자입니다.')
    }
}

is_adult(19)
is_adult(21)

function age_check(age) {
    if(age >= 20) {
        console.log('성인입니다.')
    } else if(age >= 10) {
        console.log('10대 입니다.')
    } else {
        console.log('10살 미만입니다.')
    }
}

age_check(21)
age_check(15)
age_check(8)


//AND조건과 OR조건
function is_adult(age, sex) {
	if(age > 20 && sex == '여') {
		console.log('성인 여성')
	} else if(age > 20 && sex == '남') {
		console.log('성인 남성')
	} else {
		console.log('청소년이에요')
	}
}

function is_adult(age, sex) {
	if(age > 65 || age < 10) {
		console.log('탑승하실 수 없습니다')
	} else if(age > 20 && sex == '여'){
		console.log('성인 여성')
	} else if(age > 20 && sex == '남') {
		console.log('성인 남성')
	} else {
		console.log('청소년이에요')
	}
}

is_adult(25,'남')


//반복문
for(let i = 0; i < 10; i++) {
    console.log(i)
}

let scores = [
    {'name':'철수', 'score':90},
    {'name':'영희', 'score':85},
    {'name':'민수', 'score':70},
{'name':'형준', 'score':50},
{'name':'기남', 'score':68},
{'name':'동희', 'score':30},
]

for (let i = 0 ; i < scores.length ; i++) {
    console.log(scores[i]);
}

for (let i = 0 ; i < scores.length ; i++) {
    if(scores[i].score < 70) {
        console.log(scores[i].name)
    }
}