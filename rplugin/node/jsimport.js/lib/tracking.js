'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _raven = require('raven');

var _raven2 = _interopRequireDefault(_raven);

var _constants = require('./constants');

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line


var initializeTracking = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(nvim) {
    var shouldTrackErrors;
    return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return nvim.getVar('jsimport#reporting');

          case 2:
            shouldTrackErrors = _context.sent;


            if (shouldTrackErrors) {
              (function () {
                var id = _crypto2.default.randomBytes(16).toString('hex');
                _raven2.default.config(_constants.RAVEN_DSN, {
                  captureUnhandledRejections: true,
                  release: _package.version,
                  shouldSendCallback: function shouldSendCallback() {
                    return shouldTrackErrors;
                  }, // support for promises? or async?
                  autoBreadcrumbs: {
                    console: true
                  },
                  dataCallback: function dataCallback(data) {
                    return _extends({}, data, {
                      server_name: null,
                      user: {
                        ip_address: null,
                        server_name: null,
                        id: id
                      }
                    });
                  }
                }).install();
              })();
            }

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function initializeTracking(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = initializeTracking;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFja2luZy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsaXplVHJhY2tpbmciLCJudmltIiwiZ2V0VmFyIiwic2hvdWxkVHJhY2tFcnJvcnMiLCJpZCIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJjb25maWciLCJjYXB0dXJlVW5oYW5kbGVkUmVqZWN0aW9ucyIsInJlbGVhc2UiLCJzaG91bGRTZW5kQ2FsbGJhY2siLCJhdXRvQnJlYWRjcnVtYnMiLCJjb25zb2xlIiwiZGF0YUNhbGxiYWNrIiwiZGF0YSIsInNlcnZlcl9uYW1lIiwidXNlciIsImlwX2FkZHJlc3MiLCJpbnN0YWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUdBOzs7OzJjQVBzRDs7O0FBU3RELElBQU1BO0FBQUEsaUVBQXFCLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ09BLEtBQUtDLE1BQUwsQ0FBWSxvQkFBWixDQURQOztBQUFBO0FBQ25CQyw2QkFEbUI7OztBQUd6QixnQkFBSUEsaUJBQUosRUFBdUI7QUFBQTtBQUNyQixvQkFBTUMsS0FBSyxpQkFBT0MsV0FBUCxDQUFtQixFQUFuQixFQUF1QkMsUUFBdkIsQ0FBZ0MsS0FBaEMsQ0FBWDtBQUNBLGdDQUFNQyxNQUFOLHVCQUF3QjtBQUN0QkMsOENBQTRCLElBRE47QUFFdEJDLDJDQUZzQjtBQUd0QkMsc0NBQW9CO0FBQUEsMkJBQU1QLGlCQUFOO0FBQUEsbUJBSEUsRUFHdUI7QUFDN0NRLG1DQUFpQjtBQUNmQyw2QkFBUztBQURNLG1CQUpLO0FBT3RCQyxnQ0FBYyxzQkFBQ0MsSUFBRCxFQUFVO0FBQ3RCLHdDQUNLQSxJQURMO0FBRUVDLG1DQUFhLElBRmY7QUFHRUMsNEJBQU07QUFDSkMsb0NBQVksSUFEUjtBQUVKRixxQ0FBYSxJQUZUO0FBR0pYO0FBSEk7QUFIUjtBQVNEO0FBakJxQixpQkFBeEIsRUFrQkdjLE9BbEJIO0FBRnFCO0FBcUJ0Qjs7QUF4QndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O2tCQTJCZWxCLGtCIiwiZmlsZSI6InRyYWNraW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IFJhdmVuIGZyb20gJ3JhdmVuJztcblxuaW1wb3J0IHtcbiAgUkFWRU5fRFNOLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuY29uc3QgaW5pdGlhbGl6ZVRyYWNraW5nID0gYXN5bmMgKG52aW0pID0+IHtcbiAgY29uc3Qgc2hvdWxkVHJhY2tFcnJvcnMgPSBhd2FpdCBudmltLmdldFZhcignanNpbXBvcnQjcmVwb3J0aW5nJyk7XG5cbiAgaWYgKHNob3VsZFRyYWNrRXJyb3JzKSB7XG4gICAgY29uc3QgaWQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBSYXZlbi5jb25maWcoUkFWRU5fRFNOLCB7XG4gICAgICBjYXB0dXJlVW5oYW5kbGVkUmVqZWN0aW9uczogdHJ1ZSxcbiAgICAgIHJlbGVhc2U6IHZlcnNpb24sXG4gICAgICBzaG91bGRTZW5kQ2FsbGJhY2s6ICgpID0+IHNob3VsZFRyYWNrRXJyb3JzLCAvLyBzdXBwb3J0IGZvciBwcm9taXNlcz8gb3IgYXN5bmM/XG4gICAgICBhdXRvQnJlYWRjcnVtYnM6IHtcbiAgICAgICAgY29uc29sZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBkYXRhQ2FsbGJhY2s6IChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICBzZXJ2ZXJfbmFtZTogbnVsbCxcbiAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICBpcF9hZGRyZXNzOiBudWxsLFxuICAgICAgICAgICAgc2VydmVyX25hbWU6IG51bGwsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pLmluc3RhbGwoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVRyYWNraW5nO1xuIl19