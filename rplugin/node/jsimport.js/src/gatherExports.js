import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import fs from 'mz/fs';
import path from 'path';

// TODO respect configuration + gitignore
const DEFAULT_IGNORE = [
  'node_modules',
  '.git',
  '.config',
  '.meteor',
  'lib',
];

export const getFiles = async (directory, pattern, options = {}) => {
  const {
    ignoreDirs,
  } = options;

  const files = await fs.readdir(path.resolve(directory));
  let filesInDir = await Promise.all(files.map(async (f) => {
    const file = path.resolve(await directory, f);
    const stat = await fs.stat(file);
    if (stat.isDirectory()) {
      if (!ignoreDirs.find((ignorePattern) => f.search(ignorePattern) !== -1)) {
        return getFiles(file, pattern, options);
      }
    } else if (file.search(pattern) > -1) {
      return file;
    }
  }));

  // Filter out empty arrays, and no matched files
  filesInDir = filesInDir.filter((f) => f && (typeof f === 'string' || f.length));

  // Flatten
  return filesInDir.reduce((memo, val) => {
    if (val && val.length) {
      return memo.concat(val);
    }

    return memo;
  }, []);

};

const gatherExports = async (directory, pattern, options = {}) => {
  const ignoreDirs = DEFAULT_IGNORE || options.ignoreDirs;

  return getFiles(directory, /\.js(x|)$/, { ignoreDirs });
};

export default gatherExports;
