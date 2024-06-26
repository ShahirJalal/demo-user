const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/demo-user'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/demo-user/index.html'));
});

app.listen(process.env.PORT || 8080);