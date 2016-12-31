'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // eslint-disable-line


var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _fs = require('mz/fs');

var _fs2 = _interopRequireDefault(_fs);

var _constants = require('./constants');

var _cacheExports = require('./cacheExports');

var _cacheExports2 = _interopRequireDefault(_cacheExports);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExportList = function () {
  function ExportList() {
    _classCallCheck(this, ExportList);
  }

  _createClass(ExportList, [{
    key: 'setApi',
    value: function setApi(nvim) {
      this.nvim = nvim;
    }
  }, {
    key: 'update',
    value: function () {
      var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee() {
        return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                debug(this.nvim);
                _context.next = 3;
                return (0, _cacheExports2.default)(this.nvim);

              case 3:
                this.map = _context.sent;

                this.loaded = true;
                return _context.abrupt('return', this.map);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update() {
        return _ref.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: 'loadFromFile',
    value: function () {
      var _ref2 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee2() {
        var results;
        return _regeneratorRuntime2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _fs2.default.readFile(_constants.CACHE_FILENAME, 'utf8');

              case 2:
                results = _context2.sent;

                this.map = JSON.parse(results);
                this.loaded = true;
                return _context2.abrupt('return', this.map);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadFromFile() {
        return _ref2.apply(this, arguments);
      }

      return loadFromFile;
    }()
  }, {
    key: 'getWord',
    value: function () {
      var _ref3 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee3(word) {
        return _regeneratorRuntime2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.loaded) {
                  _context3.next = 3;
                  break;
                }

                _context3.next = 3;
                return this.update();

              case 3:
                return _context3.abrupt('return', this.map[word]);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getWord(_x) {
        return _ref3.apply(this, arguments);
      }

      return getWord;
    }()
  }]);

  return ExportList;
}();

exports.default = new ExportList();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FeHBvcnRzTGlzdC5qcyJdLCJuYW1lcyI6WyJFeHBvcnRMaXN0IiwibnZpbSIsImRlYnVnIiwibWFwIiwibG9hZGVkIiwicmVhZEZpbGUiLCJyZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwid29yZCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3FqQkFBc0Q7OztBQUF0RDs7OztBQUNBOzs7O0FBRUE7O0FBR0E7Ozs7Ozs7Ozs7SUFFTUEsVTs7Ozs7OzsyQkFJR0MsSSxFQUFNO0FBQ1gsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Ozs7OztBQUdDQyxzQkFBTSxLQUFLRCxJQUFYOzt1QkFDaUIsNEJBQWEsS0FBS0EsSUFBbEIsQzs7O0FBQWpCLHFCQUFLRSxHOztBQUNMLHFCQUFLQyxNQUFMLEdBQWMsSUFBZDtpREFDTyxLQUFLRCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJVSxhQUFHRSxRQUFILDRCQUE0QixNQUE1QixDOzs7QUFBaEJDLHVCOztBQUNOLHFCQUFLSCxHQUFMLEdBQVdJLEtBQUtDLEtBQUwsQ0FBV0YsT0FBWCxDQUFYO0FBQ0EscUJBQUtGLE1BQUwsR0FBYyxJQUFkO2tEQUNPLEtBQUtELEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR0FNLEk7Ozs7O29CQUNQLEtBQUtMLE07Ozs7Ozt1QkFDRixLQUFLTSxNQUFMLEU7OztrREFHRCxLQUFLUCxHQUFMLENBQVNNLElBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUlJLElBQUlULFVBQUosRSIsImZpbGUiOiJFeHBvcnRzTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCBmcyBmcm9tICdtei9mcyc7XG5cbmltcG9ydCB7XG4gIENBQ0hFX0ZJTEVOQU1FLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgY2FjaGVFeHBvcnRzIGZyb20gJy4vY2FjaGVFeHBvcnRzJztcblxuY2xhc3MgRXhwb3J0TGlzdCB7XG4gIGxvYWRlZDogZmFsc2U7XG4gIG1hcDoge307XG5cbiAgc2V0QXBpKG52aW0pIHtcbiAgICB0aGlzLm52aW0gPSBudmltO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKCkge1xuICAgIGRlYnVnKHRoaXMubnZpbSk7XG4gICAgdGhpcy5tYXAgPSBhd2FpdCBjYWNoZUV4cG9ydHModGhpcy5udmltKTtcbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMubWFwO1xuICB9XG5cbiAgYXN5bmMgbG9hZEZyb21GaWxlKCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBmcy5yZWFkRmlsZShDQUNIRV9GSUxFTkFNRSwgJ3V0ZjgnKTtcbiAgICB0aGlzLm1hcCA9IEpTT04ucGFyc2UocmVzdWx0cyk7XG4gICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLm1hcDtcbiAgfVxuXG4gIGFzeW5jIGdldFdvcmQod29yZDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmxvYWRlZCkge1xuICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tYXBbd29yZF07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEV4cG9ydExpc3QoKTtcblxuIl19