'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

var _constants = require('./constants');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _getImportPath = require('./getImportPath');

var _getImportPath2 = _interopRequireDefault(_getImportPath);

var _getImportString = require('./getImportString');

var _getImportString2 = _interopRequireDefault(_getImportString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line


var MAP = void 0;

var insertImportStatement = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(nvim, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
        filename = _ref3[0];

    var _ref4, word, menu, parsedResults, results, context, importPath, buffer, template;

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
            parsedResults = void 0;
            results = void 0;

            if (!(word && menu.indexOf(_constants.MENU_STR) > -1)) {
              _context.next = 36;
              break;
            }

            _logger2.default.debug('insertImport: ' + filename + ' ' + word);

            _context.prev = 12;

            if (!MAP) {
              _context.next = 18;
              break;
            }

            parsedResults = MAP;
            _logger2.default.debug('Using cached results');
            _context.next = 23;
            break;

          case 18:
            _context.next = 20;
            return _fs2.default.readFile(_constants.CACHE_FILENAME, 'utf8');

          case 20:
            results = _context.sent;

            MAP = parsedResults = JSON.parse(results);
            _logger2.default.debug('Loading cached results from fs');

          case 23:
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t1 = _context['catch'](12);

            _logger2.default.error('Error parsing cache', { nvim: nvim, err: _context.t1 });

          case 28:
            if (!(parsedResults && parsedResults[word])) {
              _context.next = 36;
              break;
            }

            context = parsedResults[word];
            // We have the file and import, check current file's imports and import if not found
            // Also make sure target import file isn't current buffer

            if (!(context && context.file && filename !== context.file)) {
              _context.next = 36;
              break;
            }

            importPath = (0, _getImportPath2.default)(filename, context.file);
            _context.next = 34;
            return nvim.getCurrentBuffer();

          case 34:
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

          case 36:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[12, 25]]);
  }));

  return function insertImportStatement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = insertImportStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnNlcnRJbXBvcnRTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiTUFQIiwiaW5zZXJ0SW1wb3J0U3RhdGVtZW50IiwibnZpbSIsImZpbGVuYW1lIiwiZ2V0VnZhciIsIndvcmQiLCJtZW51IiwicGFyc2VkUmVzdWx0cyIsInJlc3VsdHMiLCJpbmRleE9mIiwiZGVidWciLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiZXJyIiwiY29udGV4dCIsImZpbGUiLCJpbXBvcnRQYXRoIiwiZ2V0Q3VycmVudEJ1ZmZlciIsImJ1ZmZlciIsInRlbXBsYXRlIiwiaW5zZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OzsyY0FUc0Q7OztBQVd0RCxJQUFJQSxZQUFKOztBQUVBLElBQU1DO0FBQUEsaUVBQXdCLGlCQUFlQyxJQUFmO0FBQUE7QUFBQSxRQUFzQkMsUUFBdEI7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUlsQkQsS0FBS0UsT0FBTCxDQUFhLGdCQUFiLENBSmtCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMEJBSWdCLEVBSmhCOztBQUFBO0FBQUE7QUFFMUJDLGdCQUYwQixTQUUxQkEsSUFGMEI7QUFHMUJDLGdCQUgwQixTQUcxQkEsSUFIMEI7QUFLeEJDLHlCQUx3QjtBQU14QkMsbUJBTndCOztBQUFBLGtCQVF4QkgsUUFBUUMsS0FBS0csT0FBTCx3QkFBeUIsQ0FBQyxDQVJWO0FBQUE7QUFBQTtBQUFBOztBQVMxQiw2QkFBT0MsS0FBUCxvQkFBOEJQLFFBQTlCLFNBQTBDRSxJQUExQzs7QUFUMEI7O0FBQUEsaUJBWXBCTCxHQVpvQjtBQUFBO0FBQUE7QUFBQTs7QUFhdEJPLDRCQUFnQlAsR0FBaEI7QUFDQSw2QkFBT1UsS0FBUCxDQUFhLHNCQUFiO0FBZHNCO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1CQWdCTixhQUFHQyxRQUFILDRCQUE0QixNQUE1QixDQWhCTTs7QUFBQTtBQWdCdEJILG1CQWhCc0I7O0FBaUJ0QlIsa0JBQU1PLGdCQUFnQkssS0FBS0MsS0FBTCxDQUFXTCxPQUFYLENBQXRCO0FBQ0EsNkJBQU9FLEtBQVAsQ0FBYSxnQ0FBYjs7QUFsQnNCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBcUJ4Qiw2QkFBT0ksS0FBUCxDQUFhLHFCQUFiLEVBQW9DLEVBQUVaLFVBQUYsRUFBUWEsZ0JBQVIsRUFBcEM7O0FBckJ3QjtBQUFBLGtCQXdCdEJSLGlCQUFpQkEsY0FBY0YsSUFBZCxDQXhCSztBQUFBO0FBQUE7QUFBQTs7QUF5QnBCVyxtQkF6Qm9CLEdBeUJWVCxjQUFjRixJQUFkLENBekJVO0FBMEJ4QjtBQUNBOztBQTNCd0Isa0JBNEJwQlcsV0FBV0EsUUFBUUMsSUFBbkIsSUFBMkJkLGFBQWFhLFFBQVFDLElBNUI1QjtBQUFBO0FBQUE7QUFBQTs7QUE2QmhCQyxzQkE3QmdCLEdBNkJILDZCQUFjZixRQUFkLEVBQXdCYSxRQUFRQyxJQUFoQyxDQTdCRztBQUFBO0FBQUEsbUJBOEJEZixLQUFLaUIsZ0JBQUwsRUE5QkM7O0FBQUE7QUE4QmhCQyxrQkE5QmdCOzs7QUFnQ3RCLGdCQUFJQSxNQUFKLEVBQVk7QUFDTkMsc0JBRE0sR0FDSywrQkFBZ0JuQixJQUFoQixFQUFzQixFQUFFa0IsY0FBRixFQUFVZixVQUFWLEVBQWdCYSxzQkFBaEIsRUFBNEJGLGdCQUE1QixFQUF0QixDQURMOzs7QUFHVixrQkFBSUssUUFBSixFQUFjO0FBQ1osb0JBQUk7QUFDRkQseUJBQU9FLE1BQVAsQ0FBYyxDQUFkLEVBQWlCRCxRQUFqQjtBQUNELGlCQUZELENBRUUsT0FBT04sR0FBUCxFQUFZO0FBQ1osbUNBQU9ELEtBQVAsQ0FBYSxrQ0FBYixFQUFpRCxFQUFFWixVQUFGLEVBQVFhLFFBQVIsRUFBakQ7QUFDRDtBQUNGO0FBQ0Y7O0FBMUNxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztrQkFnRGVkLHFCIiwiZmlsZSI6Imluc2VydEltcG9ydFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCBmcyBmcm9tICdtei9mcyc7XG5cbmltcG9ydCB7XG4gIENBQ0hFX0ZJTEVOQU1FLFxuICBNRU5VX1NUUixcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgZ2V0SW1wb3J0UGF0aCBmcm9tICcuL2dldEltcG9ydFBhdGgnO1xuaW1wb3J0IGdldEltcG9ydFN0cmluZyBmcm9tICcuL2dldEltcG9ydFN0cmluZyc7XG5cbmxldCBNQVA7XG5cbmNvbnN0IGluc2VydEltcG9ydFN0YXRlbWVudCA9IGFzeW5jIGZ1bmN0aW9uKG52aW0sIFtmaWxlbmFtZV0pIHtcbiAgY29uc3Qge1xuICAgIHdvcmQsXG4gICAgbWVudSxcbiAgfSA9IGF3YWl0IG52aW0uZ2V0VnZhcignY29tcGxldGVkX2l0ZW0nKSB8fCB7fTtcbiAgbGV0IHBhcnNlZFJlc3VsdHM7XG4gIGxldCByZXN1bHRzO1xuXG4gIGlmICh3b3JkICYmIG1lbnUuaW5kZXhPZihNRU5VX1NUUikgPiAtMSkge1xuICAgIGxvZ2dlci5kZWJ1ZyhgaW5zZXJ0SW1wb3J0OiAke2ZpbGVuYW1lfSAke3dvcmR9YCk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKE1BUCkge1xuICAgICAgICBwYXJzZWRSZXN1bHRzID0gTUFQO1xuICAgICAgICBsb2dnZXIuZGVidWcoJ1VzaW5nIGNhY2hlZCByZXN1bHRzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzID0gYXdhaXQgZnMucmVhZEZpbGUoQ0FDSEVfRklMRU5BTUUsICd1dGY4Jyk7XG4gICAgICAgIE1BUCA9IHBhcnNlZFJlc3VsdHMgPSBKU09OLnBhcnNlKHJlc3VsdHMpO1xuICAgICAgICBsb2dnZXIuZGVidWcoJ0xvYWRpbmcgY2FjaGVkIHJlc3VsdHMgZnJvbSBmcycpO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgY2FjaGUnLCB7IG52aW0sIGVyciB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFyc2VkUmVzdWx0cyAmJiBwYXJzZWRSZXN1bHRzW3dvcmRdKSB7XG4gICAgICBsZXQgY29udGV4dCA9IHBhcnNlZFJlc3VsdHNbd29yZF07XG4gICAgICAvLyBXZSBoYXZlIHRoZSBmaWxlIGFuZCBpbXBvcnQsIGNoZWNrIGN1cnJlbnQgZmlsZSdzIGltcG9ydHMgYW5kIGltcG9ydCBpZiBub3QgZm91bmRcbiAgICAgIC8vIEFsc28gbWFrZSBzdXJlIHRhcmdldCBpbXBvcnQgZmlsZSBpc24ndCBjdXJyZW50IGJ1ZmZlclxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5maWxlICYmIGZpbGVuYW1lICE9PSBjb250ZXh0LmZpbGUpIHtcbiAgICAgICAgY29uc3QgaW1wb3J0UGF0aCA9IGdldEltcG9ydFBhdGgoZmlsZW5hbWUsIGNvbnRleHQuZmlsZSk7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IG52aW0uZ2V0Q3VycmVudEJ1ZmZlcigpO1xuXG4gICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBnZXRJbXBvcnRTdHJpbmcobnZpbSwgeyBidWZmZXIsIHdvcmQsIGltcG9ydFBhdGgsIGNvbnRleHQgfSk7XG5cbiAgICAgICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGJ1ZmZlci5pbnNlcnQoMCwgdGVtcGxhdGUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignRXJyb3IgaW5zZXJ0aW5nIGxpbmUgaW50byBidWZmZXInLCB7IG52aW0sIGVyciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluc2VydEltcG9ydFN0YXRlbWVudDtcbiJdfQ==