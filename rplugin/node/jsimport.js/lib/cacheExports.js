'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

var _constants = require('./constants');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _gatherExports = require('./gatherExports');

var _gatherExports2 = _interopRequireDefault(_gatherExports);

var _parseExports = require('./parseExports.js');

var _parseExports2 = _interopRequireDefault(_parseExports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line


var cacheExports = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(nvim) {
    var start, results, parsedResults, benchmark;
    return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            start = +new Date();
            _context.next = 4;
            return (0, _gatherExports2.default)('.', '');

          case 4:
            results = _context.sent;

            _logger2.default.log('Parsing and caching ' + (results && results.length || 0) + ' files (this may take some time...)', { nvim: nvim });

            if (!(results && results.length)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return (0, _parseExports2.default)(results);

          case 9:
            parsedResults = _context.sent;

            if (parsedResults) {
              _fs2.default.writeFile(_constants.CACHE_FILENAME, JSON.stringify(parsedResults), 'utf8');
              benchmark = (+new Date() - start) / 1000;

              _logger2.default.bench('Parsed and cached ' + Object.keys(parsedResults).length + ' exports from ' + results.length + ' files', { nvim: nvim, benchmark: benchmark });
            }

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](0);

            _logger2.default.error('Error gathering javascript exports', { err: _context.t0, nvim: nvim });

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 13]]);
  }));

  return function cacheExports(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = cacheExports;
//# sourceMappingURL=cacheExports.js.map