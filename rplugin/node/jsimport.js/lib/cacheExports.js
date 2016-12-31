'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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

            _logger2.default.log('Starting gather of exports in the directory (' + _path2.default.resolve('.') + ')', { nvim: nvim });
            _context.next = 5;
            return (0, _gatherExports2.default)('.');

          case 5:
            results = _context.sent;

            _logger2.default.log('Parsing and caching ' + (results && results.length || 0) + ' files (this may take some time...)', { nvim: nvim });

            if (!(results && results.length)) {
              _context.next = 16;
              break;
            }

            _context.next = 10;
            return (0, _parseExports2.default)(results, nvim);

          case 10:
            parsedResults = _context.sent;

            if (!parsedResults) {
              _context.next = 16;
              break;
            }

            // We need to write to a file so that python can read it
            _fs2.default.writeFile(_constants.CACHE_FILENAME, JSON.stringify(parsedResults), 'utf8').catch(function (err) {
              return _logger2.default.error('Error writing to cache', { err: err });
            });

            benchmark = (+new Date() - start) / 1000;

            _logger2.default.bench('Parsed and cached ' + Object.keys(parsedResults).length + ' exports from ' + results.length + ' files', { nvim: nvim, benchmark: benchmark });

            return _context.abrupt('return', parsedResults);

          case 16:
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](0);

            debug(_context.t0);
            _logger2.default.error('Error gathering javascript exports', { err: _context.t0, nvim: nvim });

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 18]]);
  }));

  return function cacheExports(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = cacheExports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZUV4cG9ydHMuanMiXSwibmFtZXMiOlsiY2FjaGVFeHBvcnRzIiwibnZpbSIsInN0YXJ0IiwiRGF0ZSIsImxvZyIsInJlc29sdmUiLCJyZXN1bHRzIiwibGVuZ3RoIiwicGFyc2VkUmVzdWx0cyIsIndyaXRlRmlsZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRjaCIsImVyciIsImVycm9yIiwiYmVuY2htYXJrIiwiYmVuY2giLCJPYmplY3QiLCJrZXlzIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7OzJjQVJzRDs7O0FBVXRELElBQU1BO0FBQUEsaUVBQWUsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWEMsaUJBRlcsR0FFSCxDQUFDLElBQUlDLElBQUosRUFGRTs7QUFHakIsNkJBQU9DLEdBQVAsbURBQTJELGVBQUtDLE9BQUwsQ0FBYSxHQUFiLENBQTNELFFBQWlGLEVBQUVKLFVBQUYsRUFBakY7QUFIaUI7QUFBQSxtQkFJSyw2QkFBYyxHQUFkLENBSkw7O0FBQUE7QUFJWEssbUJBSlc7O0FBS2pCLDZCQUFPRixHQUFQLDJCQUFrQ0UsV0FBV0EsUUFBUUMsTUFBbkIsSUFBNkIsQ0FBL0QsMkNBQXVHLEVBQUVOLFVBQUYsRUFBdkc7O0FBTGlCLGtCQU9iSyxXQUFXQSxRQUFRQyxNQVBOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBUWEsNEJBQWFELE9BQWIsRUFBc0JMLElBQXRCLENBUmI7O0FBQUE7QUFRVE8seUJBUlM7O0FBQUEsaUJBU1hBLGFBVFc7QUFBQTtBQUFBO0FBQUE7O0FBVWI7QUFDQSx5QkFDR0MsU0FESCw0QkFDNkJDLEtBQUtDLFNBQUwsQ0FBZUgsYUFBZixDQUQ3QixFQUM0RCxNQUQ1RCxFQUVHSSxLQUZILENBRVMsVUFBQ0MsR0FBRDtBQUFBLHFCQUFTLGlCQUFPQyxLQUFQLENBQWEsd0JBQWIsRUFBdUMsRUFBRUQsUUFBRixFQUF2QyxDQUFUO0FBQUEsYUFGVDs7QUFJTUUscUJBZk8sR0FlSyxDQUFDLENBQUMsSUFBSVosSUFBSixFQUFELEdBQWNELEtBQWYsSUFBd0IsSUFmN0I7O0FBZ0JiLDZCQUFPYyxLQUFQLHdCQUN1QkMsT0FBT0MsSUFBUCxDQUFZVixhQUFaLEVBQTJCRCxNQURsRCxzQkFDeUVELFFBQVFDLE1BRGpGLGFBRUUsRUFBRU4sVUFBRixFQUFRYyxvQkFBUixFQUZGOztBQWhCYSw2Q0FxQk5QLGFBckJNOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBeUJqQlc7QUFDQSw2QkFBT0wsS0FBUCxDQUFhLG9DQUFiLEVBQW1ELEVBQUVELGdCQUFGLEVBQU9aLFVBQVAsRUFBbkQ7O0FBMUJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O2tCQThCZUQsWSIsImZpbGUiOiJjYWNoZUV4cG9ydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IGZzIGZyb20gJ216L2ZzJztcblxuaW1wb3J0IHtcbiAgQ0FDSEVfRklMRU5BTUUsXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IGdhdGhlckV4cG9ydHMgZnJvbSAnLi9nYXRoZXJFeHBvcnRzJztcbmltcG9ydCBwYXJzZUV4cG9ydHMgZnJvbSAnLi9wYXJzZUV4cG9ydHMnO1xuXG5jb25zdCBjYWNoZUV4cG9ydHMgPSBhc3luYyAobnZpbSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHN0YXJ0ID0gK25ldyBEYXRlKCk7XG4gICAgbG9nZ2VyLmxvZyhgU3RhcnRpbmcgZ2F0aGVyIG9mIGV4cG9ydHMgaW4gdGhlIGRpcmVjdG9yeSAoJHtwYXRoLnJlc29sdmUoJy4nKX0pYCwgeyBudmltIH0pO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnYXRoZXJFeHBvcnRzKCcuJyk7XG4gICAgbG9nZ2VyLmxvZyhgUGFyc2luZyBhbmQgY2FjaGluZyAke3Jlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggfHwgMH0gZmlsZXMgKHRoaXMgbWF5IHRha2Ugc29tZSB0aW1lLi4uKWAsIHsgbnZpbSB9KTtcblxuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXJzZWRSZXN1bHRzID0gYXdhaXQgcGFyc2VFeHBvcnRzKHJlc3VsdHMsIG52aW0pO1xuICAgICAgaWYgKHBhcnNlZFJlc3VsdHMpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byB3cml0ZSB0byBhIGZpbGUgc28gdGhhdCBweXRob24gY2FuIHJlYWQgaXRcbiAgICAgICAgZnNcbiAgICAgICAgICAud3JpdGVGaWxlKENBQ0hFX0ZJTEVOQU1FLCBKU09OLnN0cmluZ2lmeShwYXJzZWRSZXN1bHRzKSwgJ3V0ZjgnKVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBsb2dnZXIuZXJyb3IoJ0Vycm9yIHdyaXRpbmcgdG8gY2FjaGUnLCB7IGVyciB9KSk7XG5cbiAgICAgICAgY29uc3QgYmVuY2htYXJrID0gKCtuZXcgRGF0ZSgpIC0gc3RhcnQpIC8gMTAwMDtcbiAgICAgICAgbG9nZ2VyLmJlbmNoKFxuICAgICAgICAgIGBQYXJzZWQgYW5kIGNhY2hlZCAke09iamVjdC5rZXlzKHBhcnNlZFJlc3VsdHMpLmxlbmd0aH0gZXhwb3J0cyBmcm9tICR7cmVzdWx0cy5sZW5ndGh9IGZpbGVzYCxcbiAgICAgICAgICB7IG52aW0sIGJlbmNobWFyayB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZFJlc3VsdHM7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWJ1ZyhlcnIpO1xuICAgIGxvZ2dlci5lcnJvcignRXJyb3IgZ2F0aGVyaW5nIGphdmFzY3JpcHQgZXhwb3J0cycsIHsgZXJyLCBudmltIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYWNoZUV4cG9ydHM7XG4iXX0=