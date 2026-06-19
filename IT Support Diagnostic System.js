const tasks = [
    'Checking CPU and RAM usage...',
    'Checking background processes...',
    'Checking disk usage...',
    'Checking startup applications...'
];

function escalate(issue) {
    console.log(`Escalating: ${issue} to Level 2 support`);
}

function troubleshooting(issue) {

    issue = issue.toLowerCase();

    if (issue === 'no internet') {
        console.log('Restarting router...');
        return;
    }

    if (issue === 'slow pc') {

        for (const task of tasks) {
            console.log(task);
        }

        return;
    }

    if (issue === 'printer offline') {
        console.log('Checking WiFi...');
        console.log('Checking printer connection...');
        console.log('Checking paper tray...');
        return;
    }

    if (issue === 'email not syncing') {
        console.log('Checking password...');
        console.log('Checking account settings...');
        console.log('Checking server connection...');
        return;
    }

    if (issue === 'blue screen') {
        console.log('Checking event logs...');
        console.log('Checking hardware drivers...');
        console.log('Checking RAM...');
        return;
    }

    console.log('Issue not recognized');
    escalate(issue);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Describe the issue: ', (problem) => {

    console.log(`\nProblem reported: ${problem}`);
    troubleshooting(problem);

    rl.close();
});
