'use strict';

var MotorCortex = require('@donkeyclip/motorcortex');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var MotorCortex__default = /*#__PURE__*/_interopDefaultLegacy(MotorCortex);

class Draw extends MotorCortex__default["default"].Effect {
  getScratchValue() {
    this.pathLength = Math.ceil(this.element.getTotalLength());
    this.element.style.strokeDasharray = this.pathLength + " " + this.pathLength;
    this.element.style.strokeDashoffset = this.pathLength;
    return 0;
  }

  onGetContext() {
    this.pathLength = Math.ceil(this.element.getTotalLength());
  }

  onProgress(millisecond) {
    const cover = (this.targetValue - this.initialValue) * this.getFraction(millisecond) + this.initialValue;
    this.element.style.strokeDashoffset = Math.ceil(this.pathLength * (1 - cover));
  }

}

var name = "@donkeyclip/motorcortex-svgdraw";
var version = "1.0.0";

var index = {
  npm_name: name,
  version: version,
  incidents: [{
    exportable: Draw,
    name: "Draw",
    attributesValidationRules: {
      animatedAttrs: {
        type: "object",
        props: {
          cover: {
            type: 'number',
            min: 0,
            max: 1
          }
        }
      }
    }
  }]
};

module.exports = index;
