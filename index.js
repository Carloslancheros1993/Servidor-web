let http = require("http");
let fs = require("fs");
let path = require("path");
let mime = require("mime");

http.createServer((req, res) => {
    switch(req.url){
        case "/contacto":
            readFile("/contact.html", res);
            break;
        case "/":
            readFile("/index.html", res);
            break;
        case "/nosotros":
            readFile("/about.html", res);
            break;
        case "/proyectos":
            readFile("/projects.html", res);
            break;
        case "/favicon.ico":
            res.setHeader("Content-Type", "image/x-icon");
            readFile("/favicon.ico", res);
            break;
        default:
            readFile(req.url, res);
            break;
    }
}).listen(8080);
               
const readFile = (url, res) => {
    let urlF = __dirname + url;
    //__dirname ruta absoluta
    fs.readFile( urlF, (error, content) => {
        if(!error){
            res.setHeader("Content-Type", mime.getType(urlF));
            res.end(content);
        }else{
            res.writeHead(404);
            res.end("<h1>404</h1>")
        }
    });
}
