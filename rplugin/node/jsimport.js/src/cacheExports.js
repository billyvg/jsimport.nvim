import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import fs from 'mz/fs';

import {
  CACHE_FILENAME,
} from './constants';
import logger from './logger';
import gatherExports from './gatherExports';
import parseExports from './parseExports.js';

const cacheExports = async (nvim) => {
  try {
    const start = +new Date();
    const results = await gatherExports('.', '');
    logger.log(`Parsing and caching ${results && results.length || 0} files (this may take some time...)`, { nvim });

    if (results && results.length) {
      const parsedResults = await parseExports(results);
      if (parsedResults) {
        fs.writeFile(CACHE_FILENAME, JSON.stringify(parsedResults), 'utf8');
        const benchmark = (+new Date() - start) / 1000;
        logger.bench(
          `Parsed and cached ${Object.keys(parsedResults).length} exports from ${results.length} files`,
          { nvim, benchmark }
        );
      }
    }
  } catch (err) {
    logger.error('Error gathering javascript exports', { err, nvim });
  }
};

export default cacheExports;
