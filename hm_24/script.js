class obg {
    constructor(x, y, znak) {
        this.x = x
        this.y = y
        this.znak = znak
    }
}

class SuperMath {

    check(obg) {
        this.obgect = obg
        let question = confirm(`Чи бажаєте зробити операцію ${this.obgect.x}${this.obgect.znak}${this.obgect.y}?`)
        if (question === true) {
            this.doMath()
        } else {
            this.input().doMath()
        }
    }

    input() {
        this.obgect.x = +prompt('x')
        this.obgect.znak = prompt('znak')
        this.obgect.y = +prompt('y')
        return this
    }

    doMath() {
        const x = this.obgect.x
        const y = this.obgect.y
        const znak = this.obgect.znak
        switch (true) {
            case isNaN(x) || isNaN(y): {
                alert('Incorrect number');
                break
            }
            case x === 0 && y === 0 && znak === '/': {
                alert('Нуль на нуль ділити неможна')
                break
            }
            case((znak !== '-' && znak !== '+' && znak !== '^' && znak !== '/' && znak !== '%' && znak !== '*') || znak.length !== 1) : {
                alert('Incorrect symbol');
                break
            }
            case znak === '-': {
                alert(`${x}${znak}${y}=${x - y}`);
                break
            }
            case znak === '+': {
                alert(`${x}${znak}${y}=${x + y}`);
                break
            }
            case znak === '^': {
                alert(`${x}${znak}${y}=${x ** y}`);
                break
            }
            case znak === '/': {
                alert(`${x}${znak}${y}=${x / y}`);
                break
            }
            case znak === '%': {
                alert(`${x}${znak}${y}=${x % y}`);
                break
            }
            case znak === '*': {
                alert(`${x}${znak}${y}=${x * y}`);
                break
            }
            default : {
                alert('Error')
            }
        }
    }
}

const firstObg = new obg(22, 5, '*')
const operation = new SuperMath()
operation.check(firstObg)