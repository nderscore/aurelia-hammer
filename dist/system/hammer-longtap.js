System.register(['aurelia-framework', 'hammerjs'], function (_export) {
  'use strict';

  var inject, customAttribute, Hammer, HammerLongTapCustomAttribute;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_hammerjs) {
      Hammer = _hammerjs['default'];
    }],
    execute: function () {
      HammerLongTapCustomAttribute = (function () {
        function HammerLongTapCustomAttribute(element) {
          _classCallCheck(this, _HammerLongTapCustomAttribute);

          this.hammer = new Hammer.Manager(element, {
            recognizers: [[Hammer.Tap, { time: 1000, interval: 1 }]]
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
        HammerLongTapCustomAttribute = inject(Element)(HammerLongTapCustomAttribute) || HammerLongTapCustomAttribute;
        HammerLongTapCustomAttribute = customAttribute('hammer-longtap')(HammerLongTapCustomAttribute) || HammerLongTapCustomAttribute;
        return HammerLongTapCustomAttribute;
      })();

      _export('HammerLongTapCustomAttribute', HammerLongTapCustomAttribute);
    }
  };
});