let body = document.body
let div = document.getElementById('div')

function printNumbers(from, to) {
    let i = from;
    setTimeout(function go() {
        body.appendChild(document.createElement('div')).innerHTML = `${i}`;
        if (i < to) {
            setTimeout(go, 50);
        }
        i++;
    }, 0);
}

printNumbers(1, 100)

/*for (let i = 1; i <= 100;i++ ) {

        body.appendChild(document.createElement('div')).innerHTML=`${i}`

}*/