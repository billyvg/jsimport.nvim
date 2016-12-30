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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXRJbXBvcnRTdHJpbmcuanMiXSwibmFtZXMiOlsiZ2V0SW1wb3J0U3RyaW5nIiwibnZpbSIsIndvcmQiLCJpbXBvcnRQYXRoIiwiY29udGV4dCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsZTtBQUFULFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLFFBQTBFO0FBQUEsTUFBN0JDLElBQTZCLFFBQTdCQSxJQUE2QjtBQUFBLE1BQXZCQyxVQUF1QixRQUF2QkEsVUFBdUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQ3ZGLE1BQUlBLFFBQVFDLElBQVIsS0FBaUIsT0FBckIsRUFBOEI7QUFDNUIsV0FBTyxlQUFhSCxJQUFiLGtCQUE2QkMsVUFBN0IsU0FBUDtBQUNEOztBQUVEO0FBQ0EsU0FBTyxhQUFXRCxJQUFYLGdCQUF5QkMsVUFBekIsU0FBUDtBQUNEIiwiZmlsZSI6ImdldEltcG9ydFN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEltcG9ydFN0cmluZyhudmltLCB7IC8qYnVmZmVyLCAqL3dvcmQsIGltcG9ydFBhdGgsIGNvbnRleHQgfSkge1xuICBpZiAoY29udGV4dC50eXBlID09PSAnbmFtZWQnKSB7XG4gICAgcmV0dXJuIFtgaW1wb3J0IHsgJHt3b3JkfSB9IGZyb20gJyR7aW1wb3J0UGF0aH0nO2BdO1xuICB9XG5cbiAgLy8gZGVmYXVsdCBpbXBvcnRcbiAgcmV0dXJuIFtgaW1wb3J0ICR7d29yZH0gZnJvbSAnJHtpbXBvcnRQYXRofSc7YF07XG59XG4iXX0=