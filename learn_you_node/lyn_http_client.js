require('http').get('http://www.yahoo.com', (res) => {
    res.setEncoding('utf8');
    res.on('data', function (body) {
        console.log(body);
        res.on('error', console.error);
    });
});