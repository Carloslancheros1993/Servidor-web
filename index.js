let http = require("http");
let fs = require("fs");

http.createServer((req, res) => {
        if(req.url === "/contacto") {
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            fs.readFile("./contact.html", (error, content) => {
                if(!error){
                    res.write(content);
                    res.end();
                }else{
                    res.write("<h1>404</h1>");
                    res.end();
                }
            });
        } else if (req.url === "/"){
            res.write("<h1>página de inicio</h1>");
            res.end();
        } else if (req.url === "/usuarios") {
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            let users = [{
                nombre: "Javier",
                email: "javier09@gmail.com"
            }]
            res.write(JSON.stringify(users));
            res.end();
        }
        else{
            res.write("<h1>404</h1>");
            res.end();
        }
}).listen(8080);