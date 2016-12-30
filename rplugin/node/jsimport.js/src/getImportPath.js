/* @flow */
import path from 'path';

// Retrieves relative path between two files (full path)
export default function getImportPath(from: string, to: string): string {
  // Need to strip filenames and only use directories
  const {
    dir: fromDir,
  } = path.parse(from);

  const {
    dir: toDir,
    name,
  } = path.parse(to);

  const relativePath = path.relative(fromDir, toDir);
  const isParentDir = relativePath && relativePath[0] === '.';
  const sep = path.sep;
  const relativeToCurrentDirString = !isParentDir ? `.${sep}` : '';

  // if string does not begin with a "." then it is in the current directory
  // append './'
  return `${relativeToCurrentDirString}${relativePath ? `${relativePath}${path.sep}` : ''}${name}`;
}

