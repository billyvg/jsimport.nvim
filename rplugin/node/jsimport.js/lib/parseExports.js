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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZUV4cG9ydHMuanMiXSwibmFtZXMiOlsiX2FkZE1hcHBpbmciLCJvYmoiLCJuYW1lIiwiZmlsZSIsInR5cGUiLCJCYWJ5bG9uVmlzaXRvciIsIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvbiIsInAiLCJub2RlIiwiZGVjbGFyYXRpb24iLCJpZCIsInBhcnNlIiwibWFwIiwiRXhwb3J0TmFtZWREZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9ucyIsImZvckVhY2giLCJkIiwiYmFieWxvblBsdWdpbnMiLCJmaWxlcyIsInByb21pc2VzIiwicmVhZEZpbGUiLCJ0aGVuIiwic291cmNlIiwiZGVidWciLCJsZW5ndGgiLCJQcm9taXNlIiwiYWxsIiwic291cmNlcyIsImFzdCIsInNvdXJjZVR5cGUiLCJwbHVnaW5zIiwiZXJyIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OzJjQUpzRDs7O0FBTXRELElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxHQUFELFFBQStCO0FBQUEsTUFBdkJDLElBQXVCLFFBQXZCQSxJQUF1QjtBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ2pESCxNQUFJQyxJQUFKLElBQVk7QUFDVkEsY0FEVTtBQUVWQyxjQUZVO0FBR1ZDO0FBSFUsR0FBWjtBQUtELENBTkQ7O0FBUUEsSUFBTUMsaUJBQWlCO0FBQ3JCQywwQkFEcUIsb0NBQ0lDLENBREosQ0FDSyxXQURMLEVBQ2tCO0FBQ3JDLFFBQUlBLEVBQUVDLElBQUYsSUFBVUQsRUFBRUMsSUFBRixDQUFPQyxXQUFyQixFQUFrQztBQUNoQyxVQUFJUCxhQUFKO0FBQ0EsVUFBSUssRUFBRUMsSUFBRixDQUFPQyxXQUFQLENBQW1CQyxFQUF2QixFQUEyQjtBQUN6QlIsZUFBT0ssRUFBRUMsSUFBRixDQUFPQyxXQUFQLENBQW1CQyxF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RUFlSixVQUFDbUIsR0FBRDtBQUFBLHFCQUFTUixNQUFNLE9BQU4sRUFBZVEsR0FBZixDQUFUO0FBQUEsYUFmSSxFQWdCTlYsSUFoQk0sQ0FnQkQsVUFBQ1QsR0FBRCxFQUFTO0FBQ2IscUJBQU9BLEdBQVA7QUFDRCxhQWxCTSxFQW1CTm9CLEtBbkJNLENBbUJBLFVBQUNELEdBQUQ7QUFBQSxxQkFBU1IsTUFBTVEsR0FBTixDQUFUO0FBQUEsYUFuQkEsQ0FITTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InBhcnNlRXhwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCB7IHBhcnNlIGFzIGJhYnlsb25QYXJzZSB9IGZyb20gJ2JhYnlsb24nO1xuaW1wb3J0IHRyYXZlcnNlIGZyb20gJ2JhYmVsLXRyYXZlcnNlJztcbmltcG9ydCBmcyBmcm9tICdtei9mcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgX2FkZE1hcHBpbmcgPSAob2JqLCB7IG5hbWUsIGZpbGUsIHR5cGUgfSkgPT4ge1xuICBvYmpbbmFtZV0gPSB7XG4gICAgbmFtZSxcbiAgICBmaWxlLFxuICAgIHR5cGUsXG4gIH07XG59O1xuXG5jb25zdCBCYWJ5bG9uVmlzaXRvciA9IHtcbiAgRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKHAvKiwgc3RhdGUqLykge1xuICAgIGlmIChwLm5vZGUgJiYgcC5ub2RlLmRlY2xhcmF0aW9uKSB7XG4gICAgICBsZXQgbmFtZTtcbiAgICAgIGlmIChwLm5vZGUuZGVjbGFyYXRpb24uaWQpIHtcbiAgICAgICAgbmFtZSA9IHAubm9kZS5kZWNsYXJhdGlvbi5pZC5uYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZSA9IHBhdGgucGFyc2UodGhpcy5maWxlKS5uYW1lO1xuICAgICAgfVxuXG4gICAgICBfYWRkTWFwcGluZyh0aGlzLm1hcCwge1xuICAgICAgICBuYW1lLFxuICAgICAgICBmaWxlOiB0aGlzLmZpbGUsXG4gICAgICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBFeHBvcnROYW1lZERlY2xhcmF0aW9uKHApIHtcbiAgICBpZiAocC5ub2RlICYmIHAubm9kZS5kZWNsYXJhdGlvbikge1xuICAgICAgbGV0IG5hbWU7XG4gICAgICBjb25zdCB0eXBlID0gJ25hbWVkJztcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbGU7XG5cbiAgICAgIGlmIChwLm5vZGUuZGVjbGFyYXRpb24uaWQpIHtcbiAgICAgICAgbmFtZSA9IHAubm9kZS5kZWNsYXJhdGlvbi5pZC5uYW1lO1xuICAgICAgICBfYWRkTWFwcGluZyh0aGlzLm1hcCwge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZmlsZSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHAubm9kZS5kZWNsYXJhdGlvbi5kZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgcC5ub2RlLmRlY2xhcmF0aW9uLmRlY2xhcmF0aW9ucy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgICAgX2FkZE1hcHBpbmcodGhpcy5tYXAsIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgbmFtZTogZC5pZC5uYW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH1cbiAgfSxcbn07XG5cbmNvbnN0IGJhYnlsb25QbHVnaW5zID0gW1xuICAnYXN5bmNGdW5jdGlvbnMnLFxuICAnYXN5bmNHZW5lcmF0b3JzJyxcbiAgJ2NsYXNzQ29uc3RydWN0b3JDYWxsJyxcbiAgJ2NsYXNzUHJvcGVydGllcycsXG4gICdkZWNvcmF0b3JzJyxcbiAgJ2RvRXhwcmVzc2lvbnMnLFxuICAnZXhwb25lbnRpYXRpb25PcGVyYXRvcicsXG4gICdleHBvcnRFeHRlbnNpb25zJyxcbiAgJ2Zsb3cnLFxuICAnZnVuY3Rpb25TZW50JyxcbiAgJ2Z1bmN0aW9uQmluZCcsXG4gICdqc3gnLFxuICAnb2JqZWN0UmVzdFNwcmVhZCcsXG4gICd0cmFpbGluZ0Z1bmN0aW9uQ29tbWFzJyxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChmaWxlcykgPT4ge1xuICBjb25zdCBwcm9taXNlcyA9IGZpbGVzLm1hcCgoZmlsZSkgPT4gZnMucmVhZEZpbGUoZmlsZSwgJ3V0ZjgnKS50aGVuKChzb3VyY2UpID0+IFtmaWxlLCBzb3VyY2VdKSk7XG4gIGRlYnVnKCdQYXJzaW5nLi4uICcsIHByb21pc2VzLmxlbmd0aCk7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoWy4uLnNvdXJjZXNdKSA9PiB7XG4gICAgY29uc3QgbWFwID0ge307XG4gICAgc291cmNlcy5mb3JFYWNoKChbZmlsZSwgc291cmNlXSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXN0ID0gYmFieWxvblBhcnNlKHNvdXJjZSwge1xuICAgICAgICAgIHNvdXJjZVR5cGU6ICdtb2R1bGUnLFxuICAgICAgICAgIHBsdWdpbnM6IGJhYnlsb25QbHVnaW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgdHJhdmVyc2UoYXN0LCBCYWJ5bG9uVmlzaXRvciwgbnVsbCwgeyBmaWxlLCBtYXAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZGVidWcoJ0NhdWdodCBzeW50YXggZXJyb3InLCBlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRlYnVnKCdkb25lIHRyYXZlcnNlJyk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSwgKGVycikgPT4gZGVidWcoJ2Vycm9yJywgZXJyKSlcbiAgLnRoZW4oKG1hcCkgPT4ge1xuICAgIHJldHVybiBtYXA7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiBkZWJ1ZyhlcnIpKTtcbn07XG4iXX0=