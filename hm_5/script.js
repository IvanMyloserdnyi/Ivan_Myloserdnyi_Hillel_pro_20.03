
alert("Hi mfk! I'm a gopnik-calculator!")
let gopnikCalculator = prompt("What do you want from me mfk?You have a choice!Select one: add, sub, mult, div. If not - you will have a significantly problem mfk!");
let firstNumber = Number(prompt("Give me first number mfk!","2"));
let secondNumber = Number(prompt("Give me second number mfk!","3"));
confirm("Seriously,do you want to have a problem mfk??!?")
const gopnikAdd = firstNumber+secondNumber;
const gopnikSub = firstNumber-secondNumber;
const gopnikMult = firstNumber*secondNumber;
const gopnikDiv = firstNumber/secondNumber;
switch (gopnikCalculator) {
    case "add":
        alert(`${firstNumber}+${secondNumber}=${gopnikAdd}`)
        break
    case "sub":
        alert(`${firstNumber}-${secondNumber}=${gopnikSub}`)
        break
    case "mult":
        alert(`${firstNumber}*${secondNumber}=${gopnikMult}`)
        break
    case "div":
        alert(`${firstNumber}/${secondNumber}=${gopnikDiv}`)
        break
    default:
        alert("You have a problem mfk!!")
}



