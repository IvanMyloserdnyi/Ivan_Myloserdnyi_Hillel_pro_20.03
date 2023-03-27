

let firstNumber = Number(prompt("First number","3"));
let secondNumber = Number(prompt("Second number","4"));
let thirdNumber = Number(prompt("Third number","5"));

switch (isNaN(firstNumber)||isNaN(secondNumber)||isNaN(thirdNumber)) {
    case true: {
        alert("Місяць світе наче срака\n" +
            "Зорі сяють де не де\n" +
            "На снігу насрав собака...\n" +
            "Дивиться як пар іде.")
        break
    }
    default: {
        const averageArithmetic = (firstNumber+secondNumber+thirdNumber)/3;
        alert(averageArithmetic);
    }
}


