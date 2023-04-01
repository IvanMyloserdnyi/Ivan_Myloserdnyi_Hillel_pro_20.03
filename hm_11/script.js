/*1*/
document.write('First task<br>')
for (let i = 20; i <= 30; i +=0.5) {
    document.write(` ${i}`)
}

/*2*/
document.write('<br><br>Second task<br>')
for (let i = 10; i<=100; i+= 10) {
    document.write(`${i}USD = ${i*27}UAH; `)
}

/*3*/
document.write('<br><br>Third task<br>')
let n = Number(prompt('Third task: Hive me a number', '300'));
switch (true) {
    case !n: {
        alert('The number is incorrect')
        document.write('The number is incorrect')
        break
    }
    default: {
        for (let i = 1; i <=100; i++) {
            if (i**2 > n) continue
            document.write(` ${i};`)
        }
        break
    }
}

/*4*/
document.write('<br><br>Fourth task<br>')
let x = Number(prompt('Fourth task: Hive me a number', '300'));
let divisorsCount = 0
for (let i = 1; i <=x; i++) {
    if (x%i !== 0) continue
    divisorsCount += 1
}
switch (true) {
    case !x: {
        alert('The number is incorrect')
        document.write(`Selected number: лучше бы оставили 300:)<br>`)
        break
    }
    case divisorsCount === 2: {
        document.write(`Selected number:${x}<br>Its a simple number`)
        break
    }
    default: {
        document.write(`Selected number:${x}<br>It isn't a simple number`)
        break
    }
}

/*5*/
document.write('<br><br>Fifth task<br>')
let y = Number(prompt('Fifth task: Give me a number', '300'))
let result = 0
for (let i=1; i<=26; i++) {
    if (3**i!==y) continue
    result +=1
}
switch (true) {
    case !y: {
        alert('The number is incorrect')
        document.write(`Selected number:BANAN<br>`)
        break
    }
    case result>=1: {
        document.write(`Selected number:${y}; Its possible`)
        break
    }
    default: {
        document.write(`Selected number:${y}; Its impossible`)
        break
    }
}
