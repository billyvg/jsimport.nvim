import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import fs from 'mz/fs';

import {
  CACHE_FILENAME,
  MENU_STR,
} from './constants';
import logger from './logger';
import getImportPath from './getImportPath';

let MAP;

export function getTemplate(nvim, { /*buffer, */word, importPath, context }) {
  if (context.type === 'named') {
    return ['import {', `\t${word},`, `} from '${importPath}';`];
  }

  // default import
  return [`import ${word} from '${importPath}';`];
}

const insertImportStatement = async function(nvim, [filename]) {
  const {
    word,
    menu,
  } = await nvim.getVvar('completed_item') || {};
  let parsedResults;
  let results;

  if (word && menu.indexOf(MENU_STR) > -1) {
    logger.debug(`insertImport: ${filename} ${word}`);

    try {
      if (MAP) {
        parsedResults = MAP;
        logger.debug('Using cached results');
      } else {
        results = await fs.readFile(CACHE_FILENAME, 'utf8');
        MAP = parsedResults = JSON.parse(results);
        logger.debug('Loading cached results from fs');
      }
    } catch(err) {
      logger.error('Error parsing cache', { nvim, err });
    }

    if (parsedResults && parsedResults[word]) {
      let context = parsedResults[word];
      // We have the file and import, check current file's imports and import if not found
      // Also make sure target import file isn't current buffer
      if (context && context.file && filename !== context.file) {
        const importPath = getImportPath(filename, context.file);
        const buffer = await nvim.getCurrentBuffer();

        if (buffer) {
          let template = getTemplate(nvim, { buffer, word, importPath, context });

          if (template) {
            try {
              buffer.insert(0, template);
            } catch (err) {
              logger.error('Error inserting line into buffer', { nvim, err });
            }
          }
        }
      }
    }
  }
};

export default insertImportStatement;
