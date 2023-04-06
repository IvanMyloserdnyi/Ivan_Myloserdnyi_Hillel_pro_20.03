const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(25,characters);
function generateKey(quantity, characters) {
    let result = ''
    for (let i = 0;i <quantity;i++) {
       result += characters[Math.floor(Math.random()*characters.length)]
    }
    return result
}
console.log(key);
// Result nm8xtlhfx4m2ll1tsebcuq4uy
