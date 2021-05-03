let http = require("http");
let fs = require("fs");

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    switch(req.url){
        case "/contacto":
            readFile("./contact.html", res);
            break;
        case "/":
            readFile("./index.html", res);
            break;
        case "/nosotros":
            readFile("./about.html", res);
            break;
        case "/proyectos":
            readFile("./projects.html", res);
            break;
        case "/favicon.ico":
            res.setHeader("Content-Type", "image/x-icon");
            readFile("./favicon.ico", res);
            break;
        default:
            res.statusCode = 404;
            readFile("./404.html", res);
            break;
    }
}).listen(8080);
               
const readFile = (path, res) => {
    fs.readFile(path, (error, content) => {
        if(!error){
            res.write(content);
            res.end();
        }
    })
}