const http = require("http");

const server = http.createServer((req, res) => {
  console.log("test server ");
  console.log(req.url);
  if (req.url == "/wiki/Main_Page") {
    res.end("Ova e wiki main page");
  } else if (req.url == "/about") {
    res.end(
      "<html><head><title>About</title></head><body><h1>Ova e about strana</h1></body></html>"
    );
  } else {
    res.end("zdravo od severot");
  }
});

console.log("server is started...");
server.listen(8080);
