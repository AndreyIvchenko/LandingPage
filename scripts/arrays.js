const arr1 = [
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

const arrTypStr = [
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
];
// функция получает массив типов, возвращает массив с одним элементом типа string 
// если входящий параметр не массив возвращает "no array"

function getTypes(data) {
  if (!Array.isArray(data)) {
    return ["no array"];
  }
  else {
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
    return newArray;
  }
}
getTypes(arr1)

//function test 
const arr2 = ["Hello", 45, true]
const arr3 = ["string", "number", "boolean"]

function test(arr, arrForCompare) {
  const types = getTypes(arr);
  const types2 = arrForCompare
  return JSON.stringify(types) == JSON.stringify(types2);
}
test(arr2, arr3)