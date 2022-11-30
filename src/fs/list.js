import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    try {
        let A = await fs.readdir(path.join(__dirname, "files"))
        console.log(A)
    } catch (error) {
        throw new Error('FS operation failed')

    }

};

await list();