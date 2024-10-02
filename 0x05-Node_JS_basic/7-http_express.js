const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    try {
        const data = await fs.readFile('database.csv', 'utf8');
        const lines = data.trim().split('\n').slice(1);
        const fields = {};

        lines.forEach(line => {
            if (line) {
                const [firstname, , , field] = line.split(',');
                if (!fields[field]) fields[field] = [];
                fields[field].push(firstname);
            }
        });

        let response = 'This is the list of our students\n';
        response += `Number of students: ${lines.length}\n`;
        for (const field in fields) {
            response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
        res.send(response);
    } catch (error) {
        res.status(500).send('Cannot load the database');
    }
});

app.listen(1245);

module.exports = app;
