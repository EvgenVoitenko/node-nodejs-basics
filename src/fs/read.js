
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        let A = await fs.readFile(path.join(__dirname, "files", "fileToReAD.TXT"), { encoding: 'utf8' })
        console.log(A)
    } catch (error) {
        throw new Error('FS operation failed')

    }
    // Write your code here
};

await read();


