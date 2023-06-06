const http = require('http');

const fs = require('fs');

const createOffers = new Array(25).fill(null).map((_, i) => ({
    id: i + ' Oh my!',
    title: `mother of good`,
    coordinate: [randomNum(), randomNum()]
}))
const createPhotos = new Array(10).fill(null).map((_, i) => ({
    id: i,
    title: `Photo ${i}`,
    url: `https://picsum.photos/id/${i}/200/300`
}))

fs.writeFileSync('offers.txt', JSON.stringify(createOffers));

http.createServer(function (req, res) {
    console.log(req)
    res.writeHead(200, {'Content-Type': 'application/json'});

    const url = req.url;
    const method = req.method
    if (method === 'GET') {
        if (url === '/offers') {
            const data = fs.readFileSync('offers.txt', 'utf8')
            res.write(data);
            res.end();
        } else if (url === '/photos') {
            res.write(JSON.stringify(createPhotos));
            res.end();
        } else {
            res.write('HELP HELP HELP');
            res.end();
        }
    } else if (method === 'POST') {
        if (url === '/offers') {
            console.log('2' + req.body)
            const obg = {
                id: '228',
                title: `1488`,
                coordinate: [randomNum(), randomNum()]
            };
            createOffers.push(obg);
            fs.writeFileSync('offers.txt', JSON.stringify(createOffers));
            const data = fs.readFileSync('offers.txt', 'utf8')
            res.write(data);
            res.end();
        } else {
            res.write('not find');
            res.end();
        }
    }
}).listen(4001, function () {
    console.log('Server start at port 4001')
})

function randomNum() {
    const maxNum = 37.5;
    const minNum = 36;
    const symbolsAfterPoint = 4;
    return (Math.random() * (maxNum - minNum) + minNum).toFixed(symbolsAfterPoint)
}

