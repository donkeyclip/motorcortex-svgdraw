import MotorCortex from '@donkeyclip/motorcortex';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Draw = /*#__PURE__*/function (_MotorCortex$Effect) {
  _inherits(Draw, _MotorCortex$Effect);

  var _super = _createSuper(Draw);

  function Draw() {
    _classCallCheck(this, Draw);

    return _super.apply(this, arguments);
  }

  _createClass(Draw, [{
    key: "getScratchValue",
    value: function getScratchValue() {
      this.pathLength = Math.ceil(this.element.getTotalLength());
      this.element.style.strokeDasharray = this.pathLength + " " + this.pathLength;
      this.element.style.strokeDashoffset = this.pathLength;
      return 0;
    }
  }, {
    key: "onGetContext",
    value: function onGetContext() {
      this.pathLength = Math.ceil(this.element.getTotalLength());
    }
  }, {
    key: "onProgress",
    value: function onProgress(millisecond) {
      var cover = (this.targetValue - this.initialValue) * this.getFraction(millisecond) + this.initialValue;
      this.element.style.strokeDashoffset = Math.ceil(this.pathLength * (1 - cover));
    }
  }]);

  return Draw;
}(MotorCortex.Effect);

var name = "@donkeyclip/motorcortex-svgdraw";
var version = "0.0.11";

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

export { index as default };
