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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line


// TODO respect configuration + gitignore
var DEFAULT_IGNORE = ['node_modules', '.git', '.config', '.meteor', 'lib'];

var getFiles = exports.getFiles = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee2(directory, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var ignoreDirs, files, filesInDir;
    return _regeneratorRuntime2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ignoreDirs = options.ignoreDirs;
            _context2.next = 3;
            return _fs2.default.readdir(_path2.default.resolve(directory));

          case 3:
            files = _context2.sent;
            _context2.next = 6;
            return Promise.all(files.map(function () {
              var _ref2 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(f) {
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

                        if (!stat.isDirectory()) {
                          _context.next = 14;
                          break;
                        }

                        if (ignoreDirs.find(function (ignorePattern) {
                          return f.search(ignorePattern) !== -1;
                        })) {
                          _context.next = 12;
                          break;
                        }

                        return _context.abrupt('return', getFiles(file, pattern, options));

                      case 12:
                        _context.next = 16;
                        break;

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

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 6:
            filesInDir = _context2.sent;


            // Filter out empty arrays, and no matched files
            filesInDir = filesInDir.filter(function (f) {
              return f && (typeof f === 'string' || f.length);
            });

            // Flatten
            return _context2.abrupt('return', filesInDir.reduce(function (memo, val) {
              if (val && val.length) {
                return memo.concat(val);
              }

              return memo;
            }, []));

          case 9:
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
  var _ref3 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee3(directory) {
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\.js(x|)$';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var ignoreDirs;
    return _regeneratorRuntime2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ignoreDirs = DEFAULT_IGNORE || options.ignoreDirs;
            return _context3.abrupt('return', getFiles(directory, pattern, { ignoreDirs: ignoreDirs }));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function gatherExports(_x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = gatherExports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nYXRoZXJFeHBvcnRzLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfSUdOT1JFIiwiZ2V0RmlsZXMiLCJkaXJlY3RvcnkiLCJwYXR0ZXJuIiwib3B0aW9ucyIsImlnbm9yZURpcnMiLCJyZWFkZGlyIiwicmVzb2x2ZSIsImZpbGVzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImYiLCJmaWxlIiwic3RhdCIsImlzRGlyZWN0b3J5IiwiZmluZCIsImlnbm9yZVBhdHRlcm4iLCJzZWFyY2giLCJmaWxlc0luRGlyIiwiZmlsdGVyIiwibGVuZ3RoIiwicmVkdWNlIiwibWVtbyIsInZhbCIsImNvbmNhdCIsImdhdGhlckV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OzsyY0FGc0Q7OztBQUl0RDtBQUNBLElBQU1BLGlCQUFpQixDQUNyQixjQURxQixFQUVyQixNQUZxQixFQUdyQixTQUhxQixFQUlyQixTQUpxQixFQUtyQixLQUxxQixDQUF2Qjs7QUFRTyxJQUFNQztBQUFBLGlFQUFXLGtCQUFPQyxTQUFQLEVBQWtCQyxPQUFsQjtBQUFBLFFBQTJCQyxPQUEzQix1RUFBcUMsRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXBCQyxzQkFGb0IsR0FHbEJELE9BSGtCLENBRXBCQyxVQUZvQjtBQUFBO0FBQUEsbUJBS0YsYUFBR0MsT0FBSCxDQUFXLGVBQUtDLE9BQUwsQ0FBYUwsU0FBYixDQUFYLENBTEU7O0FBQUE7QUFLaEJNLGlCQUxnQjtBQUFBO0FBQUEsbUJBTUNDLFFBQVFDLEdBQVIsQ0FBWUYsTUFBTUcsR0FBTjtBQUFBLDhFQUFVLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDWFYsU0FEVzs7QUFBQTtBQUFBO0FBQUEsc0NBQ0FVLENBREE7QUFDckNDLDRCQURxQyxlQUN6Qk4sT0FEeUI7QUFBQTtBQUFBLCtCQUV4QixhQUFHTyxJQUFILENBQVFELElBQVIsQ0FGd0I7O0FBQUE7QUFFckNDLDRCQUZxQzs7QUFBQSw2QkFHdkNBLEtBQUtDLFdBQUwsRUFIdUM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNEJBSXBDVixXQUFXVyxJQUFYLENBQWdCLFVBQUNDLGFBQUQ7QUFBQSxpQ0FBbUJMLEVBQUVNLE1BQUYsQ0FBU0QsYUFBVCxNQUE0QixDQUFDLENBQWhEO0FBQUEseUJBQWhCLENBSm9DO0FBQUE7QUFBQTtBQUFBOztBQUFBLHlEQUtoQ2hCLFNBQVNZLElBQVQsRUFBZVYsT0FBZixFQUF3QkMsT0FBeEIsQ0FMZ0M7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsOEJBT2hDUyxLQUFLSyxNQUFMLENBQVlmLE9BQVosSUFBdUIsQ0FBQyxDQVBRO0FBQUE7QUFBQTtBQUFBOztBQUFBLHlEQVFsQ1UsSUFSa0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWixDQU5EOztBQUFBO0FBTWxCTSxzQkFOa0I7OztBQWtCdEI7QUFDQUEseUJBQWFBLFdBQVdDLE1BQVgsQ0FBa0IsVUFBQ1IsQ0FBRDtBQUFBLHFCQUFPQSxNQUFNLE9BQU9BLENBQVAsS0FBYSxRQUFiLElBQXlCQSxFQUFFUyxNQUFqQyxDQUFQO0FBQUEsYUFBbEIsQ0FBYjs7QUFFQTtBQXJCc0IsOENBc0JmRixXQUFXRyxNQUFYLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3RDLGtCQUFJQSxPQUFPQSxJQUFJSCxNQUFmLEVBQXVCO0FBQ3JCLHVCQUFPRSxLQUFLRSxNQUFMLENBQVlELEdBQVosQ0FBUDtBQUNEOztBQUVELHFCQUFPRCxJQUFQO0FBQ0QsYUFOTSxFQU1KLEVBTkksQ0F0QmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWdDUCxJQUFNRztBQUFBLGtFQUFnQixrQkFBT3hCLFNBQVA7QUFBQSxRQUFrQkMsT0FBbEIsdUVBQTRCLFdBQTVCO0FBQUEsUUFBeUNDLE9BQXpDLHVFQUFtRCxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEMsc0JBRGMsR0FDREwsa0JBQWtCSSxRQUFRQyxVQUR6QjtBQUFBLDhDQUdiSixTQUFTQyxTQUFULEVBQW9CQyxPQUFwQixFQUE2QixFQUFFRSxzQkFBRixFQUE3QixDQUhhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWhCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O2tCQU1lcUIsYSIsImZpbGUiOiJnYXRoZXJFeHBvcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IGZzIGZyb20gJ216L2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBUT0RPIHJlc3BlY3QgY29uZmlndXJhdGlvbiArIGdpdGlnbm9yZVxuY29uc3QgREVGQVVMVF9JR05PUkUgPSBbXG4gICdub2RlX21vZHVsZXMnLFxuICAnLmdpdCcsXG4gICcuY29uZmlnJyxcbiAgJy5tZXRlb3InLFxuICAnbGliJyxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlcyA9IGFzeW5jIChkaXJlY3RvcnksIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWdub3JlRGlycyxcbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5yZWFkZGlyKHBhdGgucmVzb2x2ZShkaXJlY3RvcnkpKTtcbiAgbGV0IGZpbGVzSW5EaXIgPSBhd2FpdCBQcm9taXNlLmFsbChmaWxlcy5tYXAoYXN5bmMgKGYpID0+IHtcbiAgICBjb25zdCBmaWxlID0gcGF0aC5yZXNvbHZlKGF3YWl0IGRpcmVjdG9yeSwgZik7XG4gICAgY29uc3Qgc3RhdCA9IGF3YWl0IGZzLnN0YXQoZmlsZSk7XG4gICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgaWYgKCFpZ25vcmVEaXJzLmZpbmQoKGlnbm9yZVBhdHRlcm4pID0+IGYuc2VhcmNoKGlnbm9yZVBhdHRlcm4pICE9PSAtMSkpIHtcbiAgICAgICAgcmV0dXJuIGdldEZpbGVzKGZpbGUsIHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsZS5zZWFyY2gocGF0dGVybikgPiAtMSkge1xuICAgICAgcmV0dXJuIGZpbGU7XG4gICAgfVxuICB9KSk7XG5cbiAgLy8gRmlsdGVyIG91dCBlbXB0eSBhcnJheXMsIGFuZCBubyBtYXRjaGVkIGZpbGVzXG4gIGZpbGVzSW5EaXIgPSBmaWxlc0luRGlyLmZpbHRlcigoZikgPT4gZiAmJiAodHlwZW9mIGYgPT09ICdzdHJpbmcnIHx8IGYubGVuZ3RoKSk7XG5cbiAgLy8gRmxhdHRlblxuICByZXR1cm4gZmlsZXNJbkRpci5yZWR1Y2UoKG1lbW8sIHZhbCkgPT4ge1xuICAgIGlmICh2YWwgJiYgdmFsLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG1lbW8uY29uY2F0KHZhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIFtdKTtcblxufTtcblxuY29uc3QgZ2F0aGVyRXhwb3J0cyA9IGFzeW5jIChkaXJlY3RvcnksIHBhdHRlcm4gPSAnXFwuanMoeHwpJCcsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCBpZ25vcmVEaXJzID0gREVGQVVMVF9JR05PUkUgfHwgb3B0aW9ucy5pZ25vcmVEaXJzO1xuXG4gIHJldHVybiBnZXRGaWxlcyhkaXJlY3RvcnksIHBhdHRlcm4sIHsgaWdub3JlRGlycyB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhdGhlckV4cG9ydHM7XG4iXX0=