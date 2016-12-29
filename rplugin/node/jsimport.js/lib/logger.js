'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.captureError = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _raven = require('raven');

var _raven2 = _interopRequireDefault(_raven);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var breadcrumbContext = function breadcrumbContext(_ref) {
  var message = _ref.message,
      category = _ref.category,
      options = _objectWithoutProperties(_ref, ['message', 'category']);

  _raven2.default.captureBreadcrumb({
    message: message,
    category: category || 'logging',
    data: options
  });
};

var _log = function _log(level, message) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      nvim = _ref2.nvim,
      err = _ref2.err,
      options = _objectWithoutProperties(_ref2, ['nvim', 'err']);

  debug(message);

  breadcrumbContext(_extends({}, options, {
    message: message,
    level: level
  }));

  if (nvim) {
    if (level === 'error') {
      (0, _util.error)(nvim, message + ': ' + err);
    } else if (level === 'warning') {
      (0, _util.warn)(nvim, message);
    } else {
      (0, _util.echomsg)(nvim, message);
    }
  }

  if (err) {
    _raven2.default.captureException(err);
  }
};

var logger = {
  bench: function bench(_message, _ref3) {
    var benchmark = _ref3.benchmark,
        nvim = _ref3.nvim,
        options = _objectWithoutProperties(_ref3, ['benchmark', 'nvim']);

    var message = _message + ' [' + benchmark + 's]';
    breadcrumbContext(_extends({}, options, {
      message: message,
      category: 'perf',
      level: 'debug'
    }));

    (0, _util.echomsg)(nvim, message);
  },


  log: _log.bind(undefined, 'info'),
  debug: _log.bind(undefined, 'debug'),
  error: _log.bind(undefined, 'error'),
  warn: _log.bind(undefined, 'warning')
};

exports.default = logger;
var captureError = exports.captureError = _raven2.default.captureException;
//# sourceMappingURL=logger.js.map