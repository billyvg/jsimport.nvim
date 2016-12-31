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
                  _logger2.default.error(file + ': Syntax error while parsing AST', { err: err, nvim: nvim });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZUV4cG9ydHMuanMiXSwibmFtZXMiOlsiX2FkZE1hcHBpbmciLCJvYmoiLCJuYW1lIiwiZmlsZSIsInR5cGUiLCJCYWJ5bG9uVmlzaXRvciIsIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvbiIsInAiLCJub2RlIiwiZGVjbGFyYXRpb24iLCJpZCIsInBhcnNlIiwibWFwIiwiRXhwb3J0TmFtZWREZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9ucyIsImZvckVhY2giLCJkIiwiYmFieWxvblBsdWdpbnMiLCJmaWxlcyIsIm52aW0iLCJwcm9taXNlcyIsInJlYWRGaWxlIiwidGhlbiIsInNvdXJjZSIsImRlYnVnIiwibGVuZ3RoIiwiUHJvbWlzZSIsImFsbCIsInNvdXJjZXMiLCJhc3QiLCJzb3VyY2VUeXBlIiwicGx1Z2lucyIsImVyciIsImVycm9yIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7MmNBSnNEOzs7QUFNdEQsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsUUFBK0I7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDakRILE1BQUlDLElBQUosSUFBWTtBQUNWQSxjQURVO0FBRVZDLGNBRlU7QUFHVkM7QUFIVSxHQUFaO0FBS0QsQ0FORDs7QUFRQSxJQUFNQyxpQkFBaUI7QUFDckJDLDBCQURxQixvQ0FDSUMsQ0FESixDQUNLLFdBREwsRUFDa0I7QUFDckMsUUFBSUEsRUFBRUMsSUFBRixJQUFVRCxFQUFFQyxJQUFGLENBQU9DLFdBQXJCLEVBQWtDO0FBQ2hDLFVBQUlQLGFBQUo7QUFDQSxVQUFJSyxFQUFFQyxJQUFGLENBQU9DLFdBQVAsQ0FBbUJDLEVBQXZCLEVBQTJCO0FBQ3pCUixlQUFPSyxFQUFFQyxJ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LEVBQU9iLFVBQVAsRUFBeEQ7QUFDRDtBQUNGLGVBVkQ7QUFXQSwrQkFBT0ssS0FBUCxDQUFhLGVBQWI7QUFDQSxxQkFBT1osR0FBUDtBQUNELGFBZk0sRUFlSixVQUFDb0IsR0FBRDtBQUFBLHFCQUFTLGlCQUFPQyxLQUFQLENBQWEsb0NBQWIsRUFBbUQsRUFBRWQsVUFBRixFQUFRYSxRQUFSLEVBQW5ELENBQVQ7QUFBQSxhQWZJLEVBZ0JORSxLQWhCTSxDQWdCQSxVQUFDRixHQUFEO0FBQUEscUJBQVNSLE1BQU0sdUJBQU4sRUFBK0IsRUFBRUwsVUFBRixFQUFRYSxRQUFSLEVBQS9CLENBQVQ7QUFBQSxhQWhCQSxDQUhNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoicGFyc2VFeHBvcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5pbXBvcnQgeyBwYXJzZSBhcyBiYWJ5bG9uUGFyc2UgfSBmcm9tICdiYWJ5bG9uJztcbmltcG9ydCB0cmF2ZXJzZSBmcm9tICdiYWJlbC10cmF2ZXJzZSc7XG5pbXBvcnQgZnMgZnJvbSAnbXovZnMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbmNvbnN0IF9hZGRNYXBwaW5nID0gKG9iaiwgeyBuYW1lLCBmaWxlLCB0eXBlIH0pID0+IHtcbiAgb2JqW25hbWVdID0ge1xuICAgIG5hbWUsXG4gICAgZmlsZSxcbiAgICB0eXBlLFxuICB9O1xufTtcblxuY29uc3QgQmFieWxvblZpc2l0b3IgPSB7XG4gIEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbihwLyosIHN0YXRlKi8pIHtcbiAgICBpZiAocC5ub2RlICYmIHAubm9kZS5kZWNsYXJhdGlvbikge1xuICAgICAgbGV0IG5hbWU7XG4gICAgICBpZiAocC5ub2RlLmRlY2xhcmF0aW9uLmlkKSB7XG4gICAgICAgIG5hbWUgPSBwLm5vZGUuZGVjbGFyYXRpb24uaWQubmFtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUgPSBwYXRoLnBhcnNlKHRoaXMuZmlsZSkubmFtZTtcbiAgICAgIH1cblxuICAgICAgX2FkZE1hcHBpbmcodGhpcy5tYXAsIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZmlsZTogdGhpcy5maWxlLFxuICAgICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgRXhwb3J0TmFtZWREZWNsYXJhdGlvbihwKSB7XG4gICAgaWYgKHAubm9kZSAmJiBwLm5vZGUuZGVjbGFyYXRpb24pIHtcbiAgICAgIGxldCBuYW1lO1xuICAgICAgY29uc3QgdHlwZSA9ICduYW1lZCc7XG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlO1xuXG4gICAgICBpZiAocC5ub2RlLmRlY2xhcmF0aW9uLmlkKSB7XG4gICAgICAgIG5hbWUgPSBwLm5vZGUuZGVjbGFyYXRpb24uaWQubmFtZTtcbiAgICAgICAgX2FkZE1hcHBpbmcodGhpcy5tYXAsIHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwLm5vZGUuZGVjbGFyYXRpb24uZGVjbGFyYXRpb25zKSB7XG4gICAgICAgIHAubm9kZS5kZWNsYXJhdGlvbi5kZWNsYXJhdGlvbnMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICAgIF9hZGRNYXBwaW5nKHRoaXMubWFwLCB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgIG5hbWU6IGQuaWQubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9XG4gIH0sXG59O1xuXG5jb25zdCBiYWJ5bG9uUGx1Z2lucyA9IFtcbiAgJ2FzeW5jRnVuY3Rpb25zJyxcbiAgJ2FzeW5jR2VuZXJhdG9ycycsXG4gICdjbGFzc0NvbnN0cnVjdG9yQ2FsbCcsXG4gICdjbGFzc1Byb3BlcnRpZXMnLFxuICAnZGVjb3JhdG9ycycsXG4gICdkb0V4cHJlc3Npb25zJyxcbiAgJ2V4cG9uZW50aWF0aW9uT3BlcmF0b3InLFxuICAnZXhwb3J0RXh0ZW5zaW9ucycsXG4gICdmbG93JyxcbiAgJ2Z1bmN0aW9uU2VudCcsXG4gICdmdW5jdGlvbkJpbmQnLFxuICAnanN4JyxcbiAgJ29iamVjdFJlc3RTcHJlYWQnLFxuICAndHJhaWxpbmdGdW5jdGlvbkNvbW1hcycsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoZmlsZXM6IEFycmF5PHN0cmluZz4sIG52aW0pID0+IHtcbiAgY29uc3QgcHJvbWlzZXM6IEFycmF5PFByb21pc2U8W3N0cmluZywgc3RyaW5nXT4+ID0gZmlsZXMubWFwKChmaWxlKSA9PiBmcy5yZWFkRmlsZShmaWxlLCAndXRmOCcpLnRoZW4oKHNvdXJjZSkgPT4gW2ZpbGUsIHNvdXJjZV0pKTtcbiAgbG9nZ2VyLmRlYnVnKGBQYXJzaW5nLi4uJHtwcm9taXNlcy5sZW5ndGh9YCk7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoWy4uLnNvdXJjZXNdKSA9PiB7XG4gICAgY29uc3QgbWFwID0ge307XG4gICAgc291cmNlcy5mb3JFYWNoKChbZmlsZSwgc291cmNlXSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXN0ID0gYmFieWxvblBhcnNlKHNvdXJjZSwge1xuICAgICAgICAgIHNvdXJjZVR5cGU6ICdtb2R1bGUnLFxuICAgICAgICAgIHBsdWdpbnM6IGJhYnlsb25QbHVnaW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgdHJhdmVyc2UoYXN0LCBCYWJ5bG9uVmlzaXRvciwgbnVsbCwgeyBmaWxlLCBtYXAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGAke2ZpbGV9OiBTeW50YXggZXJyb3Igd2hpbGUgcGFyc2luZyBBU1RgLCB7IGVyciwgbnZpbSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsb2dnZXIuZGVidWcoJ0RvbmUgdHJhdmVyc2UnKTtcbiAgICByZXR1cm4gbWFwO1xuICB9LCAoZXJyKSA9PiBsb2dnZXIuZXJyb3IoJ0NhdWdodCBwcm9taXNlIGVycm9yIHJlYWRpbmcgZmlsZXMnLCB7IG52aW0sIGVyciB9KSlcbiAgLmNhdGNoKChlcnIpID0+IGRlYnVnKCdFcnJvciBpbiBwYXJzZUV4cG9ydHMnLCB7IG52aW0sIGVyciB9KSk7XG59O1xuIl19