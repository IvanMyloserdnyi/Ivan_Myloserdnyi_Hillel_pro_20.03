

let dateOfBirth = prompt("Date of your birth", "1488");
let cityOfLive = prompt("City where you live", "Magadan");
let kindOfSport = prompt("Kind of sport which you join", "Litrball");
const currentAge = 2023-Number(dateOfBirth);
const firstMessage = dateOfBirth === null? "It is a pity that you wasnt entered yours date of birth!":`You ${currentAge} years old!`;

var secondMessage = ""
switch (cityOfLive) {
    case null: {
        secondMessage += "It is a pity that you wasnt entered city where you live!"
        break
    }
    case "Kyiv": {
        secondMessage = "You live in the capital of Ukraine"
        break
    }
    case "Washington": {
        secondMessage = "You live in the capital of USA"
        break
    }
    case "London": {
        secondMessage = "You live in the capital of United Kingdom"
        break
    }
    default: {
        secondMessage = `You live in ${cityOfLive} city!`
    }
}

var thirdMessage = ""
switch (kindOfSport) {
    case null: {
        thirdMessage = "It is a pity that you wasnt entered the kind of sport which you join!"
        break
    }
    case "Box": {
        thirdMessage = "Its cool!Do you want to became a sportsman like a Witaliy Klychko?"
        break
    }
    case "Football": {
        thirdMessage = "Its cool!Do you want to became a sportsman like an Andriy Yarmolenko?"
        break
    }
    case "Litrball": {
        thirdMessage = "It isnt cool!Do you want to became a bastard like a Vladimir Pykin?"
        break
    }
    default : {
        thirdMessage = `The kind of sport which you join is ${kindOfSport}!`
    }
}

alert(`${firstMessage}.${secondMessage}.${thirdMessage}!`)



