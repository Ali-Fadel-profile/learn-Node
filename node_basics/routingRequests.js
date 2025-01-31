// Routing requests
const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>send massage</title></head>");
        res.write("<body><form action='message' type='post'><input name='userName' type='text' /> <button type='submit'>send</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>test Server responds</title></head>");
    res.write("<body><h1>Hello from my server side application</h1></body>");
    res.write("</html>");
    res.end();

})

server.listen(3000);

