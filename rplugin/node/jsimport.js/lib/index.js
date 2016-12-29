'use strict';

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _insertImportStatement = require('./insertImportStatement');

var _insertImportStatement2 = _interopRequireDefault(_insertImportStatement);

var _tracking = require('./tracking');

var _tracking2 = _interopRequireDefault(_tracking);

var _cacheExports = require('./cacheExports');

var _cacheExports2 = _interopRequireDefault(_cacheExports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

plugin.functionSync('_jsimport_load', function (nvim, args, done) {
  nvim.setVar('jsimport#_channel_id', nvim._channel_id, done);
  (0, _tracking2.default)(nvim);
});

// nvim.getVar('deoplete#_context', (err, res) => {
// debug(JSON.stringify(res));
// });
// eslint-disable-line
plugin.function('_jsimport_cache', _cacheExports2.default);
plugin.function('_jsimport_complete_done', _insertImportStatement2.default);
//# sourceMappingURL=index.js.map