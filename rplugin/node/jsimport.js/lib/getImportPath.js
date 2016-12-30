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

  return (relativePath ? relativePath : './') + '/' + name;
}
//# sourceMappingURL=getImportPath.js.map