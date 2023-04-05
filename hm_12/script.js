let array = [];
let count = 30;
for (let i = 1; i < count; i++) {
    array.push(i)
}
function sortMyArray(a,b) {
    if (a>b) {
        return -1
    }
    else if (b>a) {
        return 1
    }
    else {
        return 0
    }
}

console.log(array.sort(sortMyArray))
console.log(`Default array: ${array}<br>`)
array.splice(1, 3);
console.log(`Ref array: ${array}`)
