'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var APP_NAME = exports.APP_NAME = 'jsimport';
var MENU_STR = exports.MENU_STR = '[jsi]';

var UPDATE_INTERVAL = exports.UPDATE_INTERVAL = 3600;
var CACHE_FILENAME = exports.CACHE_FILENAME = '.jsimport';
var RAVEN_DSN = exports.RAVEN_DSN = 'https://e96f481c4659459fa18ad56a96d676c1@sentry.io/125489';

// TODO respect configuration + gitignore(?)
var DEFAULT_IGNORE = exports.DEFAULT_IGNORE = ['node_modules', '.git'];

var DEFAULT_PATTERN = exports.DEFAULT_PATTERN = '\.js(x|)$';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiQVBQX05BTUUiLCJNRU5VX1NUUiIsIlVQREFURV9JTlRFUlZBTCIsIkNBQ0hFX0ZJTEVOQU1FIiwiUkFWRU5fRFNOIiwiREVGQVVMVF9JR05PUkUiLCJERUZBVUxUX1BBVFRFUk4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsOEJBQVcsVUFBakI7QUFDQSxJQUFNQyw4QkFBVyxPQUFqQjs7QUFFQSxJQUFNQyw0Q0FBa0IsSUFBeEI7QUFDQSxJQUFNQywwQ0FBaUIsV0FBdkI7QUFDQSxJQUFNQyxnQ0FBWSwyREFBbEI7O0FBRVA7QUFDTyxJQUFNQywwQ0FBaUIsQ0FDNUIsY0FENEIsRUFFNUIsTUFGNEIsQ0FBdkI7O0FBS0EsSUFBTUMsNENBQWtCLFdBQXhCIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUFBfTkFNRSA9ICdqc2ltcG9ydCc7XG5leHBvcnQgY29uc3QgTUVOVV9TVFIgPSAnW2pzaV0nO1xuXG5leHBvcnQgY29uc3QgVVBEQVRFX0lOVEVSVkFMID0gMzYwMDtcbmV4cG9ydCBjb25zdCBDQUNIRV9GSUxFTkFNRSA9ICcuanNpbXBvcnQnO1xuZXhwb3J0IGNvbnN0IFJBVkVOX0RTTiA9ICdodHRwczovL2U5NmY0ODFjNDY1OTQ1OWZhMThhZDU2YTk2ZDY3NmMxQHNlbnRyeS5pby8xMjU0ODknO1xuXG4vLyBUT0RPIHJlc3BlY3QgY29uZmlndXJhdGlvbiArIGdpdGlnbm9yZSg/KVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfSUdOT1JFID0gW1xuICAnbm9kZV9tb2R1bGVzJyxcbiAgJy5naXQnLFxuXTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFUVEVSTiA9ICdcXC5qcyh4fCkkJztcbiJdfQ==