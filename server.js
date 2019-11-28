const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/dist/my-first-app'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/my-first-app/index.html');
});

app.listen(port);
console.log('app is running in port '+port);