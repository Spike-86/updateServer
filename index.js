const express = require('express');
const app = express();
const favicon = require('serve-favicon');

/*Добавляем favicon*/
app.use(favicon(__dirname + '/Alutech_GS.ico'));

/*Указываем серверу какие файлы можно увидеть*/
app.use(express.static(__dirname + '/'));

/*Стартовая страница*/
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});