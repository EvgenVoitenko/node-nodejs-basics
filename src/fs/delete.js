import * as fs from 'node:fs';
import * as path from 'node:path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const remove = async () => {
    await fs.unlink(path.join(__dirname, "files", "fileToRemove.txt"), (err) => { if (err) { throw new Error('FS operation failed') } })
};

await remove();