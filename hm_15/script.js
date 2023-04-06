
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array,item) {
    let i = array.indexOf(item)
    if (i === -1) {
        return'OMG!Error!Attention!This is BANAN!'
    }
    else {
    array.splice(i,1)
    return array
    }
}
console.log(removeElement(array,5))
// Result [ 1, 2, 3, 4, 6, 7 ]