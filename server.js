const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/dist/my-first-app'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/MY_APP_NAME_HERE/index.html'));
});

app.listen(port);

console.log('app is running in port '+port);
