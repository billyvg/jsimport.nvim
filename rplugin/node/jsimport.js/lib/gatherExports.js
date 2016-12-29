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
  var _ref3 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee3(directory, pattern) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var ignoreDirs;
    return _regeneratorRuntime2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ignoreDirs = DEFAULT_IGNORE || options.ignoreDirs;
            return _context3.abrupt('return', getFiles(directory, /\.js(x|)$/, { ignoreDirs: ignoreDirs }));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function gatherExports(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = gatherExports;
//# sourceMappingURL=gatherExports.js.map