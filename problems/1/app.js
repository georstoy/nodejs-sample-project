const http = require('http');

const users = [
    {
        'name': "Stoyan"
    },
    {
        'name': "Paraskeva"
    }
];

const server = http.createServer((req, res) => {
    const { method, url } = req;
    
    if (method == 'POST') {
        console.log('Accepted a POST request.');

        // req is a stream
        // so I must get values here,
        // before using them in the routing
        // to avoid assigning undefined
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
          }).on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // at this point, `bodyStr` has the entire request body stored in it as a string

            if (url === '/create-user') {
                const username = parsedBody.split('=')[1];

                console.log(`[new user] ${username}`);
                users.push({ 'name': username })
                
                res.writeHead(302, {'Location': '/users'});
                res.end();
            }
          });
    }
        

    //const username = req.;

    if (url === '/') {
        res.write('<h1>Welcome to the http server</h1><br>');
        res.write('<a href=./users>Check some users</a><br>');
        res.write('<form action=./create-user method=post>');
        res.write('<input type=text name=username><br>');
        res.write('<button type=submit>Create new user</button>')
        res.write('</form>');
        return res.end();
    }

    if (url === '/users') {
        users.forEach((user) => {
            res.write(`<h1>${user.name}</h1><br>`);
        })
        res.write('<br><a href=/ >Go back home</a>');
        return res.end();
    }

});

server.listen(3000, 'localhost');