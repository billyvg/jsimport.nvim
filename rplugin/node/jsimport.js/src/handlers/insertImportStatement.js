import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line

import {
  MENU_STR,
} from '../constants';
import logger from '../logger';
import getImportPath from '../getImportPath';
import getImportString from '../getImportString';
import db from '../ExportsList';

const insertImportStatement = async function(nvim, [filename]) {
  const {
    word,
    menu,
  } = await nvim.getVvar('completed_item') || {};
  let context;

  if (word && menu.indexOf(MENU_STR) > -1) {
    logger.debug(`insertImport: ${filename} ${word}`);

    try {
      context = await db.getWord(word);
    } catch(err) {
      logger.error(`Error retrieving "${word}" from database`, { nvim, err });
    }

    if (context) {
      // We have the file and import, check current file's imports and import if not found
      // Also make sure target import file isn't current buffer
      if (context && context.file && filename !== context.file) {
        const importPath = getImportPath(filename, context.file);
        const buffer = await nvim.getCurrentBuffer();

        if (buffer) {
          let template = getImportString(nvim, { buffer, word, importPath, context });

          if (template) {
            try {
              buffer.insert(0, template);
            } catch (err) {
              logger.error('Error inserting line into buffer', { nvim, err });
            }
          }
        }
      }
    } else {
      logger.debug(`Word not found in db: ${word}`, { nvim });
    }
  }
};

export default insertImportStatement;
