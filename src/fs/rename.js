import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    let a = 0;
    try {
        await fs.access(path.join(__dirname, "files", "wrongFilename.txt"));
        a = a + 1;
    } catch (err) {
        a = 0;
    }
    if (a == 1) {
        try {
            await fs.access(path.join(__dirname, "files", "properFilename.md"));
            a = a - 1;
        }
        catch (err) { a = a + 1 }
    }
    try { if (a == 2) { await fs.rename(path.join(__dirname, "files", "wrongFilename.txt"), path.join(__dirname, "files", "properFilename.md")) } }
    catch (error) { console.log('FS operation failed') }
    if ((a == 0) || (a == 1)) { throw new Error('FS operation failed') }



};

await rename();