!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-svgdraw"]=e(t.MotorCortex)}(this,(function(t){"use strict";class e extends t.Effect{getScratchValue(){return this.pathLength=Math.ceil(this.element.getTotalLength()),this.element.style.strokeDasharray="".concat(this.pathLength," ").concat(this.pathLength),this.element.style.strokeDashoffset=this.pathLength,0}onGetContext(){this.pathLength=Math.ceil(this.element.getTotalLength())}onProgress(t){const e=(this.targetValue-this.initialValue)*this.getFraction(t)+this.initialValue;this.element.style.strokeDashoffset=Math.ceil(this.pathLength*(1-e))}}return{npm_name:"@donkeyclip/motorcortex-svgdraw",version:"1.2.0",incidents:[{exportable:e,name:"Draw",attributesValidationRules:{animatedAttrs:{type:"object",props:{cover:{type:"number",min:0,max:1}}}}}]}}));
