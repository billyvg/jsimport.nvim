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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZUV4cG9ydHMuanMiXSwibmFtZXMiOlsiY2FjaGVFeHBvcnRzIiwibnZpbSIsInN0YXJ0IiwiRGF0ZSIsInJlc3VsdHMiLCJsb2ciLCJsZW5ndGgiLCJwYXJzZWRSZXN1bHRzIiwid3JpdGVGaWxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImJlbmNobWFyayIsImJlbmNoIiwiT2JqZWN0Iiwia2V5cyIsImVycm9yIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7MmNBUnNEOzs7QUFVdEQsSUFBTUE7QUFBQSxpRUFBZSxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYQyxpQkFGVyxHQUVILENBQUMsSUFBSUMsSUFBSixFQUZFO0FBQUE7QUFBQSxtQkFHSyw2QkFBYyxHQUFkLEVBQW1CLEVBQW5CLENBSEw7O0FBQUE7QUFHWEMsbUJBSFc7O0FBSWpCLDZCQUFPQyxHQUFQLDJCQUFrQ0QsV0FBV0EsUUFBUUUsTUFBbkIsSUFBNkIsQ0FBL0QsMkNBQXVHLEVBQUVMLFVBQUYsRUFBdkc7O0FBSmlCLGtCQU1iRyxXQUFXQSxRQUFRRSxNQU5OO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBT2EsNEJBQWFGLE9BQWIsQ0FQYjs7QUFBQTtBQU9URyx5QkFQUzs7QUFRZixnQkFBSUEsYUFBSixFQUFtQjtBQUNqQiwyQkFBR0MsU0FBSCw0QkFBNkJDLEtBQUtDLFNBQUwsQ0FBZUgsYUFBZixDQUE3QixFQUE0RCxNQUE1RDtBQUNNSSx1QkFGVyxHQUVDLENBQUMsQ0FBQyxJQUFJUixJQUFKLEVBQUQsR0FBY0QsS0FBZixJQUF3QixJQUZ6Qjs7QUFHakIsK0JBQU9VLEtBQVAsd0JBQ3VCQyxPQUFPQyxJQUFQLENBQVlQLGFBQVosRUFBMkJELE1BRGxELHNCQUN5RUYsUUFBUUUsTUFEakYsYUFFRSxFQUFFTCxVQUFGLEVBQVFVLG9CQUFSLEVBRkY7QUFJRDs7QUFmYztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWtCakIsNkJBQU9JLEtBQVAsQ0FBYSxvQ0FBYixFQUFtRCxFQUFFQyxnQkFBRixFQUFPZixVQUFQLEVBQW5EOztBQWxCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztrQkFzQmVELFkiLCJmaWxlIjoiY2FjaGVFeHBvcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IGZzIGZyb20gJ216L2ZzJztcblxuaW1wb3J0IHtcbiAgQ0FDSEVfRklMRU5BTUUsXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IGdhdGhlckV4cG9ydHMgZnJvbSAnLi9nYXRoZXJFeHBvcnRzJztcbmltcG9ydCBwYXJzZUV4cG9ydHMgZnJvbSAnLi9wYXJzZUV4cG9ydHMuanMnO1xuXG5jb25zdCBjYWNoZUV4cG9ydHMgPSBhc3luYyAobnZpbSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN0YXJ0ID0gK25ldyBEYXRlKCk7XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdhdGhlckV4cG9ydHMoJy4nLCAnJyk7XG4gICAgbG9nZ2VyLmxvZyhgUGFyc2luZyBhbmQgY2FjaGluZyAke3Jlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggfHwgMH0gZmlsZXMgKHRoaXMgbWF5IHRha2Ugc29tZSB0aW1lLi4uKWAsIHsgbnZpbSB9KTtcblxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXJzZWRSZXN1bHRzID0gYXdhaXQgcGFyc2VFeHBvcnRzKHJlc3VsdHMpO1xuICAgICAgaWYgKHBhcnNlZFJlc3VsdHMpIHtcbiAgICAgICAgZnMud3JpdGVGaWxlKENBQ0hFX0ZJTEVOQU1FLCBKU09OLnN0cmluZ2lmeShwYXJzZWRSZXN1bHRzKSwgJ3V0ZjgnKTtcbiAgICAgICAgY29uc3QgYmVuY2htYXJrID0gKCtuZXcgRGF0ZSgpIC0gc3RhcnQpIC8gMTAwMDtcbiAgICAgICAgbG9nZ2VyLmJlbmNoKFxuICAgICAgICAgIGBQYXJzZWQgYW5kIGNhY2hlZCAke09iamVjdC5rZXlzKHBhcnNlZFJlc3VsdHMpLmxlbmd0aH0gZXhwb3J0cyBmcm9tICR7cmVzdWx0cy5sZW5ndGh9IGZpbGVzYCxcbiAgICAgICAgICB7IG52aW0sIGJlbmNobWFyayB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsb2dnZXIuZXJyb3IoJ0Vycm9yIGdhdGhlcmluZyBqYXZhc2NyaXB0IGV4cG9ydHMnLCB7IGVyciwgbnZpbSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FjaGVFeHBvcnRzO1xuIl19