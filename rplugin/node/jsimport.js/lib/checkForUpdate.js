'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkForUpdates;

var _updateNotifier = require('update-notifier');

var _updateNotifier2 = _interopRequireDefault(_updateNotifier);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _constants = require('./constants');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkForUpdates(nvim) {
  var notifier = (0, _updateNotifier2.default)({
    pkg: _package2.default,
    updateCheckInterval: _constants.UPDATE_INTERVAL
  });

  if (notifier && notifier.update) {
    if (nvim) {
      var updateMsg = 'Update available ' + notifier.update.current + ' \u2192 ' + notifier.update.latest;
      (0, _util.echomsg)(nvim, updateMsg);
      (0, _util.echo)(nvim, ['echon \' Update available \'', 'echohl Comment', 'echon \'' + notifier.update.current + '\'', 'echohl None', 'echon \' → \'', 'echohl Keyword', 'echon \'' + notifier.update.latest + '\'', 'echohl None']);
    }

    return notifier.update;
  }

  return null;
}
//# sourceMappingURL=checkForUpdate.js.map