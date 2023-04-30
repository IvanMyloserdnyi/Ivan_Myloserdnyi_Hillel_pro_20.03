const da = document.querySelector('.da')
const button = document.querySelector('.net')
/*const button = document.querySelector('#228')*/ //AAAAAA ГОРИТЬ
button.addEventListener('click', test)

function test() {
    const minNum = Math.ceil(1);
    const maxNum = Math.floor(9);
    const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    da.innerHTML = `<img src="./images/${random}.jpg"/>`

    const whoIs = document.querySelector('.who_is')
    switch (true) {
        case random === 1: {
            whoIs.innerHTML = 'Чоткий криптогусь!'
            break
        }
        case random === 2: {
            whoIs.innerHTML = 'Той,хто Завжди навалєний кєнт'
            break
        }
        case random === 3: {
            whoIs.innerHTML = 'Жираф'
            break
        }
        case random === 4: {
            whoIs.innerHTML = 'Той хто Завжди на понтах!'
            break
        }
        case random === 5: {
            whoIs.innerHTML = 'Той хто Порєшає твої вопросікі!'
            break
        }
        case random === 6: {
            whoIs.innerHTML = 'Банда корефанчиків'
            break
        }
        case random === 7: {
            whoIs.innerHTML = 'ТОй хто Самий розумний в компанії'
            break
        }
        case random === 8: {
            whoIs.innerHTML = 'Чупакабра'
            break
        }
        case random === 9: {
            whoIs.innerHTML = 'Той через кого вам наваляють'
            break
        }
        default: {
            console.log('help')
        }
    }

}
