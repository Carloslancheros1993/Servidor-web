let http = require("http");
let fs = require("fs");
let path = require("path");

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
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
            setContentType(path.extname(urlF), res);
            //res.setHeader("Content-Type", "text/css");
            res.end(content);
        }else{
            //response.statusCode = 404;
            res.writeHead(404);
            res.end("<h1>404</h1>")
        }
    });
}

//cambiar cabecera dependiendo del tipo
const setContentType = (ext, res) => {
    if (ext == ".css"){
        res.setHeader("Content-Type", "text/css");
    }else if(ext === ".html"){
        res.setHeader("Content-Type", "text/html");
    }
}