const buyBtn = document.querySelector('.buy')
const form = document.querySelector(".form")
buyBtn.addEventListener('click', () => {
    form.style.visibility = 'visible'
})

form.addEventListener('submit',
    (e) => {
        const data = Object.fromEntries(new FormData(e.target).entries());
        const values = Object.values(data)
        const keys = Object.keys(data)
        for (let i = 0; i < values.length; i++) {
            if (values[i].length === 0) {
                document.write('Incorrect Form!')
                return
            }
        }
        document.write('About order:<br>')
        for (let i = 0; i < values.length; i++) {
            document.write(`${keys[i]}: ${values[i]} <br>`)
        }

    })
