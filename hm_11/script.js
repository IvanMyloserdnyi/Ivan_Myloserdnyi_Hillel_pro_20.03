/*1*/
console.log('First task')
for (let i = 20; i <= 30; i +=0.5) {
    console.log(` ${i}`)
}

/*2*/
console.log('Second task')
for (let i = 10; i<=100; i+= 10) {
    console.log(`${i}USD = ${i*27}UAH; `)
}

/*3*/
console.log('Third task')
let n = Number(prompt('Third task: Hive me a number', '300'));
switch (true) {
    case !n: {
        alert('The number is incorrect')
        console.log('The number is incorrect')
        break
    }
    default: {
        for (let i = 1; i <=100; i++) {
            if (i**2 > n) continue
            console.log(` ${i};`)
        }
        break
    }
}

/*4*/
console.log('Fourth task')
let x = Number(prompt('Fourth task: Hive me a number', '300'));
let divisorsCount = 0
for (let i = 1; i <=x; i++) {
    if (x%i !== 0) continue
    divisorsCount += 1
}
switch (true) {
    case !x: {
        alert('The number is incorrect')
console.log(`Selected number: BANAN)`)
        break
    }
    case divisorsCount === 2: {
console.log(`Selected number:${x}Its a simple number`)
        break
    }
    default: {
console.log(`Selected number:${x}It isn't a simple number`)
        break
    }
}

/*5*/
console.log('Fifth task')
let y = Number(prompt('Fifth task: Give me a number', '300'))
let result = 0
for (let i=1; i<=26; i++) {
    if (3**i!==y) continue
    result +=1
}
switch (true) {
    case !y: {
        alert('The number is incorrect')
        console.log(`Selected number:BANAN`)
        break
    }
    case result>=1: {
        console.log(`Selected number:${y}; Its possible`)
        break
    }
    default: {
        console.log(`Selected number:${y}; Its impossible`)
        break
    }
}
