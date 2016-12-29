'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _babylon = require('babylon');

var _babelTraverse = require('babel-traverse');

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line


var _addMapping = function _addMapping(obj, _ref) {
  var name = _ref.name,
      file = _ref.file,
      type = _ref.type;

  obj[name] = {
    name: name,
    file: file,
    type: type
  };
};

var BabylonVisitor = {
  ExportDefaultDeclaration: function ExportDefaultDeclaration(p /*, state*/) {
    if (p.node && p.node.declaration) {
      var name = void 0;
      if (p.node.declaration.id) {
        name = p.node.declaration.id.name;
      } else {
        name = _path2.default.parse(this.file).name;
      }

      _addMapping(this.map, {
        name: name,
        file: this.file,
        type: 'default'
      });
    }
  },
  ExportNamedDeclaration: function ExportNamedDeclaration(p) {
    var _this = this;

    if (p.node && p.node.declaration) {
      (function () {
        var name = void 0;
        var type = 'named';
        var file = _this.file;

        if (p.node.declaration.id) {
          name = p.node.declaration.id.name;
          _addMapping(_this.map, {
            name: name,
            file: file,
            type: type
          });
        }

        if (p.node.declaration.declarations) {
          p.node.declaration.declarations.forEach(function (d) {
            _addMapping(_this.map, {
              type: type,
              file: file,
              name: d.id.name
            });
          });
        }
      })();
    }
  }
};

var babylonPlugins = ['asyncFunctions', 'asyncGenerators', 'classConstructorCall', 'classProperties', 'decorators', 'doExpressions', 'exponentiationOperator', 'exportExtensions', 'flow', 'functionSent', 'functionBind', 'jsx', 'objectRestSpread', 'trailingFunctionCommas'];

exports.default = function () {
  var _ref2 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(files) {
    var promises;
    return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            promises = files.map(function (file) {
              return _fs2.default.readFile(file, 'utf8').then(function (source) {
                return [file, source];
              });
            });

            debug('Parsing... ', promises.length);
            return _context.abrupt('return', Promise.all(promises).then(function (_ref3) {
              var _ref4 = _toArray(_ref3),
                  sources = _ref4;

              var map = {};
              sources.forEach(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2),
                    file = _ref6[0],
                    source = _ref6[1];

                try {
                  var ast = (0, _babylon.parse)(source, {
                    sourceType: 'module',
                    plugins: babylonPlugins
                  });
                  (0, _babelTraverse2.default)(ast, BabylonVisitor, null, { file: file, map: map });
                } catch (err) {
                  debug('Caught syntax error', err);
                }
              });
              debug('done traverse');
              return map;
            }, function (err) {
              return debug('error', err);
            }).then(function (map) {
              return map;
            }).catch(function (err) {
              return debug(err);
            }));

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=parseExports.js.map