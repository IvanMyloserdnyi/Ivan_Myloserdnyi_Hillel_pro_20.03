const buy = document.querySelector('.buy')
const form = document.querySelector(".form")
buy.addEventListener('click', () => {
    form.style.visibility = 'visible'
})

form.addEventListener('submit',
    (e) => {
        const data = Object.fromEntries(new FormData(e.target).entries());
        const values = Object.values(data)
        const keys = Object.keys(data)
        let a = 0
        for (let i = 0; i < values.length; i++) {
            if (values[i].length === 0) {
                a += 1
                break
            }
        }
        if (a === 1) {
            document.write('Incorrect Form!')
        } else {
            document.write('About order:<br>')
            for (let i = 0; i < values.length; i++) {
                document.write(`${keys[i]}: ${values[i]} <br>`)
            }
        }
        console.log(data)

    })

/*            for (const [key, value] of Object.fromEntries(new FormData(e.target).entries()) {
                document.write(`${key} ${value}`)
            }*/