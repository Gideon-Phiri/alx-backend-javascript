// lint.js file to automate npm run lint cmd
const { spawn } = require('child_process');

const args = process.argv.slice(2);

const lintProcess = spawn('npm', ['run', 'lint', ...args]);

lintProcess.stdout.pipe(process.stdout);
lintProcess.stderr.pipe(process.stderr);
