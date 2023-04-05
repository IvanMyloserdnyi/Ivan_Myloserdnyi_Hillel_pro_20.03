let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

/*1*/
let sumAllOfElements = array.reduce(function (sum=0,value) {
    return sum + value
})
let positiveElements = array.filter(value => value>0)
let positiveElementsCount = positiveElements.length
console.log('First task:' + sumAllOfElements,positiveElementsCount)

/*2*/
const minElement = Math.min(...array);
console.log(`Second task:<br>Min element of array:${minElement}<br>Its serial number:${array.indexOf(minElement)+1}<br><br>`);

/*3*/
const maxElement = Math.max(...array);
console.log(`Third task:<br>Max element of array:${maxElement}<br>Its serial number:${array.indexOf(maxElement)+1} <br><br>`);

/*4*/
let negativeElements = array.filter(function (number) {
    return number < 0
})
console.log(`Fourth task:<br>Negative elements:${negativeElements}<br>Amount:${negativeElements.length} elements<br><br>`);

/*5*/
let unpairPositiveElements = positiveElements.filter(value => value%2 !== 0)
let unpairPositiveElementsCount = unpairPositiveElements.length
console.log('Fifth task:'+ unpairPositiveElementsCount)

/*6*/
let pairPositiveElements = positiveElements.filter(value => value%2 === 0)
let pairPositiveElementsCount = pairPositiveElements.length
console.log('Sixth task:'+pairPositiveElementsCount)

/*7*/
let sumOfPairPositiveElements = pairPositiveElements.reduce(function (sum=0,value) {
    return sum + value
})
console.log('Seventh task:'+sumOfPairPositiveElements)

/*8*/
let sumOfUnpairPositiveElements = unpairPositiveElements.reduce(function (sum=0,value) {
    return sum + value
})
console.log('Eighth task:'+ sumOfUnpairPositiveElements)

/*9*/
let multOfPositiveElements = positiveElements.reduce(function (mult=1, value) {
    return mult * value
})
console.log('Ninth task:'+ multOfPositiveElements)

/*10*/
let newArray = array.map(value => {
    if (value === maxElement) {
        return value
    }
    else {
        return 0
    }
})
console.log('Tenth task:'+newArray)
