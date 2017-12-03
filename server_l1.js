const http = require('http');
const port = 3000;

const fs = require('fs'); // file system - для работы с файлами

// выполняется каждый раз когда идет обращение к серверу
const requestHandler = (request, response) => {
    console.log('>>>', request.url)
    // response.writeHead(200, {'Content-Type': 'text/plain'}); // просто текст
    response.writeHead(200, {'Content-Type': 'text/html'}); // html
    // response.write('Hello Node.js Server!');
    // fs.readFile(path, options, callback);
    fs.readFile('./index.html', null, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data); // data - данные из файла
        }
        response.end();
    });
    // response.end();
}

const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    } else {
        console.log(`server is listening on ${port}`)
    }
})