const http = require('http');
const { promisify } = require('util');
const fs = require('fs');
const readFile = promisify(fs.readFile);

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello Holberton School!\n');
        res.end();
    } else if (req.url === '/students') {
        try {
            const data = await readFile('database.csv', 'utf8');
            const lines = data.trim().split('\n').slice(1);
            const fields = {};

            lines.forEach(line => {
                if (line) {
                    const [firstname, , , field] = line.split(',');
                    if (!fields[field]) fields[field] = [];
                    fields[field].push(firstname);
                }
            });

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('This is the list of our students\n');
            res.write(`Number of students: ${lines.length}\n`);
            for (const field in fields) {
                res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
            }
            res.end();
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Cannot load the database\n');
            res.end();
        }
    }
});

app.listen(1245);

module.exports = app;
