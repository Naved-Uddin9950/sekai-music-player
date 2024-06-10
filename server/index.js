import express from 'express';
import path from 'path';
import * as fs from 'fs';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url'; // Importing fileURLToPath function from url module

const app = express();

// .env variables fake
const PORT = 3000;
// .env variables fake ends

app.get('/api/v1/musiclist', async (req, res) => {

    const dirr = path.join('public', 'audio');
    let data = [];

    try {
        const files = await readdir(dirr);
        for (const file of files) {
            let name = path.basename(file);
            let location = path.join(dirr, file);
            location = location.replace('public', 'api/v1');
            location = location.split(path.sep).join('/');
            data.push({
                name : name,
                path : location
            });
        }
    } catch (err) {
        console.error('Files reading error : ', err);
    }

    // console.log(song);
    res.send(data);
})


app.get('/api/v1/audio/:name', (req, res) => {
    const song = req.params.name;
    const permissions = 0o644; // File permissions in octal notation
    const __filename = fileURLToPath(import.meta.url); // Get current file path
    const __dirname = path.dirname(__filename); // Get directory name
    let data = path.join(__dirname, 'public', 'audio', song);
    fs.chmod(data, permissions, (err) => {
        if (err) {
          console.error('Error setting permissions:', err);
        } else {
          console.log('Permissions set successfully.');
        }
      });
    // data = path.resolve(data);

    console.log(data);

    res.sendFile(data);
})


app.listen(PORT, (err) => {
    if (err) console.error('Server errror : ', err);
    else console.log('Server is listening....');
})