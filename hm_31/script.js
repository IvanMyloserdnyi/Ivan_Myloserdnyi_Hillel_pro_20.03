const form = document.querySelector(".form")

form.addEventListener('submit',
    (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target).entries());
        form.style.display = 'none'
        let table = document.querySelector('#table');
        const values = Object.values(data)
        const keys = Object.keys(data)
        for (let i = 0; i < values.length; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 2; j++) {
                if (j === 0) {
                    let td = document.createElement('td');
                    tr.appendChild(td).textContent = `${keys[i]}`;
                } else {
                    let td = document.createElement('td');
                    if (values[i].length === 0) {
                        tr.appendChild(td).textContent = '---';
                    } else {
                        tr.appendChild(td).textContent = `${values[i]}`;
                    }
                }

            }
            table.appendChild(tr);
        }
    })


