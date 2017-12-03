const url = require('url');
const fs  = require('fs');

function renderHtml(path, response) {
    fs.readFile(path, null, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data); // data - данные из файла
        }
        response.end();
    });
}

module.exports = {
    handleRequest: function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});

        let path = url.parse(request.url).pathname;

        switch(path) {
            case '/':
                renderHtml('./index.html', response);
                break;
            case '/login':
                renderHtml('./login.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
}