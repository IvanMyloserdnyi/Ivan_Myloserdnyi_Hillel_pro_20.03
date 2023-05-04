const vote = document.querySelector('.vote')

vote.style.display = 'flex'
vote.style.flexDirection = 'row'
vote.style.textAlign = 'center'
vote.style.gap = '10px'

const smiles = ["&#128578", "&#128539", "&#129303", "&#129296", "&#128580"]
const counts = new Array(smiles.length).fill(0)
for (let i = 0; i < smiles.length; i++) {
    const smile = document.createElement('div')
    smile.innerHTML = smiles[i]
    const count = document.createElement('div')
    count.textContent = counts[i]
    smile.appendChild(count)
    vote.appendChild(smile)

    smile.addEventListener('click', () => {
        counts[i]++
        count.textContent = counts[i]
    })
}

/*vote.addEventListener('click',(evt) =>{
 console.log(evt.target)
})*/
