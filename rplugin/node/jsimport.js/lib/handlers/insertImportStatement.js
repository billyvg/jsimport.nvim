'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _constants = require('../constants');

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _getImportPath = require('../getImportPath');

var _getImportPath2 = _interopRequireDefault(_getImportPath);

var _getImportString = require('../getImportString');

var _getImportString2 = _interopRequireDefault(_getImportString);

var _ExportsList = require('../ExportsList');

var _ExportsList2 = _interopRequireDefault(_ExportsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line

var insertImportStatement = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(nvim, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
        filename = _ref3[0];

    var _ref4, word, menu, context, importPath, buffer, template;

    return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return nvim.getVvar('completed_item');

          case 2:
            _context.t0 = _context.sent;

            if (_context.t0) {
              _context.next = 5;
              break;
            }

            _context.t0 = {};

          case 5:
            _ref4 = _context.t0;
            word = _ref4.word;
            menu = _ref4.menu;
            context = void 0;

            if (!(word && menu.indexOf(_constants.MENU_STR) > -1)) {
              _context.next = 30;
              break;
            }

            _logger2.default.debug('insertImport: ' + filename + ' ' + word);

            _context.prev = 11;
            _context.next = 14;
            return _ExportsList2.default.getWord(word);

          case 14:
            context = _context.sent;
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t1 = _context['catch'](11);

            _logger2.default.error('Error retrieving "' + word + '" from database', { nvim: nvim, err: _context.t1 });

          case 20:
            if (!context) {
              _context.next = 29;
              break;
            }

            if (!(context && context.file && filename !== context.file)) {
              _context.next = 27;
              break;
            }

            importPath = (0, _getImportPath2.default)(filename, context.file);
            _context.next = 25;
            return nvim.getCurrentBuffer();

          case 25:
            buffer = _context.sent;


            if (buffer) {
              template = (0, _getImportString2.default)(nvim, { buffer: buffer, word: word, importPath: importPath, context: context });


              if (template) {
                try {
                  buffer.insert(0, template);
                } catch (err) {
                  _logger2.default.error('Error inserting line into buffer', { nvim: nvim, err: err });
                }
              }
            }

          case 27:
            _context.next = 30;
            break;

          case 29:
            _logger2.default.debug('Word not found in db: ' + word, { nvim: nvim });

          case 30:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[11, 17]]);
  }));

  return function insertImportStatement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = insertImportStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9pbnNlcnRJbXBvcnRTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiaW5zZXJ0SW1wb3J0U3RhdGVtZW50IiwibnZpbSIsImZpbGVuYW1lIiwiZ2V0VnZhciIsIndvcmQiLCJtZW51IiwiY29udGV4dCIsImluZGV4T2YiLCJkZWJ1ZyIsImdldFdvcmQiLCJlcnJvciIsImVyciIsImZpbGUiLCJpbXBvcnRQYXRoIiwiZ2V0Q3VycmVudEJ1ZmZlciIsImJ1ZmZlciIsInRlbXBsYXRlIiwiaW5zZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OzsyY0FSc0Q7O0FBVXRELElBQU1BO0FBQUEsaUVBQXdCLGlCQUFlQyxJQUFmO0FBQUE7QUFBQSxRQUFzQkMsUUFBdEI7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUlsQkQsS0FBS0UsT0FBTCxDQUFhLGdCQUFiLENBSmtCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMEJBSWdCLEVBSmhCOztBQUFBO0FBQUE7QUFFMUJDLGdCQUYwQixTQUUxQkEsSUFGMEI7QUFHMUJDLGdCQUgwQixTQUcxQkEsSUFIMEI7QUFLeEJDLG1CQUx3Qjs7QUFBQSxrQkFPeEJGLFFBQVFDLEtBQUtFLE9BQUwsd0JBQXlCLENBQUMsQ0FQVjtBQUFBO0FBQUE7QUFBQTs7QUFRMUIsNkJBQU9DLEtBQVAsb0JBQThCTixRQUE5QixTQUEwQ0UsSUFBMUM7O0FBUjBCO0FBQUE7QUFBQSxtQkFXUixzQkFBR0ssT0FBSCxDQUFXTCxJQUFYLENBWFE7O0FBQUE7QUFXeEJFLG1CQVh3QjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQWF4Qiw2QkFBT0ksS0FBUCx3QkFBa0NOLElBQWxDLHNCQUF5RCxFQUFFSCxVQUFGLEVBQVFVLGdCQUFSLEVBQXpEOztBQWJ3QjtBQUFBLGlCQWdCdEJMLE9BaEJzQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFtQnBCQSxXQUFXQSxRQUFRTSxJQUFuQixJQUEyQlYsYUFBYUksUUFBUU0sSUFuQjVCO0FBQUE7QUFBQTtBQUFBOztBQW9CaEJDLHNCQXBCZ0IsR0FvQkgsNkJBQWNYLFFBQWQsRUFBd0JJLFFBQVFNLElBQWhDLENBcEJHO0FBQUE7QUFBQSxtQkFxQkRYLEtBQUthLGdCQUFMLEVBckJDOztBQUFBO0FBcUJoQkMsa0JBckJnQjs7O0FBdUJ0QixnQkFBSUEsTUFBSixFQUFZO0FBQ05DLHNCQURNLEdBQ0ssK0JBQWdCZixJQUFoQixFQUFzQixFQUFFYyxjQUFGLEVBQVVYLFVBQVYsRUFBZ0JTLHNCQUFoQixFQUE0QlAsZ0JBQTVCLEVBQXRCLENBREw7OztBQUdWLGtCQUFJVSxRQUFKLEVBQWM7QUFDWixvQkFBSTtBQUNGRCx5QkFBT0UsTUFBUCxDQUFjLENBQWQsRUFBaUJELFFBQWpCO0FBQ0QsaUJBRkQsQ0FFRSxPQUFPTCxHQUFQLEVBQVk7QUFDWixtQ0FBT0QsS0FBUCxDQUFhLGtDQUFiLEVBQWlELEVBQUVULFVBQUYsRUFBUVUsUUFBUixFQUFqRDtBQUNEO0FBQ0Y7QUFDRjs7QUFqQ3FCO0FBQUE7QUFBQTs7QUFBQTtBQW9DeEIsNkJBQU9ILEtBQVAsNEJBQXNDSixJQUF0QyxFQUE4QyxFQUFFSCxVQUFGLEVBQTlDOztBQXBDd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7a0JBeUNlRCxxQiIsImZpbGUiOiJpbnNlcnRJbXBvcnRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmltcG9ydCB7XG4gIE1FTlVfU1RSLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IGdldEltcG9ydFBhdGggZnJvbSAnLi4vZ2V0SW1wb3J0UGF0aCc7XG5pbXBvcnQgZ2V0SW1wb3J0U3RyaW5nIGZyb20gJy4uL2dldEltcG9ydFN0cmluZyc7XG5pbXBvcnQgZGIgZnJvbSAnLi4vRXhwb3J0c0xpc3QnO1xuXG5jb25zdCBpbnNlcnRJbXBvcnRTdGF0ZW1lbnQgPSBhc3luYyBmdW5jdGlvbihudmltLCBbZmlsZW5hbWVdKSB7XG4gIGNvbnN0IHtcbiAgICB3b3JkLFxuICAgIG1lbnUsXG4gIH0gPSBhd2FpdCBudmltLmdldFZ2YXIoJ2NvbXBsZXRlZF9pdGVtJykgfHwge307XG4gIGxldCBjb250ZXh0O1xuXG4gIGlmICh3b3JkICYmIG1lbnUuaW5kZXhPZihNRU5VX1NUUikgPiAtMSkge1xuICAgIGxvZ2dlci5kZWJ1ZyhgaW5zZXJ0SW1wb3J0OiAke2ZpbGVuYW1lfSAke3dvcmR9YCk7XG5cbiAgICB0cnkge1xuICAgICAgY29udGV4dCA9IGF3YWl0IGRiLmdldFdvcmQod29yZCk7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIGxvZ2dlci5lcnJvcihgRXJyb3IgcmV0cmlldmluZyBcIiR7d29yZH1cIiBmcm9tIGRhdGFiYXNlYCwgeyBudmltLCBlcnIgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIC8vIFdlIGhhdmUgdGhlIGZpbGUgYW5kIGltcG9ydCwgY2hlY2sgY3VycmVudCBmaWxlJ3MgaW1wb3J0cyBhbmQgaW1wb3J0IGlmIG5vdCBmb3VuZFxuICAgICAgLy8gQWxzbyBtYWtlIHN1cmUgdGFyZ2V0IGltcG9ydCBmaWxlIGlzbid0IGN1cnJlbnQgYnVmZmVyXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LmZpbGUgJiYgZmlsZW5hbWUgIT09IGNvbnRleHQuZmlsZSkge1xuICAgICAgICBjb25zdCBpbXBvcnRQYXRoID0gZ2V0SW1wb3J0UGF0aChmaWxlbmFtZSwgY29udGV4dC5maWxlKTtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgbnZpbS5nZXRDdXJyZW50QnVmZmVyKCk7XG5cbiAgICAgICAgaWYgKGJ1ZmZlcikge1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IGdldEltcG9ydFN0cmluZyhudmltLCB7IGJ1ZmZlciwgd29yZCwgaW1wb3J0UGF0aCwgY29udGV4dCB9KTtcblxuICAgICAgICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYnVmZmVyLmluc2VydCgwLCB0ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdFcnJvciBpbnNlcnRpbmcgbGluZSBpbnRvIGJ1ZmZlcicsIHsgbnZpbSwgZXJyIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIuZGVidWcoYFdvcmQgbm90IGZvdW5kIGluIGRiOiAke3dvcmR9YCwgeyBudmltIH0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zZXJ0SW1wb3J0U3RhdGVtZW50O1xuIl19