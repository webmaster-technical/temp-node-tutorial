const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the homepage')
    }
    if(req.url === '/about'){
        res.end('Welome to the about page')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>This page does not exist</p>
        <a href="/">Go back Home</a>
        `
    )
})

server.listen(5000)

