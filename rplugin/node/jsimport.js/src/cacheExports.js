import path from 'path';

import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import fs from 'mz/fs';

import {
  CACHE_FILENAME,
} from './constants';
import logger from './logger';
import gatherExports from './gatherExports';
import parseExports from './parseExports';

const cacheExports = async (nvim) => {
  try {
    const start = +new Date();
    logger.log(`Starting gather of exports in the directory (${path.resolve('.')})`, { nvim });
    const results = await gatherExports('.');
    logger.log(`Parsing and caching ${results && results.length || 0} files (this may take some time...)`, { nvim });

    if (results && results.length) {
      const parsedResults = await parseExports(results, nvim);
      if (parsedResults) {
        // We need to write to a file so that python can read it
        fs
          .writeFile(CACHE_FILENAME, JSON.stringify(parsedResults), 'utf8')
          .catch((err) => logger.error('Error writing to cache', { err }));

        const benchmark = (+new Date() - start) / 1000;
        logger.bench(
          `Parsed and cached ${Object.keys(parsedResults).length} exports from ${results.length} files`,
          { nvim, benchmark }
        );

        return parsedResults;
      }
    }
  } catch (err) {
    debug(err);
    logger.error('Error gathering javascript exports', { err, nvim });
  }
};

export default cacheExports;
