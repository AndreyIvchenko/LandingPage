function showCons(text) {
    if (typeof text == "string") {
        console.log(text)
    } else {
        console.log("Wrong data type")
    }
}
showCons("Hello")

function summaNum(n1, n2) {
    if (typeof n1 !== 'number') {
        console.log("one or both params, not numbers");
        return 0;
    } else if (typeof n2 !== 'number') {
        console.log("one or both params, not numbers");
        return 0;
    } else {
        return n1 + n2;
    }
}
const res = summaNum(1, 9);
console.log(res)


// let bid1 = document.getElementById("but1")
// console.log(bid1)
// function butClick() {
//     console.log("Click!")
// }
// bid1.addEventListener('click', butClick)





