import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const copy = async () => {
    try {
        await fs.cp(path.join(__dirname, "files"), path.join(__dirname, "files_copy"), { recursive: true })

    } catch (error) {
        throw new Error('FS operation failed')

    }
};
//  { errorOnExist: true, force: false }
copy();