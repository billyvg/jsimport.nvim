'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.error = error;
exports.echo = echo;
exports.echomsg = echomsg;
exports.echoboth = echoboth;

var _constants = require('./constants');

function warn(nvim, message) {
  nvim.callFunction('jsimport#util#print_warning', [message]);
}

function error(nvim, message) {
  nvim.callFunction('jsimport#util#print_error', [message]);
}

function echo(nvim, message) {
  nvim.command('echo \'[' + _constants.APP_NAME + '] ' + message + '\'');
}

function echomsg(nvim, message) {
  var combinedMessage = message;
  if (typeof message !== 'string' && message.length) {
    combinedMessage = message.join('|');
  }
  nvim.command('echomsg\'[' + _constants.APP_NAME + '] ' + combinedMessage + '\'');
}

function echoboth(nvim, message) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var specialMessage = options.special;
  echo(nvim, specialMessage || message);
  echomsg(nvim, message);
}
//# sourceMappingURL=util.js.map