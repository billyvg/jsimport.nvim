'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getImportPath = getImportPath;
exports.getTemplate = getTemplate;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line


var MAP = void 0;

// Retrieves relative path between two files (full path)
function getImportPath(from, to) {
  // Need to strip filenames and only use directories
  var _path$parse = _path2.default.parse(from),
      fromDir = _path$parse.dir;

  var _path$parse2 = _path2.default.parse(to),
      toDir = _path$parse2.dir,
      name = _path$parse2.name;

  var relativePath = _path2.default.relative(fromDir, toDir);

  return (relativePath ? relativePath : './') + '/' + name;
}

function getTemplate(nvim, _ref) {
  var word = _ref.word,
      importPath = _ref.importPath,
      context = _ref.context;

  if (context.type === 'named') {
    return ['import {', '\t' + word + ',', '} from \'' + importPath + '\';'];
  }

  // default import
  return ['import ' + word + ' from \'' + importPath + '\';'];
}

var insertImportStatement = function () {
  var _ref2 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(nvim, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        filename = _ref4[0];

    var _ref5, word, menu, parsedResults, results, context, importPath, buffer, template;

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
            _ref5 = _context.t0;
            word = _ref5.word;
            menu = _ref5.menu;
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

            importPath = getImportPath(filename, context.file);
            _context.next = 34;
            return nvim.getCurrentBuffer();

          case 34:
            buffer = _context.sent;


            if (buffer) {
              template = getTemplate(nvim, { buffer: buffer, word: word, importPath: importPath, context: context });


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
    return _ref2.apply(this, arguments);
  };
}();

exports.default = insertImportStatement;
//# sourceMappingURL=insertImportStatement.js.map