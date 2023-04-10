
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array,item) {
    let newArray = array
    return newArray.filter(value => value !==item)
}
console.log(removeElement(array,5))
// Result [ 1, 2, 3, 4, 6, 7 ]