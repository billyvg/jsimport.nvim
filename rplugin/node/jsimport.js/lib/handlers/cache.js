'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cache;

var _ExportsList = require('../ExportsList');

var _ExportsList2 = _interopRequireDefault(_ExportsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cache(nvim) {
  _ExportsList2.default.setApi(nvim);

  return _ExportsList2.default.update();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYW5kbGVycy9jYWNoZS5qcyJdLCJuYW1lcyI6WyJjYWNoZSIsIm52aW0iLCJzZXRBcGkiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUV3QkEsSzs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsSUFBZixFQUFxQjtBQUNsQyx3QkFBR0MsTUFBSCxDQUFVRCxJQUFWOztBQUVBLFNBQU8sc0JBQUdFLE1BQUgsRUFBUDtBQUNEIiwiZmlsZSI6ImNhY2hlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4uL0V4cG9ydHNMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FjaGUobnZpbSkge1xuICBkYi5zZXRBcGkobnZpbSk7XG5cbiAgcmV0dXJuIGRiLnVwZGF0ZSgpO1xufVxuIl19