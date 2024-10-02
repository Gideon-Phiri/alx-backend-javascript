const fs = require('fs').promises;

async function readDatabase(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.trim().split('\n').slice(1);
        const fields = {};

        lines.forEach(line => {
            if (line) {
                const [firstname, , , field] = line.split(',');
                if (!fields[field]) fields[field] = [];
                fields[field].push(firstname);
            }
        });

        return fields;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = readDatabase;
