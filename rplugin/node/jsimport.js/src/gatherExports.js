import path from 'path';

import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import fs from 'mz/fs';

import {
  DEFAULT_IGNORE,
  DEFAULT_PATTERN,
} from './constants';

export const getFiles = async (directory, { pattern, ignore = [] }) => {
  const files = await fs.readdir(path.resolve(directory));
  let filesInDir = await Promise.all(files.map(async (f) => {
    const file = path.resolve(await directory, f);
    const stat = await fs.stat(file);
    if (!ignore.find((ignorePattern) => file.search(ignorePattern) !== -1)) {
      if (stat.isDirectory()) {
        return getFiles(file, { pattern, ignore });
      } else if (file.search(pattern) > -1) {
        return file;
      }
    }
  }));

  // Filter out empty arrays, and no matched files
  // and then flatten
  return filesInDir
    .filter((f) => f && (typeof f === 'string' || f.length))
    .reduce((memo, val) => memo.concat(val), []);
};

const gatherExports = async (directory, { pattern = DEFAULT_PATTERN, ignore = DEFAULT_IGNORE } = {}) => {
  return getFiles(directory, { pattern, ignore });
};

export default gatherExports;
