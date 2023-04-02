let array = [];
let count = 30;
for (let i = 1; i < count; i++) {
    array.push(i)
}
document.write(`Default array: ${array}<br>`)
array.splice(1, 3);
document.write(`Ref array: ${array}`)
