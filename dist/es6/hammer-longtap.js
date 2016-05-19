import {inject, customAttribute} from 'aurelia-framework';
import Hammer from 'hammerjs';

@customAttribute('hammer-longtap')
@inject(Element)
export class HammerLongTapCustomAttribute {

  constructor(element) {
    this.hammer = new Hammer.Manager(element, {
      recognizers: [
        [Hammer.Tap],
        [Hammer.Press]
      ]
    });
    this.element = element;
  }

  attached() {
    this.hammer.on('tap', this.handleLongTap.bind(this));
    this.hammer.on('press', this.handleLongTap.bind(this));
  }

  detached() {
    this.hammer.off('tap', this.handleLongTap.bind(this));
    this.hammer.off('press', this.handleLongTap.bind(this));
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
