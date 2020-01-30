const fs = require('fs');
const path = require('path');

// fs = File System

fs.mkdir(path.join(__dirname, 'notes'), (err) => {
    if (err) throw new Error(err);

    console.log('Folder make done');
})