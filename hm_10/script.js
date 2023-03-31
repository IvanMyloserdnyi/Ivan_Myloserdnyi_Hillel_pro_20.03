/*1*/
let firstStr = '';
for (let i = 10;i<=20; i++) {
    firstStr += ',' + i;
}
alert('first: '+ firstStr.slice(1))

/*2*/
let secondStr = '';
for (let i = 10;i<=20; i++) {
    secondStr += ',' + i**2;
}
alert('second: ' + secondStr.slice(1))

/*3*/
let thirdStr = '';
for (let i = 1;i<=9; i++) {
    thirdStr += ',' + i*7;
}
alert('third: ' + thirdStr.slice(1))

/*4*/
let fourthStr = 0;
for (let i = 1;i<=15; i++) {
    fourthStr += i;
}
alert('fourth: ' + fourthStr)

/*5*/
let fifthStr = 1;
for (let i = 15;i<=35; i++) {
    fifthStr *= i;
}
alert('fifth: ' + fifthStr)

/*6*/
let sixthStr = 0;
for (let i = 1;i<=500; i++) {
    sixthStr += i;
}
alert('sixth: ' + sixthStr/500)

/*7*/
let seventhStr = 0;
for (let i = 30;i<=80; i++) {
    if(i % 2 !== 0) continue;
    seventhStr += i;
}
alert('seventh: ' + seventhStr)

/*8*/
let eighthStr = '';
for (let i = 100;i<=200; i++) {
    if(i % 3 !== 0) continue;
    eighthStr += ',' + i;
}
alert('eighth: ' + eighthStr.slice(1))

/*9*/
let ninthStr = '';
const x = 300;
for (let i = 1;i<=x; i++) {
    if(x%i !== 0) continue;
    ninthStr += ',' + i;
}
alert(`ninth(number is ${x}): ` + ninthStr.slice(1))

/*10*/
let tenthStr = '';
let count = 0
for (let i = 2;i<=x; i+=2) {
    if(x%i !== 0) continue;
    tenthStr += ',' + i;
    count +=1
}
alert(`tenth(number is ${x}): count:${count} (${tenthStr.slice(1)})`)

/*11*/
let eleventhStr = 0;
for (let i = 2;i<=x; i+=2) {
    if(x%i !== 0) continue;
    eleventhStr +=i;
}
alert(`eleventh(number is ${x}): ` + eleventhStr)

/*12*/
let table = ''
for (let i=1;i <=9; i++) {
    table +=`${i}\n`
    for(let j=1; j<=9; j++) {
       let mult = i*j;
       let result = i+'*'+j+'='+mult+';'
        table +=result + ' '
    }
    table +='\n'
}
alert('twelfth:\n' + table)
