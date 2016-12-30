'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkForUpdates;

var _updateNotifier = require('update-notifier');

var _updateNotifier2 = _interopRequireDefault(_updateNotifier);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _constants = require('./constants');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkForUpdates(nvim) {
  var notifier = (0, _updateNotifier2.default)({
    pkg: _package2.default,
    updateCheckInterval: _constants.UPDATE_INTERVAL
  });

  if (notifier && notifier.update) {
    if (nvim) {
      var updateMsg = 'Update available ' + notifier.update.current + ' \u2192 ' + notifier.update.latest;
      (0, _util.echomsg)(nvim, updateMsg);
      (0, _util.echo)(nvim, ['echon \' Update available \'', 'echohl Comment', 'echon \'' + notifier.update.current + '\'', 'echohl None', 'echon \' → \'', 'echohl Keyword', 'echon \'' + notifier.update.latest + '\'', 'echohl None']);
    }

    return notifier.update;
  }

  return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGVja0ZvclVwZGF0ZS5qcyJdLCJuYW1lcyI6WyJjaGVja0ZvclVwZGF0ZXMiLCJudmltIiwibm90aWZpZXIiLCJwa2ciLCJ1cGRhdGVDaGVja0ludGVydmFsIiwidXBkYXRlIiwidXBkYXRlTXNnIiwiY3VycmVudCIsImxhdGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBVXdCQSxlOztBQVZ4Qjs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFLZSxTQUFTQSxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUM1QyxNQUFNQyxXQUFXLDhCQUFlO0FBQzlCQywwQkFEOEI7QUFFOUJDO0FBRjhCLEdBQWYsQ0FBakI7O0FBS0EsTUFBSUYsWUFBWUEsU0FBU0csTUFBekIsRUFBaUM7QUFDL0IsUUFBSUosSUFBSixFQUFVO0FBQ1IsVUFBTUssa0NBQWdDSixTQUFTRyxNQUFULENBQWdCRSxPQUFoRCxnQkFBNkRMLFNBQVNHLE1BQVQsQ0FBZ0JHLE1BQW5GO0FBQ0EseUJBQVFQLElBQVIsRUFBY0ssU0FBZDtBQUNBLHNCQUFLTCxJQUFMLEVBQVcsQ0FDVCw4QkFEUyxFQUVULGdCQUZTLGVBR0NDLFNBQVNHLE1BQVQsQ0FBZ0JFLE9BSGpCLFNBSVQsYUFKUyxFQUtULGVBTFMsRUFNVCxnQkFOUyxlQU9DTCxTQUFTRyxNQUFULENBQWdCRyxNQVBqQixTQVFULGFBUlMsQ0FBWDtBQVVEOztBQUVELFdBQU9OLFNBQVNHLE1BQWhCO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QiLCJmaWxlIjoiY2hlY2tGb3JVcGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXBkYXRlTm90aWZpZXIgZnJvbSAndXBkYXRlLW5vdGlmaWVyJztcbmltcG9ydCBwa2cgZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7XG4gIFVQREFURV9JTlRFUlZBTCxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgZWNobyxcbiAgZWNob21zZyxcbn0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKG52aW0pIHtcbiAgY29uc3Qgbm90aWZpZXIgPSB1cGRhdGVOb3RpZmllcih7XG4gICAgcGtnLFxuICAgIHVwZGF0ZUNoZWNrSW50ZXJ2YWw6IFVQREFURV9JTlRFUlZBTCxcbiAgfSk7XG5cbiAgaWYgKG5vdGlmaWVyICYmIG5vdGlmaWVyLnVwZGF0ZSkge1xuICAgIGlmIChudmltKSB7XG4gICAgICBjb25zdCB1cGRhdGVNc2cgPSBgVXBkYXRlIGF2YWlsYWJsZSAke25vdGlmaWVyLnVwZGF0ZS5jdXJyZW50fSDihpIgJHtub3RpZmllci51cGRhdGUubGF0ZXN0fWA7XG4gICAgICBlY2hvbXNnKG52aW0sIHVwZGF0ZU1zZyk7XG4gICAgICBlY2hvKG52aW0sIFtcbiAgICAgICAgJ2VjaG9uIFxcJyBVcGRhdGUgYXZhaWxhYmxlIFxcJycsXG4gICAgICAgICdlY2hvaGwgQ29tbWVudCcsXG4gICAgICAgIGBlY2hvbiAnJHtub3RpZmllci51cGRhdGUuY3VycmVudH0nYCxcbiAgICAgICAgJ2VjaG9obCBOb25lJyxcbiAgICAgICAgJ2VjaG9uIFxcJyDihpIgXFwnJyxcbiAgICAgICAgJ2VjaG9obCBLZXl3b3JkJyxcbiAgICAgICAgYGVjaG9uICcke25vdGlmaWVyLnVwZGF0ZS5sYXRlc3R9J2AsXG4gICAgICAgICdlY2hvaGwgTm9uZScsXG4gICAgICBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm90aWZpZXIudXBkYXRlO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=