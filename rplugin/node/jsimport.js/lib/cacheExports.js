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

var _parseExports = require('./parseExports');

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
            return (0, _parseExports2.default)(results, nvim);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZUV4cG9ydHMuanMiXSwibmFtZXMiOlsiY2FjaGVFeHBvcnRzIiwibnZpbSIsInN0YXJ0IiwiRGF0ZSIsInJlc3VsdHMiLCJsb2ciLCJsZW5ndGgiLCJwYXJzZWRSZXN1bHRzIiwid3JpdGVGaWxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImJlbmNobWFyayIsImJlbmNoIiwiT2JqZWN0Iiwia2V5cyIsImVycm9yIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7MmNBUnNEOzs7QUFVdEQsSUFBTUE7QUFBQSxpRUFBZSxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYQyxpQkFGVyxHQUVILENBQUMsSUFBSUMsSUFBSixFQUZFO0FBQUE7QUFBQSxtQkFHSyw2QkFBYyxHQUFkLEVBQW1CLEVBQW5CLENBSEw7O0FBQUE7QUFHWEMsbUJBSFc7O0FBSWpCLDZCQUFPQyxHQUFQLDJCQUFrQ0QsV0FBV0EsUUFBUUUsTUFBbkIsSUFBNkIsQ0FBL0QsMkNBQXVHLEVBQUVMLFVBQUYsRUFBdkc7O0FBSmlCLGtCQU1iRyxXQUFXQSxRQUFRRSxNQU5OO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBT2EsNEJBQWFGLE9BQWIsRUFBc0JILElBQXRCLENBUGI7O0FBQUE7QUFPVE0seUJBUFM7O0FBUWYsZ0JBQUlBLGFBQUosRUFBbUI7QUFDakIsMkJBQUdDLFNBQUgsNEJBQTZCQyxLQUFLQyxTQUFMLENBQWVILGFBQWYsQ0FBN0IsRUFBNEQsTUFBNUQ7QUFDTUksdUJBRlcsR0FFQyxDQUFDLENBQUMsSUFBSVIsSUFBSixFQUFELEdBQWNELEtBQWYsSUFBd0IsSUFGekI7O0FBR2pCLCtCQUFPVSxLQUFQLHdCQUN1QkMsT0FBT0MsSUFBUCxDQUFZUCxhQUFaLEVBQTJCRCxNQURsRCxzQkFDeUVGLFFBQVFFLE1BRGpGLGFBRUUsRUFBRUwsVUFBRixFQUFRVSxvQkFBUixFQUZGO0FBSUQ7O0FBZmM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFrQmpCLDZCQUFPSSxLQUFQLENBQWEsb0NBQWIsRUFBbUQsRUFBRUMsZ0JBQUYsRUFBT2YsVUFBUCxFQUFuRDs7QUFsQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7a0JBc0JlRCxZIiwiZmlsZSI6ImNhY2hlRXhwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCBmcyBmcm9tICdtei9mcyc7XG5cbmltcG9ydCB7XG4gIENBQ0hFX0ZJTEVOQU1FLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCBnYXRoZXJFeHBvcnRzIGZyb20gJy4vZ2F0aGVyRXhwb3J0cyc7XG5pbXBvcnQgcGFyc2VFeHBvcnRzIGZyb20gJy4vcGFyc2VFeHBvcnRzJztcblxuY29uc3QgY2FjaGVFeHBvcnRzID0gYXN5bmMgKG52aW0pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdGFydCA9ICtuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnYXRoZXJFeHBvcnRzKCcuJywgJycpO1xuICAgIGxvZ2dlci5sb2coYFBhcnNpbmcgYW5kIGNhY2hpbmcgJHtyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoIHx8IDB9IGZpbGVzICh0aGlzIG1heSB0YWtlIHNvbWUgdGltZS4uLilgLCB7IG52aW0gfSk7XG5cbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcGFyc2VkUmVzdWx0cyA9IGF3YWl0IHBhcnNlRXhwb3J0cyhyZXN1bHRzLCBudmltKTtcbiAgICAgIGlmIChwYXJzZWRSZXN1bHRzKSB7XG4gICAgICAgIGZzLndyaXRlRmlsZShDQUNIRV9GSUxFTkFNRSwgSlNPTi5zdHJpbmdpZnkocGFyc2VkUmVzdWx0cyksICd1dGY4Jyk7XG4gICAgICAgIGNvbnN0IGJlbmNobWFyayA9ICgrbmV3IERhdGUoKSAtIHN0YXJ0KSAvIDEwMDA7XG4gICAgICAgIGxvZ2dlci5iZW5jaChcbiAgICAgICAgICBgUGFyc2VkIGFuZCBjYWNoZWQgJHtPYmplY3Qua2V5cyhwYXJzZWRSZXN1bHRzKS5sZW5ndGh9IGV4cG9ydHMgZnJvbSAke3Jlc3VsdHMubGVuZ3RofSBmaWxlc2AsXG4gICAgICAgICAgeyBudmltLCBiZW5jaG1hcmsgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nZ2VyLmVycm9yKCdFcnJvciBnYXRoZXJpbmcgamF2YXNjcmlwdCBleHBvcnRzJywgeyBlcnIsIG52aW0gfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhY2hlRXhwb3J0cztcbiJdfQ==