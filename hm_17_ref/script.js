//First task
const array = ['asdsad', -5,'fdfvvvv.','sdf', 28,'fd', 12, 256,'dadada',14, 88]
function average(array) {
    let arrayOfNum = array.filter(value => typeof(value) === "number")
    let sumOfArray = arrayOfNum.reduce(function (total = 0,number) {
        return total + number
    })
    return sumOfArray/arrayOfNum.length
}
console.log(average(array))
//Result: 65.5

//Second task
let firstNum = +prompt('Give me x',20)
let znak = prompt('Znak', '-')
let secondNum = +prompt('Give me y', 15)
function doMath(x,znak,y) {
    switch (true) {
        case x||y: {
            return 'Incorrect number';
        }
        case( znak !=='-'&&znak !=='+'&&znak !=='^'&&znak !=='/'&&znak !=='%'&&znak !=='*'&&znak.length !==1) : {
            return 'Incorrect symbol';
        }
        case znak === '-': {
            return x-y;
        }
        case znak === '+': {
            return x+y;
        }
        case znak === '^': {
            return x**y;
        }
        case znak === '/': {
            return x/y;
        }
        case znak === '%': {
            return x%y;
        }
        case znak === '*': {
            return x*y;
        }
        default :{
            alert('Error')
        }
    }
}
alert(doMath(firstNum,znak,secondNum))


//Third task

function arrayAdd() {
    let array = []
    let quantity = +prompt('How many arrays')
    if (!!quantity) {
        for (let i = 0; i < quantity; i++) {
            array.push([])
            let quantityOfElements = +prompt(`How many elements in ${i + 1}st array`)
            if (!!quantityOfElements) {
                for (let j = 0; j < quantityOfElements; j++) {
                    let element = prompt(`Point at ${j + 1}st element`)
                    array[i].push(element)
                }
            } else {
                alert('Incorrect number')
                break
            }
        }
        console.log(array)
    } else {
        alert('Incorrect number')
    }
}
arrayAdd()

// Fourth task

let x = prompt('Give string')
let y = prompt('what to delete')
let z = x.split(y).join('')
alert(z)
function newStr(str, del) {
    if (typeof(del) === 'object') {
        for (let i = 0;i < del.length; i++) {
            str = str.split(del[i]).join('')
        }
        console.log(str)
    }
    else {
    str = str.split(del).join('')
    console.log(str)
    }
}
newStr('pcyktiqn Hqyiclo',['c', 'k', 'q'])
//Result: pytin Hyilo
