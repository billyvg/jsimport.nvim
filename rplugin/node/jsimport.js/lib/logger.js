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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2dnZXIuanMiXSwibmFtZXMiOlsiYnJlYWRjcnVtYkNvbnRleHQiLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJvcHRpb25zIiwiY2FwdHVyZUJyZWFkY3J1bWIiLCJkYXRhIiwiX2xvZyIsImxldmVsIiwibnZpbSIsImVyciIsImRlYnVnIiwiY2FwdHVyZUV4Y2VwdGlvbiIsImxvZ2dlciIsImJlbmNoIiwiX21lc3NhZ2UiLCJiZW5jaG1hcmsiLCJsb2ciLCJiaW5kIiwiZXJyb3IiLCJ3YXJuIiwiY2FwdHVyZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7QUFNQSxJQUFNQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixPQUF1QztBQUFBLE1BQXBDQyxPQUFvQyxRQUFwQ0EsT0FBb0M7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBZEMsT0FBYzs7QUFDL0Qsa0JBQU1DLGlCQUFOLENBQXdCO0FBQ3RCSCxvQkFEc0I7QUFFdEJDLGNBQVVBLFlBQVksU0FGQTtBQUd0QkcsVUFBTUY7QUFIZ0IsR0FBeEI7QUFLRCxDQU5EOztBQVFBLElBQU1HLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVFOLE9BQVIsRUFBb0Q7QUFBQSxrRkFBUCxFQUFPO0FBQUEsTUFBakNPLElBQWlDLFNBQWpDQSxJQUFpQztBQUFBLE1BQTNCQyxHQUEyQixTQUEzQkEsR0FBMkI7QUFBQSxNQUFuQk4sT0FBbUI7O0FBQy9ETyxRQUFNVCxPQUFOOztBQUVBRCxpQ0FDS0csT0FETDtBQUVFRixvQkFGRjtBQUdFTTtBQUhGOztBQU1BLE1BQUlDLElBQUosRUFBVTtBQUNSLFFBQUlELFVBQVUsT0FBZCxFQUF1QjtBQUNyQix1QkFBTUMsSUFBTixFQUFlUCxPQUFmLFVBQTJCUSxHQUEzQjtBQUNELEtBRkQsTUFFTyxJQUFJRixVQUFVLFNBQWQsRUFBeUI7QUFDOUIsc0JBQUtDLElBQUwsRUFBV1AsT0FBWDtBQUNELEtBRk0sTUFFQTtBQUNMLHlCQUFRTyxJQUFSLEVBQWNQLE9BQWQ7QUFDRDtBQUNGOztBQUVELE1BQUlRLEdBQUosRUFBUztBQUNQLG9CQUFNRSxnQkFBTixDQUF1QkYsR0FBdkI7QUFDRDtBQUNGLENBdEJEOztBQXdCQSxJQUFNRyxTQUFTO0FBQ2JDLE9BRGEsaUJBQ1BDLFFBRE8sU0FDb0M7QUFBQSxRQUEvQkMsU0FBK0IsU0FBL0JBLFNBQStCO0FBQUEsUUFBcEJQLElBQW9CLFNBQXBCQSxJQUFvQjtBQUFBLFFBQVhMLE9BQVc7O0FBQy9DLFFBQU1GLFVBQWFhLFFBQWIsVUFBMEJDLFNBQTFCLE9BQU47QUFDQWYsbUNBQ0tHLE9BREw7QUFFRUYsc0JBRkY7QUFHRUMsZ0JBQVUsTUFIWjtBQUlFSyxhQUFPO0FBSlQ7O0FBT0EsdUJBQVFDLElBQVIsRUFBY1AsT0FBZDtBQUNELEdBWFk7OztBQWFiZSxPQUFLVixLQUFLVyxJQUFMLFlBQWdCLE1BQWhCLENBYlE7QUFjYlAsU0FBT0osS0FBS1csSUFBTCxZQUFnQixPQUFoQixDQWRNO0FBZWJDLFNBQU9aLEtBQUtXLElBQUwsWUFBZ0IsT0FBaEIsQ0FmTTtBQWdCYkUsUUFBTWIsS0FBS1csSUFBTCxZQUFnQixTQUFoQjtBQWhCTyxDQUFmOztrQkFtQmVMLE07QUFDUixJQUFNUSxzQ0FBZSxnQkFBTVQsZ0JBQTNCIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSYXZlbiBmcm9tICdyYXZlbic7XG5cbmltcG9ydCB7XG4gIGVjaG9tc2csXG4gIHdhcm4sXG4gIGVycm9yLFxufSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBicmVhZGNydW1iQ29udGV4dCA9ICh7IG1lc3NhZ2UsIGNhdGVnb3J5LCAuLi5vcHRpb25zIH0pID0+IHtcbiAgUmF2ZW4uY2FwdHVyZUJyZWFkY3J1bWIoe1xuICAgIG1lc3NhZ2UsXG4gICAgY2F0ZWdvcnk6IGNhdGVnb3J5IHx8ICdsb2dnaW5nJyxcbiAgICBkYXRhOiBvcHRpb25zLFxuICB9KTtcbn07XG5cbmNvbnN0IF9sb2cgPSAobGV2ZWwsIG1lc3NhZ2UsIHsgbnZpbSwgZXJyLCAuLi5vcHRpb25zIH0gPSB7fSkgPT4ge1xuICBkZWJ1ZyhtZXNzYWdlKTtcblxuICBicmVhZGNydW1iQ29udGV4dCh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtZXNzYWdlLFxuICAgIGxldmVsLFxuICB9KTtcblxuICBpZiAobnZpbSkge1xuICAgIGlmIChsZXZlbCA9PT0gJ2Vycm9yJykge1xuICAgICAgZXJyb3IobnZpbSwgYCR7bWVzc2FnZX06ICR7ZXJyfWApO1xuICAgIH0gZWxzZSBpZiAobGV2ZWwgPT09ICd3YXJuaW5nJykge1xuICAgICAgd2FybihudmltLCBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWNob21zZyhudmltLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZXJyKSB7XG4gICAgUmF2ZW4uY2FwdHVyZUV4Y2VwdGlvbihlcnIpO1xuICB9XG59O1xuXG5jb25zdCBsb2dnZXIgPSB7XG4gIGJlbmNoKF9tZXNzYWdlLCB7IGJlbmNobWFyaywgbnZpbSwgLi4ub3B0aW9ucyB9KSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGAke19tZXNzYWdlfSBbJHtiZW5jaG1hcmt9c11gO1xuICAgIGJyZWFkY3J1bWJDb250ZXh0KHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBtZXNzYWdlLFxuICAgICAgY2F0ZWdvcnk6ICdwZXJmJyxcbiAgICAgIGxldmVsOiAnZGVidWcnLFxuICAgIH0pO1xuXG4gICAgZWNob21zZyhudmltLCBtZXNzYWdlKTtcbiAgfSxcblxuICBsb2c6IF9sb2cuYmluZCh0aGlzLCAnaW5mbycpLFxuICBkZWJ1ZzogX2xvZy5iaW5kKHRoaXMsICdkZWJ1ZycpLFxuICBlcnJvcjogX2xvZy5iaW5kKHRoaXMsICdlcnJvcicpLFxuICB3YXJuOiBfbG9nLmJpbmQodGhpcywgJ3dhcm5pbmcnKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbmV4cG9ydCBjb25zdCBjYXB0dXJlRXJyb3IgPSBSYXZlbi5jYXB0dXJlRXhjZXB0aW9uO1xuIl19