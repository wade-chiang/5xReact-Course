import fs from 'fs';
import path from 'path';

const componentNames = fs.readdirSync(path.resolve('src/components'));

export const componentExists = (comp) => componentNames.indexOf(comp) > 0;
