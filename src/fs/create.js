import * as fs from 'node:fs/promises';
import * as path from 'node:path';


import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    let a = 0;
    try {
        await fs.access(path.join(__dirname, "files", 'fresh.txt'));


    } catch (err) {
        a = 1;
    }
    if (a == 1) {
        await fs.writeFile((path.join(__dirname, "files", 'fresh.txt')), 'I am fresh and young')
    }
    if (a == 0) { throw new Error('FS operation failed'); }
};

await create();