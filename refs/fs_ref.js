const fs = require('fs');
const path = require('path');

// fs = File System

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw new Error(err);

//     console.log('Folder make done');
// });


// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello word',
//     (err) => {
//         if (err) throw err;

//         console.log('File create');
//     }
// );


// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello word',
//     (err) => {
//         if (err) throw err;
//         console.log('File create');

//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' Fron append File',
//             err => {
//                 if (err) throw err;
//                 console.log('File make change');
//             }
//         )
//     }
// );

// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         // console.log(Buffer.from(data).toString());
//         console.log(data);
//     }
// );

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'Notes.txt'),
    err => {
        if (err) throw err;
        console.log('File rename');
    }
);