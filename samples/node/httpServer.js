const http = require('http');

const server = http.createServer((req,res) => {
    // output important request parameters
    console.log(req.url, req.method, req.headers);

    // output request body
    const body = [];
        // using an event listener
    req.on('data', (dataChunk) => {
        console.log(`[request chunk] ${dataChunk}`);
        body.push(dataChunk);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(`[parsed request body] ${parsedBody}`)
    });

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>');
    res.write('This http server runs on Node');
    res.write('</h1>');
    res.end(); // send the response

    setTimeout(() => {
        // hard exit the event loop = shut down the server
        // and since the server is the only listener registered in the event loop the script run is finished
        process.exit();
    }, 1000);
        
});


// start listening ( enter the event loop )
// the script does not finish
// but server keeps on listening
server.listen(3000, 'localhost'); //default values