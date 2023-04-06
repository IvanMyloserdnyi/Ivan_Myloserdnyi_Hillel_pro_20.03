
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array,item) {
    let i = array.indexOf(item)
    array.splice(i,1)
    return array
}
console.log(removeElement(array,5))
// Result [ 1, 2, 3, 4, 6, 7 ]