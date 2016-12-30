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

  return `${relativePath ? relativePath : './'}/${name}`;
}

