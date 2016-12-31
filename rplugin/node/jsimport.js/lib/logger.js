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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuanMiXSwibmFtZXMiOlsiYnJlYWRjcnVtYkNvbnRleHQiLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJsZXZlbCIsIm9wdGlvbnMiLCJjYXB0dXJlQnJlYWRjcnVtYiIsImRhdGEiLCJfbG9nIiwibnZpbSIsImVyciIsImRlYnVnIiwiY2FwdHVyZUV4Y2VwdGlvbiIsImxvZ2dlciIsImJlbmNoIiwiX21lc3NhZ2UiLCJiZW5jaG1hcmsiLCJsb2ciLCJiaW5kIiwiZXJyb3IiLCJ3YXJuIiwiY2FwdHVyZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUE4QztBQUFBLE1BQTNDQyxPQUEyQyxRQUEzQ0EsT0FBMkM7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLE1BQWRDLE9BQWM7O0FBQ3RFLGtCQUFNQyxpQkFBTixDQUF3QjtBQUN0Qkosb0JBRHNCO0FBRXRCQyxjQUFVQSxZQUFZLFNBRkE7QUFHdEJDLGdCQUhzQjtBQUl0QkcsVUFBTUY7QUFKZ0IsR0FBeEI7QUFNRCxDQVBEOztBQVNBLElBQU1HLE9BQU8sU0FBUEEsSUFBTyxDQUFDSixLQUFELEVBQVFGLE9BQVIsRUFBb0Q7QUFBQSxrRkFBUCxFQUFPO0FBQUEsTUFBakNPLElBQWlDLFNBQWpDQSxJQUFpQztBQUFBLE1BQTNCQyxHQUEyQixTQUEzQkEsR0FBMkI7QUFBQSxNQUFuQkwsT0FBbUI7O0FBQy9ETSxRQUFNVCxPQUFOOztBQUVBRCxpQ0FDS0ksT0FETDtBQUVFSCxvQkFGRjtBQUdFRTtBQUhGOztBQU1BLE1BQUlLLElBQUosRUFBVTtBQUNSLFFBQUlMLFVBQVUsT0FBZCxFQUF1QjtBQUNyQix1QkFBTUssSUFBTixFQUFlUCxPQUFmLFVBQTJCUSxHQUEzQjtBQUNELEtBRkQsTUFFTyxJQUFJTixVQUFVLFNBQWQsRUFBeUI7QUFDOUIsc0JBQUtLLElBQUwsRUFBV1AsT0FBWDtBQUNELEtBRk0sTUFFQTtBQUNMLHlCQUFRTyxJQUFSLEVBQWNQLE9BQWQ7QUFDRDtBQUNGOztBQUVELE1BQUlRLEdBQUosRUFBUztBQUNQLG9CQUFNRSxnQkFBTixDQUF1QkYsR0FBdkI7QUFDRDtBQUNGLENBdEJEOztBQXdCQSxJQUFNRyxTQUFTO0FBQ2JDLE9BRGEsaUJBQ1BDLFFBRE8sU0FDb0M7QUFBQSxRQUEvQkMsU0FBK0IsU0FBL0JBLFNBQStCO0FBQUEsUUFBcEJQLElBQW9CLFNBQXBCQSxJQUFvQjtBQUFBLFFBQVhKLE9BQVc7O0FBQy9DLFFBQU1ILFVBQWFhLFFBQWIsVUFBMEJDLFNBQTFCLE9BQU47QUFDQWYsbUNBQ0tJLE9BREw7QUFFRUgsc0JBRkY7QUFHRUMsZ0JBQVUsTUFIWjtBQUlFQyxhQUFPO0FBSlQ7O0FBT0EsdUJBQVFLLElBQVIsRUFBY1AsT0FBZDtBQUNELEdBWFk7OztBQWFiZSxPQUFLVCxLQUFLVSxJQUFMLFlBQWdCLE1BQWhCLENBYlE7QUFjYlAsU0FBT0gsS0FBS1UsSUFBTCxZQUFnQixPQUFoQixDQWRNO0FBZWJDLFNBQU9YLEtBQUtVLElBQUwsWUFBZ0IsT0FBaEIsQ0FmTTtBQWdCYkUsUUFBTVosS0FBS1UsSUFBTCxZQUFnQixTQUFoQjtBQWhCTyxDQUFmOztrQkFtQmVMLE07QUFDUixJQUFNUSxzQ0FBZSxnQkFBTVQsZ0JBQTNCIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSYXZlbiBmcm9tICdyYXZlbic7XG5cbmltcG9ydCB7XG4gIGVjaG9tc2csXG4gIHdhcm4sXG4gIGVycm9yLFxufSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBicmVhZGNydW1iQ29udGV4dCA9ICh7IG1lc3NhZ2UsIGNhdGVnb3J5LCBsZXZlbCwgLi4ub3B0aW9ucyB9KSA9PiB7XG4gIFJhdmVuLmNhcHR1cmVCcmVhZGNydW1iKHtcbiAgICBtZXNzYWdlLFxuICAgIGNhdGVnb3J5OiBjYXRlZ29yeSB8fCAnbG9nZ2luZycsXG4gICAgbGV2ZWwsXG4gICAgZGF0YTogb3B0aW9ucyxcbiAgfSk7XG59O1xuXG5jb25zdCBfbG9nID0gKGxldmVsLCBtZXNzYWdlLCB7IG52aW0sIGVyciwgLi4ub3B0aW9ucyB9ID0ge30pID0+IHtcbiAgZGVidWcobWVzc2FnZSk7XG5cbiAgYnJlYWRjcnVtYkNvbnRleHQoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWVzc2FnZSxcbiAgICBsZXZlbCxcbiAgfSk7XG5cbiAgaWYgKG52aW0pIHtcbiAgICBpZiAobGV2ZWwgPT09ICdlcnJvcicpIHtcbiAgICAgIGVycm9yKG52aW0sIGAke21lc3NhZ2V9OiAke2Vycn1gKTtcbiAgICB9IGVsc2UgaWYgKGxldmVsID09PSAnd2FybmluZycpIHtcbiAgICAgIHdhcm4obnZpbSwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVjaG9tc2cobnZpbSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVycikge1xuICAgIFJhdmVuLmNhcHR1cmVFeGNlcHRpb24oZXJyKTtcbiAgfVxufTtcblxuY29uc3QgbG9nZ2VyID0ge1xuICBiZW5jaChfbWVzc2FnZSwgeyBiZW5jaG1hcmssIG52aW0sIC4uLm9wdGlvbnMgfSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHtfbWVzc2FnZX0gWyR7YmVuY2htYXJrfXNdYDtcbiAgICBicmVhZGNydW1iQ29udGV4dCh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGNhdGVnb3J5OiAncGVyZicsXG4gICAgICBsZXZlbDogJ2RlYnVnJyxcbiAgICB9KTtcblxuICAgIGVjaG9tc2cobnZpbSwgbWVzc2FnZSk7XG4gIH0sXG5cbiAgbG9nOiBfbG9nLmJpbmQodGhpcywgJ2luZm8nKSxcbiAgZGVidWc6IF9sb2cuYmluZCh0aGlzLCAnZGVidWcnKSxcbiAgZXJyb3I6IF9sb2cuYmluZCh0aGlzLCAnZXJyb3InKSxcbiAgd2FybjogX2xvZy5iaW5kKHRoaXMsICd3YXJuaW5nJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG5leHBvcnQgY29uc3QgY2FwdHVyZUVycm9yID0gUmF2ZW4uY2FwdHVyZUV4Y2VwdGlvbjtcbiJdfQ==