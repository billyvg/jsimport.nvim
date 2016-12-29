import regeneratorRuntime from 'regenerator-runtime'; // eslint-disable-line
import insertImportStatement from './insertImportStatement';
import initializeTracking from './tracking';
import cacheExports from './cacheExports';

plugin.functionSync('_jsimport_load', (nvim, args, done) => {
  nvim.setVar('jsimport#_channel_id', nvim._channel_id, done);
  initializeTracking(nvim);
});

// nvim.getVar('deoplete#_context', (err, res) => {
// debug(JSON.stringify(res));
// });
plugin.function('_jsimport_cache', cacheExports);
plugin.function('_jsimport_complete_done', insertImportStatement);
