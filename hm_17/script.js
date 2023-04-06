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
/*let x = +prompt('Give me x',20)
let znak = prompt('Znak', '-')
let y = +prompt('Give me y', 15)
function doMath(x,znak,y) {
    if (!x||!y) return 'Incorrect number'
    if (znak !=='-'||znak !=='+'||znak !=='^'||znak !=='/'||znak !=='%'||znak !=='*'||znak.length !==1) return 'Incorrect value'
    return eval(x + znak.replace('^', '**') + y)
}
alert(doMath(x,znak,y))*/

//Third task

function arrayAdd() {
    let array = []
    let quantity = +prompt('How many arrays')
    for (let i = 0; i<quantity; i++) {
        array.push([])
        let quantityOfElements = +prompt(`How many elements in ${i + 1} array`)
        for (let j = 0;j < quantityOfElements;j++) {
            let element = prompt(`Point at ${j+1} element`)
            array[i].push(element)
        }
    }
    console.log(array)
}
arrayAdd()
