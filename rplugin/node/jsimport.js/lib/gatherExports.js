'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFiles = undefined;

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line


var getFiles = exports.getFiles = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee2(directory, _ref2) {
    var pattern = _ref2.pattern,
        _ref2$ignore = _ref2.ignore,
        ignore = _ref2$ignore === undefined ? [] : _ref2$ignore;
    var files, filesInDir;
    return _regeneratorRuntime2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _fs2.default.readdir(_path2.default.resolve(directory));

          case 2:
            files = _context2.sent;
            _context2.next = 5;
            return Promise.all(files.map(function () {
              var _ref3 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(f) {
                var file, stat;
                return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = _path2.default;
                        _context.next = 3;
                        return directory;

                      case 3:
                        _context.t1 = _context.sent;
                        _context.t2 = f;
                        file = _context.t0.resolve.call(_context.t0, _context.t1, _context.t2);
                        _context.next = 8;
                        return _fs2.default.stat(file);

                      case 8:
                        stat = _context.sent;

                        if (ignore.find(function (ignorePattern) {
                          return file.search(ignorePattern) !== -1;
                        })) {
                          _context.next = 16;
                          break;
                        }

                        if (!stat.isDirectory()) {
                          _context.next = 14;
                          break;
                        }

                        return _context.abrupt('return', getFiles(file, { pattern: pattern, ignore: ignore }));

                      case 14:
                        if (!(file.search(pattern) > -1)) {
                          _context.next = 16;
                          break;
                        }

                        return _context.abrupt('return', file);

                      case 16:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 5:
            filesInDir = _context2.sent;
            return _context2.abrupt('return', filesInDir.filter(function (f) {
              return f && (typeof f === 'string' || f.length);
            }).reduce(function (memo, val) {
              return memo.concat(val);
            }, []));

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getFiles(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var gatherExports = function () {
  var _ref4 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee3(directory) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref5$pattern = _ref5.pattern,
        pattern = _ref5$pattern === undefined ? _constants.DEFAULT_PATTERN : _ref5$pattern,
        _ref5$ignore = _ref5.ignore,
        ignore = _ref5$ignore === undefined ? _constants.DEFAULT_IGNORE : _ref5$ignore;

    return _regeneratorRuntime2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', getFiles(directory, { pattern: pattern, ignore: ignore }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function gatherExports(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.default = gatherExports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nYXRoZXJFeHBvcnRzLmpzIl0sIm5hbWVzIjpbImdldEZpbGVzIiwiZGlyZWN0b3J5IiwicGF0dGVybiIsImlnbm9yZSIsInJlYWRkaXIiLCJyZXNvbHZlIiwiZmlsZXMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZiIsImZpbGUiLCJzdGF0IiwiZmluZCIsImlnbm9yZVBhdHRlcm4iLCJzZWFyY2giLCJpc0RpcmVjdG9yeSIsImZpbGVzSW5EaXIiLCJmaWx0ZXIiLCJsZW5ndGgiLCJyZWR1Y2UiLCJtZW1vIiwidmFsIiwiY29uY2F0IiwiZ2F0aGVyRXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7OzJjQUpzRDs7O0FBUy9DLElBQU1BO0FBQUEsaUVBQVcsa0JBQU9DLFNBQVA7QUFBQSxRQUFvQkMsT0FBcEIsU0FBb0JBLE9BQXBCO0FBQUEsNkJBQTZCQyxNQUE3QjtBQUFBLFFBQTZCQSxNQUE3QixnQ0FBc0MsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRixhQUFHQyxPQUFILENBQVcsZUFBS0MsT0FBTCxDQUFhSixTQUFiLENBQVgsQ0FERTs7QUFBQTtBQUNoQkssaUJBRGdCO0FBQUE7QUFBQSxtQkFFQ0MsUUFBUUMsR0FBUixDQUFZRixNQUFNRyxHQUFOO0FBQUEsOEVBQVUsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNYVCxTQURXOztBQUFBO0FBQUE7QUFBQSxzQ0FDQVMsQ0FEQTtBQUNyQ0MsNEJBRHFDLGVBQ3pCTixPQUR5QjtBQUFBO0FBQUEsK0JBRXhCLGFBQUdPLElBQUgsQ0FBUUQsSUFBUixDQUZ3Qjs7QUFBQTtBQUVyQ0MsNEJBRnFDOztBQUFBLDRCQUd0Q1QsT0FBT1UsSUFBUCxDQUFZLFVBQUNDLGFBQUQ7QUFBQSxpQ0FBbUJILEtBQUtJLE1BQUwsQ0FBWUQsYUFBWixNQUErQixDQUFDLENBQW5EO0FBQUEseUJBQVosQ0FIc0M7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkJBSXJDRixLQUFLSSxXQUFMLEVBSnFDO0FBQUE7QUFBQTtBQUFBOztBQUFBLHlEQUtoQ2hCLFNBQVNXLElBQVQsRUFBZSxFQUFFVCxnQkFBRixFQUFXQyxjQUFYLEVBQWYsQ0FMZ0M7O0FBQUE7QUFBQSw4QkFNOUJRLEtBQUtJLE1BQUwsQ0FBWWIsT0FBWixJQUF1QixDQUFDLENBTk07QUFBQTtBQUFBO0FBQUE7O0FBQUEseURBT2hDUyxJQVBnQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFaLENBRkQ7O0FBQUE7QUFFbEJNLHNCQUZrQjtBQUFBLDhDQWdCZkEsV0FDSkMsTUFESSxDQUNHLFVBQUNSLENBQUQ7QUFBQSxxQkFBT0EsTUFBTSxPQUFPQSxDQUFQLEtBQWEsUUFBYixJQUF5QkEsRUFBRVMsTUFBakMsQ0FBUDtBQUFBLGFBREgsRUFFSkMsTUFGSSxDQUVHLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLHFCQUFlRCxLQUFLRSxNQUFMLENBQVlELEdBQVosQ0FBZjtBQUFBLGFBRkgsRUFFb0MsRUFGcEMsQ0FoQmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQXFCUCxJQUFNRTtBQUFBLGtFQUFnQixrQkFBT3ZCLFNBQVA7QUFBQSxvRkFBMkUsRUFBM0U7QUFBQSw4QkFBb0JDLE9BQXBCO0FBQUEsUUFBb0JBLE9BQXBCO0FBQUEsNkJBQStDQyxNQUEvQztBQUFBLFFBQStDQSxNQUEvQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNiSCxTQUFTQyxTQUFULEVBQW9CLEVBQUVDLGdCQUFGLEVBQVdDLGNBQVgsRUFBcEIsQ0FEYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztrQkFJZXFCLGEiLCJmaWxlIjoiZ2F0aGVyRXhwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCBmcyBmcm9tICdtei9mcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IHtcbiAgREVGQVVMVF9JR05PUkUsXG4gIERFRkFVTFRfUEFUVEVSTixcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RmlsZXMgPSBhc3luYyAoZGlyZWN0b3J5LCB7IHBhdHRlcm4sIGlnbm9yZSA9IFtdIH0pID0+IHtcbiAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHBhdGgucmVzb2x2ZShkaXJlY3RvcnkpKTtcbiAgbGV0IGZpbGVzSW5EaXIgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlcy5tYXAoYXN5bmMgKGYpID0+IHtcbiAgICBjb25zdCBmaWxlID0gcGF0aC5yZXNvbHZlKGF3YWl0IGRpcmVjdG9yeSwgZik7XG4gICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZzLnN0YXQoZmlsZSk7XG4gICAgaWYgKCFpZ25vcmUuZmluZCgoaWdub3JlUGF0dGVybikgPT4gZmlsZS5zZWFyY2goaWdub3JlUGF0dGVybikgIT09IC0xKSkge1xuICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICByZXR1cm4gZ2V0RmlsZXMoZmlsZSwgeyBwYXR0ZXJuLCBpZ25vcmUgfSk7XG4gICAgICB9IGVsc2UgaWYgKGZpbGUuc2VhcmNoKHBhdHRlcm4pID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICB9XG4gICAgfVxuICB9KSk7XG5cbiAgLy8gRmlsdGVyIG91dCBlbXB0eSBhcnJheXMsIGFuZCBubyBtYXRjaGVkIGZpbGVzXG4gIC8vIGFuZCB0aGVuIGZsYXR0ZW5cbiAgcmV0dXJuIGZpbGVzSW5EaXJcbiAgICAuZmlsdGVyKChmKSA9PiBmICYmICh0eXBlb2YgZiA9PT0gJ3N0cmluZycgfHwgZi5sZW5ndGgpKVxuICAgIC5yZWR1Y2UoKG1lbW8sIHZhbCkgPT4gbWVtby5jb25jYXQodmFsKSwgW10pO1xufTtcblxuY29uc3QgZ2F0aGVyRXhwb3J0cyA9IGFzeW5jIChkaXJlY3RvcnksIHsgcGF0dGVybiA9IERFRkFVTFRfUEFUVEVSTiwgaWdub3JlID0gREVGQVVMVF9JR05PUkUgfSA9IHt9KSA9PiB7XG4gIHJldHVybiBnZXRGaWxlcyhkaXJlY3RvcnksIHsgcGF0dGVybiwgaWdub3JlIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2F0aGVyRXhwb3J0cztcbiJdfQ==