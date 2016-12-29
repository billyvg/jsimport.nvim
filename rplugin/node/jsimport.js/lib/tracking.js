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
//# sourceMappingURL=tracking.js.map