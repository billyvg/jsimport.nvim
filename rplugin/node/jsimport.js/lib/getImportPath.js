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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXRJbXBvcnRQYXRoLmpzIl0sIm5hbWVzIjpbImdldEltcG9ydFBhdGgiLCJmcm9tIiwidG8iLCJwYXJzZSIsImZyb21EaXIiLCJkaXIiLCJ0b0RpciIsIm5hbWUiLCJyZWxhdGl2ZVBhdGgiLCJyZWxhdGl2ZSIsImlzUGFyZW50RGlyIiwic2VwIiwicmVsYXRpdmVUb0N1cnJlbnREaXJTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUl3QkEsYTs7QUFIeEI7Ozs7OztBQUVBO0FBQ2UsU0FBU0EsYUFBVCxDQUF1QkMsSUFBdkIsRUFBcUNDLEVBQXJDLEVBQXlEO0FBQ3RFO0FBRHNFLG9CQUlsRSxlQUFLQyxLQUFMLENBQVdGLElBQVgsQ0FKa0U7QUFBQSxNQUcvREcsT0FIK0QsZUFHcEVDLEdBSG9FOztBQUFBLHFCQVNsRSxlQUFLRixLQUFMLENBQVdELEVBQVgsQ0FUa0U7QUFBQSxNQU8vREksS0FQK0QsZ0JBT3BFRCxHQVBvRTtBQUFBLE1BUXBFRSxJQVJvRSxnQkFRcEVBLElBUm9FOztBQVd0RSxNQUFNQyxlQUFlLGVBQUtDLFFBQUwsQ0FBY0wsT0FBZCxFQUF1QkUsS0FBdkIsQ0FBckI7QUFDQSxNQUFNSSxjQUFjRixnQkFBZ0JBLGFBQWEsQ0FBYixNQUFvQixHQUF4RDtBQUNBLE1BQU1HLE1BQU0sZUFBS0EsR0FBakI7QUFDQSxNQUFNQyw2QkFBNkIsQ0FBQ0YsV0FBRCxTQUFtQkMsR0FBbkIsR0FBMkIsRUFBOUQ7O0FBRUE7QUFDQTtBQUNBLGNBQVVDLDBCQUFWLElBQXVDSixvQkFBa0JBLFlBQWxCLEdBQWlDLGVBQUtHLEdBQXRDLEdBQThDLEVBQXJGLElBQTBGSixJQUExRjtBQUNEIiwiZmlsZSI6ImdldEltcG9ydFBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIFJldHJpZXZlcyByZWxhdGl2ZSBwYXRoIGJldHdlZW4gdHdvIGZpbGVzIChmdWxsIHBhdGgpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRJbXBvcnRQYXRoKGZyb206IHN0cmluZywgdG86IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIE5lZWQgdG8gc3RyaXAgZmlsZW5hbWVzIGFuZCBvbmx5IHVzZSBkaXJlY3Rvcmllc1xuICBjb25zdCB7XG4gICAgZGlyOiBmcm9tRGlyLFxuICB9ID0gcGF0aC5wYXJzZShmcm9tKTtcblxuICBjb25zdCB7XG4gICAgZGlyOiB0b0RpcixcbiAgICBuYW1lLFxuICB9ID0gcGF0aC5wYXJzZSh0byk7XG5cbiAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5yZWxhdGl2ZShmcm9tRGlyLCB0b0Rpcik7XG4gIGNvbnN0IGlzUGFyZW50RGlyID0gcmVsYXRpdmVQYXRoICYmIHJlbGF0aXZlUGF0aFswXSA9PT0gJy4nO1xuICBjb25zdCBzZXAgPSBwYXRoLnNlcDtcbiAgY29uc3QgcmVsYXRpdmVUb0N1cnJlbnREaXJTdHJpbmcgPSAhaXNQYXJlbnREaXIgPyBgLiR7c2VwfWAgOiAnJztcblxuICAvLyBpZiBzdHJpbmcgZG9lcyBub3QgYmVnaW4gd2l0aCBhIFwiLlwiIHRoZW4gaXQgaXMgaW4gdGhlIGN1cnJlbnQgZGlyZWN0b3J5XG4gIC8vIGFwcGVuZCAnLi8nXG4gIHJldHVybiBgJHtyZWxhdGl2ZVRvQ3VycmVudERpclN0cmluZ30ke3JlbGF0aXZlUGF0aCA/IGAke3JlbGF0aXZlUGF0aH0ke3BhdGguc2VwfWAgOiAnJ30ke25hbWV9YDtcbn1cblxuIl19