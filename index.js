const { doesNotMatch } = require("assert");
let http = require("http");
let morgan = require("morgan");

let logger = morgan('dev');//method:url :status : res[content-lenth] - res time


http.createServer((req, res) => {
    logger(req, res, (err) => {
        if (err) return done(err)

        if(req.url === "/contacto") {
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.write("<h1>Pagina de contacto</h1>");
            res.end();
        }else if(req.url === "/"){
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.write("<h1>página de inicio</h1>");
            res.end();
        }else{
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.write("<h1>404</h1>");
            res.end();
        }
    });
}).listen(8080);