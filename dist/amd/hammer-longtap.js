define(['exports', 'aurelia-framework', 'hammerjs'], function (exports, _aureliaFramework, _hammerjs) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Hammer = _interopRequireDefault(_hammerjs);

  var HammerLongTapCustomAttribute = (function () {
    function HammerLongTapCustomAttribute(element) {
      _classCallCheck(this, _HammerLongTapCustomAttribute);

      this.hammer = new _Hammer['default'].Manager(element, {
        recognizers: [[_Hammer['default'].Tap, { time: 1000, interval: 1 }]]
      });
      this.element = element;
    }

    _createClass(HammerLongTapCustomAttribute, [{
      key: 'attached',
      value: function attached() {
        this.hammer.on('tap', this.handleLongTap.bind(this));
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.hammer.off('tap', this.handleLongTap.bind(this));
      }
    }, {
      key: 'valueChanged',
      value: function valueChanged(newValue) {
        this.callback = newValue;
      }
    }, {
      key: 'handleLongTap',
      value: function handleLongTap(event) {
        if (this.callback) {
          this.callback.call(null, { hammerEvent: event });
        }
      }
    }]);

    var _HammerLongTapCustomAttribute = HammerLongTapCustomAttribute;
    HammerLongTapCustomAttribute = (0, _aureliaFramework.inject)(Element)(HammerLongTapCustomAttribute) || HammerLongTapCustomAttribute;
    HammerLongTapCustomAttribute = (0, _aureliaFramework.customAttribute)('hammer-longtap')(HammerLongTapCustomAttribute) || HammerLongTapCustomAttribute;
    return HammerLongTapCustomAttribute;
  })();

  exports.HammerLongTapCustomAttribute = HammerLongTapCustomAttribute;
});