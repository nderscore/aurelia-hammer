import {inject, customAttribute} from 'aurelia-framework';
import Hammer from 'hammerjs';

@customAttribute('hammer-longtap')
@inject(Element)
export class HammerLongTapCustomAttribute {

  constructor(element) {
    this.hammer = new Hammer.Manager(element, {
      recognizers: [
        [Hammer.Tap, {time: 1000, interval: 10}]
      ]
    });
    this.element = element;
  }

  attached() {
    this.hammer.on('tap', this.handleLongTap.bind(this));
  }

  detached() {
    this.hammer.off('tap', this.handleLongTap.bind(this));
  }

  valueChanged(newValue) {
    this.callback = newValue;
  }

  handleLongTap(event) {
    if (this.callback) {
      this.callback.call(null, { hammerEvent: event });
    }
  }
}
