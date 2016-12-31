'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _babylon = require('babylon');

var _babelTraverse = require('babel-traverse');

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

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
  var _ref2 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(files, nvim) {
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

            _logger2.default.debug('Parsing...' + promises.length);
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
                  _logger2.default.error('Syntax error while parsing AST', { err: err, nvim: nvim });
                }
              });
              _logger2.default.debug('Done traverse');
              return map;
            }, function (err) {
              return _logger2.default.error('Caught promise error reading files', { nvim: nvim, err: err });
            }).catch(function (err) {
              return debug('Error in parseExports', { nvim: nvim, err: err });
            }));

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZUV4cG9ydHMuanMiXSwibmFtZXMiOlsiX2FkZE1hcHBpbmciLCJvYmoiLCJuYW1lIiwiZmlsZSIsInR5cGUiLCJCYWJ5bG9uVmlzaXRvciIsIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvbiIsInAiLCJub2RlIiwiZGVjbGFyYXRpb24iLCJpZCIsInBhcnNlIiwibWFwIiwiRXhwb3J0TmFtZWREZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9ucyIsImZvckVhY2giLCJkIiwiYmFieWxvblBsdWdpbnMiLCJmaWxlcyIsIm52aW0iLCJwcm9taXNlcyIsInJlYWRGaWxlIiwidGhlbiIsInNvdXJjZSIsImRlYnVnIiwibGVuZ3RoIiwiUHJvbWlzZSIsImFsbCIsInNvdXJjZXMiLCJhc3QiLCJzb3VyY2VUeXBlIiwicGx1Z2lucyIsImVyciIsImVycm9yIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7MmNBSnNEOzs7QUFNdEQsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsUUFBK0I7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDakRILE1BQUlDLElBQUosSUFBWTtBQUNWQSxjQURVO0FBRVZDLGNBRlU7QUFHVkM7QUFIVSxHQUFaO0FBS0QsQ0FORDs7QUFRQSxJQUFNQyxpQkFBaUI7QUFDckJDLDBCQURxQixvQ0FDSUMsQ0FESixDQUNLLFdBREwsRUFDa0I7QUFDckMsUUFBSUEsRUFBRUMsSUFBRixJQUFVRCxFQUFFQyxJQUFGLENBQU9DLFdBQXJCLEVBQWtDO0FBQ2hDLFVBQUlQLGFBQUo7QUFDQSxVQUFJSyxFQUFFQyxJQUFGLENBQU9DLFdBQVAsQ0FBbUJDLEVBQXZCLEVBQTJCO0FBQ3pCUixlQUFPSyxFQUFFQyxJ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YixVQUFQLEVBQS9DO0FBQ0Q7QUFDRixlQVZEO0FBV0EsK0JBQU9LLEtBQVAsQ0FBYSxlQUFiO0FBQ0EscUJBQU9aLEdBQVA7QUFDRCxhQWZNLEVBZUosVUFBQ29CLEdBQUQ7QUFBQSxxQkFBUyxpQkFBT0MsS0FBUCxDQUFhLG9DQUFiLEVBQW1ELEVBQUVkLFVBQUYsRUFBUWEsUUFBUixFQUFuRCxDQUFUO0FBQUEsYUFmSSxFQWdCTkUsS0FoQk0sQ0FnQkEsVUFBQ0YsR0FBRDtBQUFBLHFCQUFTUixNQUFNLHVCQUFOLEVBQStCLEVBQUVMLFVBQUYsRUFBUWEsUUFBUixFQUEvQixDQUFUO0FBQUEsYUFoQkEsQ0FITTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InBhcnNlRXhwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IHsgcGFyc2UgYXMgYmFieWxvblBhcnNlIH0gZnJvbSAnYmFieWxvbic7XG5pbXBvcnQgdHJhdmVyc2UgZnJvbSAnYmFiZWwtdHJhdmVyc2UnO1xuaW1wb3J0IGZzIGZyb20gJ216L2ZzJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG5jb25zdCBfYWRkTWFwcGluZyA9IChvYmosIHsgbmFtZSwgZmlsZSwgdHlwZSB9KSA9PiB7XG4gIG9ialtuYW1lXSA9IHtcbiAgICBuYW1lLFxuICAgIGZpbGUsXG4gICAgdHlwZSxcbiAgfTtcbn07XG5cbmNvbnN0IEJhYnlsb25WaXNpdG9yID0ge1xuICBFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24ocC8qLCBzdGF0ZSovKSB7XG4gICAgaWYgKHAubm9kZSAmJiBwLm5vZGUuZGVjbGFyYXRpb24pIHtcbiAgICAgIGxldCBuYW1lO1xuICAgICAgaWYgKHAubm9kZS5kZWNsYXJhdGlvbi5pZCkge1xuICAgICAgICBuYW1lID0gcC5ub2RlLmRlY2xhcmF0aW9uLmlkLm5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYW1lID0gcGF0aC5wYXJzZSh0aGlzLmZpbGUpLm5hbWU7XG4gICAgICB9XG5cbiAgICAgIF9hZGRNYXBwaW5nKHRoaXMubWFwLCB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGZpbGU6IHRoaXMuZmlsZSxcbiAgICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIEV4cG9ydE5hbWVkRGVjbGFyYXRpb24ocCkge1xuICAgIGlmIChwLm5vZGUgJiYgcC5ub2RlLmRlY2xhcmF0aW9uKSB7XG4gICAgICBsZXQgbmFtZTtcbiAgICAgIGNvbnN0IHR5cGUgPSAnbmFtZWQnO1xuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuZmlsZTtcblxuICAgICAgaWYgKHAubm9kZS5kZWNsYXJhdGlvbi5pZCkge1xuICAgICAgICBuYW1lID0gcC5ub2RlLmRlY2xhcmF0aW9uLmlkLm5hbWU7XG4gICAgICAgIF9hZGRNYXBwaW5nKHRoaXMubWFwLCB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocC5ub2RlLmRlY2xhcmF0aW9uLmRlY2xhcmF0aW9ucykge1xuICAgICAgICBwLm5vZGUuZGVjbGFyYXRpb24uZGVjbGFyYXRpb25zLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICBfYWRkTWFwcGluZyh0aGlzLm1hcCwge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICBuYW1lOiBkLmlkLm5hbWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfVxuICB9LFxufTtcblxuY29uc3QgYmFieWxvblBsdWdpbnMgPSBbXG4gICdhc3luY0Z1bmN0aW9ucycsXG4gICdhc3luY0dlbmVyYXRvcnMnLFxuICAnY2xhc3NDb25zdHJ1Y3RvckNhbGwnLFxuICAnY2xhc3NQcm9wZXJ0aWVzJyxcbiAgJ2RlY29yYXRvcnMnLFxuICAnZG9FeHByZXNzaW9ucycsXG4gICdleHBvbmVudGlhdGlvbk9wZXJhdG9yJyxcbiAgJ2V4cG9ydEV4dGVuc2lvbnMnLFxuICAnZmxvdycsXG4gICdmdW5jdGlvblNlbnQnLFxuICAnZnVuY3Rpb25CaW5kJyxcbiAgJ2pzeCcsXG4gICdvYmplY3RSZXN0U3ByZWFkJyxcbiAgJ3RyYWlsaW5nRnVuY3Rpb25Db21tYXMnLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGZpbGVzOiBBcnJheTxzdHJpbmc+LCBudmltKSA9PiB7XG4gIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPFtzdHJpbmcsIHN0cmluZ10+PiA9IGZpbGVzLm1hcCgoZmlsZSkgPT4gZnMucmVhZEZpbGUoZmlsZSwgJ3V0ZjgnKS50aGVuKChzb3VyY2UpID0+IFtmaWxlLCBzb3VyY2VdKSk7XG4gIGxvZ2dlci5kZWJ1ZyhgUGFyc2luZy4uLiR7cHJvbWlzZXMubGVuZ3RofWApO1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKFsuLi5zb3VyY2VzXSkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IHt9O1xuICAgIHNvdXJjZXMuZm9yRWFjaCgoW2ZpbGUsIHNvdXJjZV0pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFzdCA9IGJhYnlsb25QYXJzZShzb3VyY2UsIHtcbiAgICAgICAgICBzb3VyY2VUeXBlOiAnbW9kdWxlJyxcbiAgICAgICAgICBwbHVnaW5zOiBiYWJ5bG9uUGx1Z2lucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRyYXZlcnNlKGFzdCwgQmFieWxvblZpc2l0b3IsIG51bGwsIHsgZmlsZSwgbWFwIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcignU3ludGF4IGVycm9yIHdoaWxlIHBhcnNpbmcgQVNUJywgeyBlcnIsIG52aW0gfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbG9nZ2VyLmRlYnVnKCdEb25lIHRyYXZlcnNlJyk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSwgKGVycikgPT4gbG9nZ2VyLmVycm9yKCdDYXVnaHQgcHJvbWlzZSBlcnJvciByZWFkaW5nIGZpbGVzJywgeyBudmltLCBlcnIgfSkpXG4gIC5jYXRjaCgoZXJyKSA9PiBkZWJ1ZygnRXJyb3IgaW4gcGFyc2VFeHBvcnRzJywgeyBudmltLCBlcnIgfSkpO1xufTtcbiJdfQ==