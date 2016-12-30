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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXRJbXBvcnRTdHJpbmcuanMiXSwibmFtZXMiOlsiZ2V0SW1wb3J0U3RyaW5nIiwibnZpbSIsIndvcmQiLCJpbXBvcnRQYXRoIiwiY29udGV4dCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQU93QkEsZTtBQUFULFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLFFBQXdGO0FBQUEsTUFBckNDLElBQXFDLFFBQXJDQSxJQUFxQztBQUFBLE1BQS9CQyxVQUErQixRQUEvQkEsVUFBK0I7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1COztBQUNyRyxNQUFJQSxRQUFRQyxJQUFSLEtBQWlCLE9BQXJCLEVBQThCO0FBQzVCLFdBQU8sZUFBYUgsSUFBYixrQkFBNkJDLFVBQTdCLFNBQVA7QUFDRDs7QUFFRDtBQUNBLFNBQU8sYUFBV0QsSUFBWCxnQkFBeUJDLFVBQXpCLFNBQVA7QUFDRCIsImZpbGUiOiJnZXRJbXBvcnRTdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZmxvdyAqL1xudHlwZSBQYXJhbXMgPSB7XG4gIHdvcmQ6IHN0cmluZyxcbiAgaW1wb3J0UGF0aDogc3RyaW5nLFxuICBjb250ZXh0OiBDb250ZXh0VCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEltcG9ydFN0cmluZyhudmltOiBOdmltLCB7IC8qYnVmZmVyLCAqL3dvcmQsIGltcG9ydFBhdGgsIGNvbnRleHQgfTogUGFyYW1zKSB7XG4gIGlmIChjb250ZXh0LnR5cGUgPT09ICduYW1lZCcpIHtcbiAgICByZXR1cm4gW2BpbXBvcnQgeyAke3dvcmR9IH0gZnJvbSAnJHtpbXBvcnRQYXRofSc7YF07XG4gIH1cblxuICAvLyBkZWZhdWx0IGltcG9ydFxuICByZXR1cm4gW2BpbXBvcnQgJHt3b3JkfSBmcm9tICcke2ltcG9ydFBhdGh9JztgXTtcbn1cbiJdfQ==