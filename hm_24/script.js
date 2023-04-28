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
        switch (true) {
            case isNaN(this.obgect.x) || isNaN(this.obgect.y): {
                alert('Incorrect number');
                break
            }
            case this.obgect.x === 0 && this.obgect.y === 0 && this.obgect.znak === '/': {
                alert('Нуль на нуль ділити неможна')
                break
            }
            case((this.obgect.znak !== '-' && this.obgect.znak !== '+' && this.obgect.znak !== '^' && this.obgect.znak !== '/' && this.obgect.znak !== '%' && this.obgect.znak !== '*') || this.obgect.znak.length !== 1) : {
                alert('Incorrect symbol');
                break
            }
            case this.obgect.znak === '-': {
                alert(`${this.obgect.x}${this.obgect.znak}${this.obgect.y}=${this.obgect.x - this.obgect.y}`);
                break
            }
            case this.obgect.znak === '+': {
                alert(`${this.obgect.x}${this.obgect.znak}${this.obgect.y}=${this.obgect.x + this.obgect.y}`);
                break
            }
            case this.obgect.znak === '^': {
                alert(`${this.obgect.x}${this.obgect.znak}${this.obgect.y}=${this.obgect.x ** this.obgect.y}`);
                break
            }
            case this.obgect.znak === '/': {
                alert(`${this.obgect.x}${this.obgect.znak}${this.obgect.y}=${this.obgect.x / this.obgect.y}`);
                break
            }
            case this.obgect.znak === '%': {
                alert(`${this.obgect.x}${this.obgect.znak}${this.obgect.y}=${this.obgect.x % this.obgect.y}`);
                break
            }
            case this.obgect.znak === '*': {
                alert(`${this.obgect.x}${this.obgect.znak}${this.obgect.y}=${this.obgect.x * this.obgect.y}`);
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