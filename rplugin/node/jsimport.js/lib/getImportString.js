'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getImportString;
function getImportString(nvim, _ref) {
  var word = _ref.word,
      importPath = _ref.importPath,
      context = _ref.context;

  if (context.type === 'named') {
    return ['import { ' + word + ' } from \'' + importPath + '\';'];
  }

  // default import
  return ['import ' + word + ' from \'' + importPath + '\';'];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXRJbXBvcnRTdHJpbmcuanMiXSwibmFtZXMiOlsiZ2V0SW1wb3J0U3RyaW5nIiwibnZpbSIsIndvcmQiLCJpbXBvcnRQYXRoIiwiY29udGV4dCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVF3QkEsZTtBQUFULFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLFFBQXVGO0FBQUEsTUFBckNDLElBQXFDLFFBQXJDQSxJQUFxQztBQUFBLE1BQS9CQyxVQUErQixRQUEvQkEsVUFBK0I7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1COztBQUNwRyxNQUFJQSxRQUFRQyxJQUFSLEtBQWlCLE9BQXJCLEVBQThCO0FBQzVCLFdBQU8sZUFBYUgsSUFBYixrQkFBNkJDLFVBQTdCLFNBQVA7QUFDRDs7QUFFRDtBQUNBLFNBQU8sYUFBV0QsSUFBWCxnQkFBeUJDLFVBQXpCLFNBQVA7QUFDRCIsImZpbGUiOiJnZXRJbXBvcnRTdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG50eXBlIFBhcmFtcyA9IHtcbiAgd29yZDogc3RyaW5nLFxuICBpbXBvcnRQYXRoOiBzdHJpbmcsXG4gIGNvbnRleHQ6IGFueSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEltcG9ydFN0cmluZyhudmltOiBhbnksIHsgLypidWZmZXIsICovd29yZCwgaW1wb3J0UGF0aCwgY29udGV4dCB9OiBQYXJhbXMpIHtcbiAgaWYgKGNvbnRleHQudHlwZSA9PT0gJ25hbWVkJykge1xuICAgIHJldHVybiBbYGltcG9ydCB7ICR7d29yZH0gfSBmcm9tICcke2ltcG9ydFBhdGh9JztgXTtcbiAgfVxuXG4gIC8vIGRlZmF1bHQgaW1wb3J0XG4gIHJldHVybiBbYGltcG9ydCAke3dvcmR9IGZyb20gJyR7aW1wb3J0UGF0aH0nO2BdO1xufVxuIl19