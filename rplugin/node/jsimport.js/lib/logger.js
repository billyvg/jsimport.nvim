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
      level = _ref.level,
      options = _objectWithoutProperties(_ref, ['message', 'category', 'level']);

  _raven2.default.captureBreadcrumb({
    message: message,
    category: category || 'logging',
    level: level,
    data: options
  });
};

var _log = function _log(level, message) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      nvim = _ref2.nvim,
      err = _ref2.err,
      options = _objectWithoutProperties(_ref2, ['nvim', 'err']);

  debug('' + message + (err ? ': ' + err : ''));

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

    debug(message);

    if (nvim) {
      (0, _util.echomsg)(nvim, message);
    }
  },


  log: _log.bind(undefined, 'info'),
  debug: _log.bind(undefined, 'debug'),
  error: _log.bind(undefined, 'error'),
  warn: _log.bind(undefined, 'warning')
};

exports.default = logger;
var captureError = exports.captureError = _raven2.default.captureException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuanMiXSwibmFtZXMiOlsiYnJlYWRjcnVtYkNvbnRleHQiLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJsZXZlbCIsIm9wdGlvbnMiLCJjYXB0dXJlQnJlYWRjcnVtYiIsImRhdGEiLCJfbG9nIiwibnZpbSIsImVyciIsImRlYnVnIiwiY2FwdHVyZUV4Y2VwdGlvbiIsImxvZ2dlciIsImJlbmNoIiwiX21lc3NhZ2UiLCJiZW5jaG1hcmsiLCJsb2ciLCJiaW5kIiwiZXJyb3IiLCJ3YXJuIiwiY2FwdHVyZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUE4QztBQUFBLE1BQTNDQyxPQUEyQyxRQUEzQ0EsT0FBMkM7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLE1BQWRDLE9BQWM7O0FBQ3RFLGtCQUFNQyxpQkFBTixDQUF3QjtBQUN0Qkosb0JBRHNCO0FBRXRCQyxjQUFVQSxZQUFZLFNBRkE7QUFHdEJDLGdCQUhzQjtBQUl0QkcsVUFBTUY7QUFKZ0IsR0FBeEI7QUFNRCxDQVBEOztBQVNBLElBQU1HLE9BQU8sU0FBUEEsSUFBTyxDQUFDSixLQUFELEVBQVFGLE9BQVIsRUFBb0Q7QUFBQSxrRkFBUCxFQUFPO0FBQUEsTUFBakNPLElBQWlDLFNBQWpDQSxJQUFpQztBQUFBLE1BQTNCQyxHQUEyQixTQUEzQkEsR0FBMkI7QUFBQSxNQUFuQkwsT0FBbUI7O0FBQy9ETSxhQUFTVCxPQUFULElBQW1CUSxhQUFXQSxHQUFYLEdBQWtCLEVBQXJDOztBQUVBVCxpQ0FDS0ksT0FETDtBQUVFSCxvQkFGRjtBQUdFRTtBQUhGOztBQU1BLE1BQUlLLElBQUosRUFBVTtBQUNSLFFBQUlMLFVBQVUsT0FBZCxFQUF1QjtBQUNyQix1QkFBTUssSUFBTixFQUFlUCxPQUFmLFVBQTJCUSxHQUEzQjtBQUNELEtBRkQsTUFFTyxJQUFJTixVQUFVLFNBQWQsRUFBeUI7QUFDOUIsc0JBQUtLLElBQUwsRUFBV1AsT0FBWDtBQUNELEtBRk0sTUFFQTtBQUNMLHlCQUFRTyxJQUFSLEVBQWNQLE9BQWQ7QUFDRDtBQUNGOztBQUVELE1BQUlRLEdBQUosRUFBUztBQUNQLG9CQUFNRSxnQkFBTixDQUF1QkYsR0FBdkI7QUFDRDtBQUNGLENBdEJEOztBQXdCQSxJQUFNRyxTQUFTO0FBQ2JDLE9BRGEsaUJBQ1BDLFFBRE8sU0FDb0M7QUFBQSxRQUEvQkMsU0FBK0IsU0FBL0JBLFNBQStCO0FBQUEsUUFBcEJQLElBQW9CLFNBQXBCQSxJQUFvQjtBQUFBLFFBQVhKLE9BQVc7O0FBQy9DLFFBQU1ILFVBQWFhLFFBQWIsVUFBMEJDLFNBQTFCLE9BQU47QUFDQWYsbUNBQ0tJLE9BREw7QUFFRUgsc0JBRkY7QUFHRUMsZ0JBQVUsTUFIWjtBQUlFQyxhQUFPO0FBSlQ7O0FBT0FPLFVBQU1ULE9BQU47O0FBRUEsUUFBSU8sSUFBSixFQUFVO0FBQ1IseUJBQVFBLElBQVIsRUFBY1AsT0FBZDtBQUNEO0FBQ0YsR0FmWTs7O0FBaUJiZSxPQUFLVCxLQUFLVSxJQUFMLFlBQWdCLE1BQWhCLENBakJRO0FBa0JiUCxTQUFPSCxLQUFLVSxJQUFMLFlBQWdCLE9BQWhCLENBbEJNO0FBbUJiQyxTQUFPWCxLQUFLVSxJQUFMLFlBQWdCLE9BQWhCLENBbkJNO0FBb0JiRSxRQUFNWixLQUFLVSxJQUFMLFlBQWdCLFNBQWhCO0FBcEJPLENBQWY7O2tCQXVCZUwsTTtBQUNSLElBQU1RLHNDQUFlLGdCQUFNVCxnQkFBM0IiLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJhdmVuIGZyb20gJ3JhdmVuJztcblxuaW1wb3J0IHtcbiAgZWNob21zZyxcbiAgd2FybixcbiAgZXJyb3IsXG59IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IGJyZWFkY3J1bWJDb250ZXh0ID0gKHsgbWVzc2FnZSwgY2F0ZWdvcnksIGxldmVsLCAuLi5vcHRpb25zIH0pID0+IHtcbiAgUmF2ZW4uY2FwdHVyZUJyZWFkY3J1bWIoe1xuICAgIG1lc3NhZ2UsXG4gICAgY2F0ZWdvcnk6IGNhdGVnb3J5IHx8ICdsb2dnaW5nJyxcbiAgICBsZXZlbCxcbiAgICBkYXRhOiBvcHRpb25zLFxuICB9KTtcbn07XG5cbmNvbnN0IF9sb2cgPSAobGV2ZWwsIG1lc3NhZ2UsIHsgbnZpbSwgZXJyLCAuLi5vcHRpb25zIH0gPSB7fSkgPT4ge1xuICBkZWJ1ZyhgJHttZXNzYWdlfSR7ZXJyID8gYDogJHtlcnJ9YDogJyd9YCk7XG5cbiAgYnJlYWRjcnVtYkNvbnRleHQoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWVzc2FnZSxcbiAgICBsZXZlbCxcbiAgfSk7XG5cbiAgaWYgKG52aW0pIHtcbiAgICBpZiAobGV2ZWwgPT09ICdlcnJvcicpIHtcbiAgICAgIGVycm9yKG52aW0sIGAke21lc3NhZ2V9OiAke2Vycn1gKTtcbiAgICB9IGVsc2UgaWYgKGxldmVsID09PSAnd2FybmluZycpIHtcbiAgICAgIHdhcm4obnZpbSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVjaG9tc2cobnZpbSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVycikge1xuICAgIFJhdmVuLmNhcHR1cmVFeGNlcHRpb24oZXJyKTtcbiAgfVxufTtcblxuY29uc3QgbG9nZ2VyID0ge1xuICBiZW5jaChfbWVzc2FnZSwgeyBiZW5jaG1hcmssIG52aW0sIC4uLm9wdGlvbnMgfSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHtfbWVzc2FnZX0gWyR7YmVuY2htYXJrfXNdYDtcbiAgICBicmVhZGNydW1iQ29udGV4dCh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGNhdGVnb3J5OiAncGVyZicsXG4gICAgICBsZXZlbDogJ2RlYnVnJyxcbiAgICB9KTtcblxuICAgIGRlYnVnKG1lc3NhZ2UpO1xuXG4gICAgaWYgKG52aW0pIHtcbiAgICAgIGVjaG9tc2cobnZpbSwgbWVzc2FnZSk7XG4gICAgfVxuICB9LFxuXG4gIGxvZzogX2xvZy5iaW5kKHRoaXMsICdpbmZvJyksXG4gIGRlYnVnOiBfbG9nLmJpbmQodGhpcywgJ2RlYnVnJyksXG4gIGVycm9yOiBfbG9nLmJpbmQodGhpcywgJ2Vycm9yJyksXG4gIHdhcm46IF9sb2cuYmluZCh0aGlzLCAnd2FybmluZycpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xuZXhwb3J0IGNvbnN0IGNhcHR1cmVFcnJvciA9IFJhdmVuLmNhcHR1cmVFeGNlcHRpb247XG4iXX0=