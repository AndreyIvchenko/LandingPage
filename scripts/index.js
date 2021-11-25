//Запуск скрипта: cd scripts -> node index.js
//Есть переменные в глобальной области видимости (просто объявлены в скрипте) и они доступны и могут быть переопределены (кроме const)


//Ex1
var a = 5
let b = 34
const c = 55

const f1 = () => {
    console.log(a)
    console.log(b)
    b = "hello"
    console.log(b)
    console.log(c)
}

f1()

console.log(b)

//Переменные, которые определены внутри фигурных скобок, нельзя получить или изменить снаружи. 

//Ex1
const f2 = () => {
    var e = 5
    let f = 34
    const g = 55
}

console.log(e)
console.log(f)
console.log(g)

    // один раз выпадет ошибка и ломается скрипт.


// Впеременную можно записать любой из 8 типов данных



