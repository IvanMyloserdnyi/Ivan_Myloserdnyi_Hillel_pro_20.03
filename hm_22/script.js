class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    aboutHuman() {
        console.log(this.name, this.age + 'years old')
    }
}

class Auto {

    constructor(brand, model, year, number) {
        this.brand = brand
        this.model = model
        this.year = year
        this.number = number
    }

    addOwner(Human) {
        this.owner = ''
        if (Human.age < 18) {
            console.log('Людині менше 18 років')
            this.owner = 'Немає власника'
            return this
        }
        this.owner = Human
        return this
    }

    aboutCar() {
        if (this.owner === 'Немає власника') {
            console.log(this)
        } else {
            console.log(this)
            this.owner.aboutHuman()
        }
    }
}

const firstHuman = new Human('mr CryptoGoose', 16)
const secondHuman = new Human('mr BigDuck', 18)
const firstAuto = new Auto('Chrysler', '200s', 2009, 'HH2281488')
const secondAuto = new Auto('Mazda', '323f ba', 1997, 'HH1488228')

firstAuto.addOwner(firstHuman).aboutCar()
secondAuto.addOwner(secondHuman).aboutCar()
