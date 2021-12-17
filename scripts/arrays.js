
const arr = [
  {},
  -Infinity,
  "",
  undefined,
  45,
  0,
  "0",
  [],
  [10, { name: "qwe" }],
  null,
  NaN,
  true,
  false,
  () => { },
  function () { },
  Infinity,
  Symbol("Hello!"),
  { a: typeof String("сам Hello") }
]
/*
arr Array[
    "object",
    "-Infinity",
    "string",
    "undefined",
    "number",
    "number",
    "string",
    "Array",
    "Array",
    "null",
    "NaN",
    "boolean",
    "boolean",
    "function",
    "function",
    "Infinity",
    "symbol",
    "object",
  ]
// если входящий параметр не массив =
// вернуть массив с одним элементом типа string с текстом "param is not an array"*/

function convertArray(data) {
  if (Array.isArray(data)) {
    const newArray = data.map((item, index, array) => {
      if (item === Infinity) return 'Infinity'
      if (item === -Infinity) return '-Infinity'
      if (item === null) return 'null'
      if (Array.isArray(item)) return 'Array'
      if (Object.is(NaN, item)) return 'NaN'
      if (typeof item === 'number') return 'number'
      if (typeof item === 'object') return 'object'
      if (typeof item === 'string') return 'string'
      if (typeof item === 'boolean') return 'boolean'
      if (typeof item === 'function') return 'function'
      if (typeof item === 'undefined') return 'undefined'
      if (typeof item === 'symbol') return 'symbol'
      return typeof item
    })
    console.log(newArray)
  }
  else {
    console.log(["param is not an array"]);
  }
}
convertArray(arr)

// arr.forEach(function (item) {
//   console.log(typeof item)
// }) //перебор массива и тайп в консоль
// let objNaN = Object.is(NaN, NaN)
// console.log(objNaN) //сравнивает нан и нан
// console.log(arr.includes(Infinity));
// console.log(arr.toString)

// var str = arr.toLocaleString()
// console.log(str) возврат данных в строке
//  1. Проверить, является ли объект функцией массива:
//splice -'швейцарский нож' для работы с масс
/*slice -Он возвращает новый массив, в который копирует элементы,
начиная с индекса start и до end (не включая end).
Оба индекса start и end могут быть отрицательными.
В таком случае отсчёт будет осуществляться с конца массива.
concat
 Concat - метод arr.concat создаёт новый массив, в
который копирует данные из других массивов и
дополнительные значения.
  Перебор: forEach
Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
Его синтаксис:
arr.forEach(function(item, index, array) {
  // ... делать что-то с item
});

*/
// let ma = [1, 2, 2, 3, 4, 5]
// let del = ma.splice(2, 1)// del 2
// // console.log(ma)

// let ma2 = [1, 2, 4, 5]
// let add = ma2.splice(2, 0, 3) //del 0,add 3
// console.log(ma2)

//2 Перебрать массив на typeof

// function returnTypeOf(typArg) {
//   return
// }
// returnTypeOf()

// let arr1 = [1, "1", [1, 2]];
// //for перебор
// for (let array of arr1) {
//   console.log(typeof array)
// }
