import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import initializeTracking from './tracking';

import insertImportStatement from './handlers/insertImportStatement';
import cacheExports from './handlers/cache';

plugin.functionSync('_jsimport_load', (nvim, args, done) => {
  nvim.setVar('jsimport#_channel_id', nvim._channel_id, done);
  initializeTracking(nvim);
  cacheExports(nvim);
});

// nvim.getVar('deoplete#_context', (err, res) => {
// debug(JSON.stringify(res));
// });
plugin.function('_jsimport_cache', cacheExports);
plugin.function('_jsimport_complete_done', insertImportStatement);
