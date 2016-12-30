'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getImportPath;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Retrieves relative path between two files (full path)
function getImportPath(from, to) {
  // Need to strip filenames and only use directories
  var _path$parse = _path2.default.parse(from),
      fromDir = _path$parse.dir;

  var _path$parse2 = _path2.default.parse(to),
      toDir = _path$parse2.dir,
      name = _path$parse2.name;

  var relativePath = _path2.default.relative(fromDir, toDir);
  var isParentDir = relativePath && relativePath[0] === '.';
  var sep = _path2.default.sep;
  var relativeToCurrentDirString = !isParentDir ? '.' + sep : '';

  // if string does not begin with a "." then it is in the current directory
  // append './'
  return '' + relativeToCurrentDirString + (relativePath ? '' + relativePath + _path2.default.sep : '') + name;
}
//# sourceMappingURL=getImportPath.js.map