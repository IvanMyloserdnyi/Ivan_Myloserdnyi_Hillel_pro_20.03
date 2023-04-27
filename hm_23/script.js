class Hamburger {
    constructor() {
        this.order = 'Hamburger'
        this.price = 0
        this.cal = 0
    }

    addSmall() {
        this.order += ',Small Size'
        this.price += 50
        this.cal += 20
        return this
    }

    addBig() {
        this.order += ',Big Size'
        this.price += 100
        this.cal += 40
        return this
    }

    addCheese() {
        this.order += ' with Cheese'
        this.price += 10
        this.cal += 20
        return this
    }

    addSalade() {
        this.order += ' with Salade'
        this.price += 20
        this.cal += 5
        return this
    }

    addPotato() {
        this.order += ' with Potato'
        this.price += 15
        this.cal += 10
        return this
    }

    addSpices() {
        this.order += ' with Spices'
        this.price += 15
        this.cal += 0
        return this
    }

    addMayonnaise() {
        this.order += ' with Mayonnaise'
        this.price += 20
        this.cal += 5
        return this
    }

    aboutOrder() {
        console.log(`HI BRO!Nice to meet you!!
        Your order is ${this.order}. 
        It costs ${this.price} dollars! 
        This hamburger has a ${this.cal} cal`)
        return this
    }
}

const a = new Hamburger()
const b = new Hamburger()
a.addSmall().addCheese().addSpices().addSalade().aboutOrder()
b.addBig().addSalade().addPotato().addCheese().aboutOrder()