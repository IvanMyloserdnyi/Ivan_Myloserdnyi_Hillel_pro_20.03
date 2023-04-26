class Human {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
}

class Apartment {
    residents = []

    addHuman(Human) {
        this.residents.push(Human)
        return this
    }
    aboutApartment() {
        console.log(this)
    }
}

class Building {
    constructor(maxCountOfApartments) {
        this.apartments = []
        this.maxCountOfApartments = maxCountOfApartments
    }

    addApartment(Apartment) {
        if (this.apartments.length < this.maxCountOfApartments) {
            this.apartments.push(Apartment)
            return this
        }
        console.log('Всі квартири зайняті,виберіть в іншому будинку чи будуйте свій')
        return this
    }

    aboutBuilding() {
        console.log(this)
    }
}

const firstHuman = new Human('mr CryptoGoose', 'male')
const secondHuman = new Human('ms CryptoGoose', 'female')
const thirdHuman = new Human('mr BigDuck', 'male')
const fourthHuman = new Human('ms BigDuck', 'female')
const firstApartment = new Apartment()
const secondApartment = new Apartment()
firstApartment.addHuman(firstHuman).addHuman(secondHuman).aboutApartment()
secondApartment.addHuman(thirdHuman).addHuman(fourthHuman).aboutApartment()
const firstBuilding = new Building(2)
firstBuilding.addApartment(firstApartment).addApartment(secondApartment).aboutBuilding()
