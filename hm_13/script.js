let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
document.write(`Array:[${array}]<br><br>`);
/*1*/
let positiveElements = array.filter(function (number){
    return number>0
})
let sumOfPositiveElements = 0;
for (let i = 0;i < positiveElements.length; i++) {
    let element = positiveElements[i];
    sumOfPositiveElements +=element
}
document.write(`First task:<br>Positive elements:${positiveElements}<br>Amount:${positiveElements.length} elements<br>Summ: ${sumOfPositiveElements}<br><br>`)

/*2*/
const minElement = Math.min(...array);
document.write(`Second task:<br>Min element of array:${minElement}<br>Its serial number:${array.indexOf(minElement)+1}<br><br>`);

/*3*/
const maxElement = Math.max(...array);
document.write(`Third task:<br>Max element of array:${maxElement}<br>Its serial number:${array.indexOf(maxElement)+1} <br><br>`);

/*4*/
let negativeElements = array.filter(function (number) {
    return number < 0
})
document.write(`Fourth task:<br>Negative elements:${negativeElements}<br>Amount:${negativeElements.length} elements<br><br>`);

/*5*/

let unpairPositiveElements = []
for (let i = 0;i<positiveElements.length; i++) {
    let one = positiveElements[i]
    if(one%2===0) continue
    unpairPositiveElements.push(one)
}
document.write(`Fifth task:<br>Positive elements:${positiveElements}<br>
Unpair positive elements:${unpairPositiveElements}<br>Amount: ${unpairPositiveElements.length} elements<br><br>`)

/*6*/
let pairPositiveElements = []
for (let i = 0;i<positiveElements.length; i++) {
    let element = positiveElements[i]
    if(element%2!==0) continue
    pairPositiveElements.push(element)
}
document.write(`Sixth task:<br>Positive elements:${positiveElements}<br>
Pair positive elements:${pairPositiveElements}<br>Amount: ${pairPositiveElements.length} elements<br><br>`)

/*7*/
let sumOfPairPositiveElements = 0;
for (let i = 0;i<pairPositiveElements.length;i++) {
    let element = pairPositiveElements[i];
    sumOfPairPositiveElements +=element
}
document.write(`Seventh task:<br>Pair positive elements:${pairPositiveElements}<br>Its summ:${sumOfPairPositiveElements}<br><br>`)

/*8*/
let sumOfUnpairPositiveElements = 0;
for (let i = 0;i<unpairPositiveElements.length;i++) {
    let element = unpairPositiveElements[i];
    sumOfUnpairPositiveElements +=element
}
document.write(`Eighth task:<br>Unpair positive elements:${unpairPositiveElements}<br>Its summ:${sumOfUnpairPositiveElements}<br><br>`)

/*9*/
let multOfPositiveElements = 1;
for (let i = 0;i < positiveElements.length;i++) {
    multOfPositiveElements *= positiveElements[i]
}
document.write(`Ninth task:<br>Mult:${multOfPositiveElements}<br><br>`)

/*10*/
document.write(`Tenth task:<br>Array before: [${array}]<br>`)
let maxArrayValue = array[0]
let maxArrayValueIndex = 0
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxArrayValue) {
        maxArrayValue = array[i];
        array[maxArrayValueIndex] = 0;
        maxArrayValueIndex = i;
    }
    else {
        array[i] = 0;
    }
}
document.write(`Array after: [${array}]`)