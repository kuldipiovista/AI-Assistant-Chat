(function(React2, ReactDOM2) {
  "use strict";
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f = React2, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    return reactJsxRuntime_production_min;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  var client = {};
  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client;
    hasRequiredClient = 1;
    var m = ReactDOM2;
    {
      client.createRoot = m.createRoot;
      client.hydrateRoot = m.hydrateRoot;
    }
    return client;
  }
  var clientExports = requireClient();
  let Key;
  (function(Key2) {
    Key2[Key2["Backspace"] = 8] = "Backspace";
    Key2[Key2["Tab"] = 9] = "Tab";
    Key2[Key2["Enter"] = 13] = "Enter";
    Key2[Key2["Shift"] = 16] = "Shift";
    Key2[Key2["Ctrl"] = 17] = "Ctrl";
    Key2[Key2["Alt"] = 18] = "Alt";
    Key2[Key2["Pause"] = 19] = "Pause";
    Key2[Key2["CapsLock"] = 20] = "CapsLock";
    Key2[Key2["Escape"] = 27] = "Escape";
    Key2[Key2["Space"] = 32] = "Space";
    Key2[Key2["PageUp"] = 33] = "PageUp";
    Key2[Key2["PageDown"] = 34] = "PageDown";
    Key2[Key2["End"] = 35] = "End";
    Key2[Key2["Home"] = 36] = "Home";
    Key2[Key2["LeftArrow"] = 37] = "LeftArrow";
    Key2[Key2["UpArrow"] = 38] = "UpArrow";
    Key2[Key2["RightArrow"] = 39] = "RightArrow";
    Key2[Key2["DownArrow"] = 40] = "DownArrow";
    Key2[Key2["Insert"] = 45] = "Insert";
    Key2[Key2["Delete"] = 46] = "Delete";
    Key2[Key2["Key0"] = 48] = "Key0";
    Key2[Key2["Key1"] = 49] = "Key1";
    Key2[Key2["Key2"] = 50] = "Key2";
    Key2[Key2["Key3"] = 51] = "Key3";
    Key2[Key2["Key4"] = 52] = "Key4";
    Key2[Key2["Key5"] = 53] = "Key5";
    Key2[Key2["Key6"] = 54] = "Key6";
    Key2[Key2["Key7"] = 55] = "Key7";
    Key2[Key2["Key8"] = 56] = "Key8";
    Key2[Key2["Key9"] = 57] = "Key9";
    Key2[Key2["KeyA"] = 65] = "KeyA";
    Key2[Key2["KeyB"] = 66] = "KeyB";
    Key2[Key2["KeyC"] = 67] = "KeyC";
    Key2[Key2["KeyD"] = 68] = "KeyD";
    Key2[Key2["KeyE"] = 69] = "KeyE";
    Key2[Key2["KeyF"] = 70] = "KeyF";
    Key2[Key2["KeyG"] = 71] = "KeyG";
    Key2[Key2["KeyH"] = 72] = "KeyH";
    Key2[Key2["KeyI"] = 73] = "KeyI";
    Key2[Key2["KeyJ"] = 74] = "KeyJ";
    Key2[Key2["KeyK"] = 75] = "KeyK";
    Key2[Key2["KeyL"] = 76] = "KeyL";
    Key2[Key2["KeyM"] = 77] = "KeyM";
    Key2[Key2["KeyN"] = 78] = "KeyN";
    Key2[Key2["KeyO"] = 79] = "KeyO";
    Key2[Key2["KeyP"] = 80] = "KeyP";
    Key2[Key2["KeyQ"] = 81] = "KeyQ";
    Key2[Key2["KeyR"] = 82] = "KeyR";
    Key2[Key2["KeyS"] = 83] = "KeyS";
    Key2[Key2["KeyT"] = 84] = "KeyT";
    Key2[Key2["KeyU"] = 85] = "KeyU";
    Key2[Key2["KeyV"] = 86] = "KeyV";
    Key2[Key2["KeyW"] = 87] = "KeyW";
    Key2[Key2["KeyX"] = 88] = "KeyX";
    Key2[Key2["KeyY"] = 89] = "KeyY";
    Key2[Key2["KeyZ"] = 90] = "KeyZ";
    Key2[Key2["LeftMeta"] = 91] = "LeftMeta";
    Key2[Key2["RightMeta"] = 92] = "RightMeta";
    Key2[Key2["Select"] = 93] = "Select";
    Key2[Key2["Numpad0"] = 96] = "Numpad0";
    Key2[Key2["Numpad1"] = 97] = "Numpad1";
    Key2[Key2["Numpad2"] = 98] = "Numpad2";
    Key2[Key2["Numpad3"] = 99] = "Numpad3";
    Key2[Key2["Numpad4"] = 100] = "Numpad4";
    Key2[Key2["Numpad5"] = 101] = "Numpad5";
    Key2[Key2["Numpad6"] = 102] = "Numpad6";
    Key2[Key2["Numpad7"] = 103] = "Numpad7";
    Key2[Key2["Numpad8"] = 104] = "Numpad8";
    Key2[Key2["Numpad9"] = 105] = "Numpad9";
    Key2[Key2["Multiply"] = 106] = "Multiply";
    Key2[Key2["Add"] = 107] = "Add";
    Key2[Key2["Subtract"] = 109] = "Subtract";
    Key2[Key2["Decimal"] = 110] = "Decimal";
    Key2[Key2["Divide"] = 111] = "Divide";
    Key2[Key2["F1"] = 112] = "F1";
    Key2[Key2["F2"] = 113] = "F2";
    Key2[Key2["F3"] = 114] = "F3";
    Key2[Key2["F4"] = 115] = "F4";
    Key2[Key2["F5"] = 116] = "F5";
    Key2[Key2["F6"] = 117] = "F6";
    Key2[Key2["F7"] = 118] = "F7";
    Key2[Key2["F8"] = 119] = "F8";
    Key2[Key2["F9"] = 120] = "F9";
    Key2[Key2["F10"] = 121] = "F10";
    Key2[Key2["F11"] = 122] = "F11";
    Key2[Key2["F12"] = 123] = "F12";
    Key2[Key2["NumLock"] = 144] = "NumLock";
    Key2[Key2["ScrollLock"] = 145] = "ScrollLock";
    Key2[Key2["Semicolon"] = 186] = "Semicolon";
    Key2[Key2["Equals"] = 187] = "Equals";
    Key2[Key2["Comma"] = 188] = "Comma";
    Key2[Key2["Dash"] = 189] = "Dash";
    Key2[Key2["Period"] = 190] = "Period";
    Key2[Key2["ForwardSlash"] = 191] = "ForwardSlash";
    Key2[Key2["GraveAccent"] = 192] = "GraveAccent";
    Key2[Key2["OpenBracket"] = 219] = "OpenBracket";
    Key2[Key2["BackSlash"] = 220] = "BackSlash";
    Key2[Key2["CloseBracket"] = 221] = "CloseBracket";
    Key2[Key2["SingleQuote"] = 222] = "SingleQuote";
  })(Key || (Key = {}));
  const scrollable = {
    props: {
      "data-polaris-scrollable": true
    },
    selector: "[data-polaris-scrollable]"
  };
  const unstyled = {
    props: {
      "data-polaris-unstyled": true
    }
  };
  const dataPolarisTopBar = {
    selector: "[data-polaris-top-bar]"
  };
  const portal = {
    selector: "[data-portal-id]"
  };
  var breakpointsAliases = ["xs", "sm", "md", "lg", "xl"];
  var breakpoints = {
    "breakpoints-xs": {
      value: "0px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
    },
    "breakpoints-sm": {
      value: "490px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
    },
    "breakpoints-md": {
      value: "768px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
    },
    "breakpoints-lg": {
      value: "1040px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
    },
    "breakpoints-xl": {
      value: "1440px",
      description: "Commonly used for sizing containers (e.g. max-width). See below for media query usage."
    }
  };
  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) ;
        else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true) ;
      } catch (err) {
        _d = true, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    strings.raw = raw;
    return strings;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var _templateObject;
  var BASE_FONT_SIZE = 16;
  var UNIT_PX = "px";
  var UNIT_EM = "em";
  var UNIT_REM = "rem";
  var DIGIT_REGEX = new RegExp(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["-?d+(?:.d+|d*)"], ["-?\\d+(?:\\.\\d+|\\d*)"]))));
  var UNIT_REGEX = new RegExp(UNIT_PX + "|" + UNIT_EM + "|" + UNIT_REM);
  function getUnit(value) {
    if (value === void 0) {
      value = "";
    }
    var unit = value.match(new RegExp(DIGIT_REGEX.source + "(" + UNIT_REGEX.source + ")"));
    return unit && unit[1];
  }
  function toPx(value) {
    if (value === void 0) {
      value = "";
    }
    var unit = getUnit(value);
    if (!unit) return value;
    if (unit === UNIT_PX) {
      return value;
    }
    if (unit === UNIT_EM || unit === UNIT_REM) {
      return "" + parseFloat(value) * BASE_FONT_SIZE + UNIT_PX;
    }
  }
  function toEm(value, fontSize) {
    if (value === void 0) {
      value = "";
    }
    if (fontSize === void 0) {
      fontSize = BASE_FONT_SIZE;
    }
    var unit = getUnit(value);
    if (!unit) return value;
    if (unit === UNIT_EM) {
      return value;
    }
    if (unit === UNIT_PX) {
      return "" + parseFloat(value) / fontSize + UNIT_EM;
    }
    if (unit === UNIT_REM) {
      return "" + parseFloat(value) * BASE_FONT_SIZE / fontSize + UNIT_EM;
    }
  }
  function toRem(value) {
    if (value === void 0) {
      value = "";
    }
    var unit = getUnit(value);
    if (!unit) return value;
    if (unit === UNIT_REM) {
      return value;
    }
    if (unit === UNIT_EM) {
      return "" + parseFloat(value) + UNIT_REM;
    }
    if (unit === UNIT_PX) {
      return "" + parseFloat(value) / BASE_FONT_SIZE + UNIT_REM;
    }
  }
  function rem(value) {
    return value.replace(new RegExp(DIGIT_REGEX.source + "(" + UNIT_PX + ")", "g"), function(px) {
      var _toRem;
      return (_toRem = toRem(px)) != null ? _toRem : px;
    });
  }
  function tokenGroupToRems(metaTokenGroup) {
    return Object.fromEntries(
      Object.entries(metaTokenGroup).map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), tokenName = _ref2[0], tokenProperties = _ref2[1];
        return [tokenName, Object.assign(Object.assign({}, tokenProperties), {}, {
          value: rem(tokenProperties.value)
        })];
      })
      // We loose the `metaTokenGroup` inference after transforming the object with
      // `Object.fromEntries()` and `Object.entries()`. Thus, we cast the result
      // back to `T` since we are simply converting the `value` from px to rem.
    );
  }
  function createVarName(tokenName) {
    return "--p-" + tokenName;
  }
  function createVar$1(tokenName) {
    return "var(" + createVarName(tokenName) + ")";
  }
  function getTokenNames(theme) {
    return Object.values(theme).flatMap(function(tokenGroup) {
      return Object.keys(tokenGroup);
    });
  }
  function getMediaConditions(breakpoints2) {
    var breakpointEntries = Object.entries(breakpoints2);
    var lastBreakpointIndex = breakpointEntries.length - 1;
    return Object.fromEntries(breakpointEntries.map(function(entry, index) {
      var _ref3 = entry, _ref4 = _slicedToArray(_ref3, 2), breakpointsTokenName = _ref4[0], breakpoint = _ref4[1];
      var upMediaCondition = getUpMediaCondition(breakpoint);
      var downMediaCondition = getDownMediaCondition(breakpoint);
      var onlyMediaCondition = index === lastBreakpointIndex ? upMediaCondition : upMediaCondition + " and " + getDownMediaCondition(breakpointEntries[index + 1][1]);
      return [breakpointsTokenName, {
        // Media condition for the current breakpoint and up
        up: upMediaCondition,
        // Media condition for current breakpoint and down
        down: downMediaCondition,
        // Media condition for only the current breakpoint
        only: onlyMediaCondition
      }];
    }));
  }
  function getUpMediaCondition(breakpoint) {
    return "(min-width: " + toEm(breakpoint) + ")";
  }
  function getDownMediaCondition(breakpoint) {
    var _toPx2;
    var offsetBreakpoint = parseFloat((_toPx2 = toPx(breakpoint)) != null ? _toPx2 : "") - 0.04;
    return "(max-width: " + toEm(offsetBreakpoint + "px") + ")";
  }
  var tokenGroupNamesToRems = ["border", "breakpoints", "font", "height", "shadow", "space", "text", "width"];
  function createMetaThemeBase(metaTheme) {
    return Object.fromEntries(Object.entries(metaTheme).map(function(_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2), tokenGroupName = _ref6[0], tokenGroup = _ref6[1];
      return [tokenGroupName, tokenGroupNamesToRems.includes(tokenGroupName) ? tokenGroupToRems(tokenGroup) : tokenGroup];
    }));
  }
  var cjs;
  var hasRequiredCjs;
  function requireCjs() {
    if (hasRequiredCjs) return cjs;
    hasRequiredCjs = 1;
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge2(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge2;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge2;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge2(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge2.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge2(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge2;
    cjs = deepmerge_1;
    return cjs;
  }
  var cjsExports = requireCjs();
  const deepmerge = /* @__PURE__ */ getDefaultExportFromCjs(cjsExports);
  var size = {
    "0": "0px",
    "0165": "0.66px",
    "025": "1px",
    "050": "2px",
    "100": "4px",
    "150": "6px",
    "200": "8px",
    "275": "11px",
    "300": "12px",
    "325": "13px",
    "350": "14px",
    "400": "16px",
    "450": "18px",
    "500": "20px",
    "550": "22px",
    "600": "24px",
    "700": "28px",
    "750": "30px",
    "800": "32px",
    "900": "36px",
    "1000": "40px",
    "1200": "48px",
    "1600": "64px",
    "2000": "80px",
    "2400": "96px",
    "2800": "112px",
    "3200": "128px"
  };
  var border = {
    "border-radius-0": {
      value: size[0]
    },
    "border-radius-050": {
      value: size["050"]
    },
    "border-radius-100": {
      value: size[100]
    },
    "border-radius-150": {
      value: size[150]
    },
    "border-radius-200": {
      value: size[200]
    },
    "border-radius-300": {
      value: size[300]
    },
    "border-radius-400": {
      value: size[400]
    },
    "border-radius-500": {
      value: size[500]
    },
    "border-radius-750": {
      value: size[750]
    },
    "border-radius-full": {
      value: "9999px"
    },
    "border-width-0": {
      value: size["0"]
    },
    "border-width-0165": {
      value: size["0165"]
    },
    "border-width-025": {
      value: size["025"]
    },
    "border-width-050": {
      value: size["050"]
    },
    "border-width-100": {
      value: size[100]
    }
  };
  var gray = {
    1: "rgba(255, 255, 255, 1)",
    2: "rgba(253, 253, 253, 1)",
    3: "rgba(250, 250, 250, 1)",
    4: "rgba(247, 247, 247, 1)",
    5: "rgba(243, 243, 243, 1)",
    6: "rgba(241, 241, 241, 1)",
    7: "rgba(235, 235, 235, 1)",
    8: "rgba(227, 227, 227, 1)",
    9: "rgba(212, 212, 212, 1)",
    10: "rgba(204, 204, 204, 1)",
    11: "rgba(181, 181, 181, 1)",
    12: "rgba(138, 138, 138, 1)",
    13: "rgba(97, 97, 97, 1)",
    14: "rgba(74, 74, 74, 1)",
    15: "rgba(48, 48, 48, 1)",
    16: "rgba(26, 26, 26, 1)"
  };
  var azure = {
    "3": "rgba(234, 244, 255, 1)",
    "4": "rgba(224, 240, 255, 1)",
    "5": "rgba(213, 235, 255, 1)",
    "6": "rgba(202, 230, 255, 1)",
    "8": "rgba(168, 216, 255, 1)",
    "9": "rgba(145, 208, 255, 1)",
    "10": "rgba(81, 192, 255, 1)",
    "11": "rgba(0, 148, 213, 1)",
    "12": "rgba(0, 124, 180, 1)",
    "15": "rgba(0, 58, 90, 1)",
    "16": "rgba(0, 33, 51, 1)"
  };
  var blue = {
    "1": "rgba(252, 253, 255, 1)",
    "3": "rgba(240, 242, 255, 1)",
    "4": "rgba(234, 237, 255, 1)",
    "5": "rgba(226, 231, 255, 1)",
    "7": "rgba(213, 220, 255, 1)",
    "8": "rgba(197, 208, 255, 1)",
    "13": "rgba(0, 91, 211, 1)",
    "14": "rgba(0, 66, 153, 1)",
    "15": "rgba(0, 46, 106, 1)"
  };
  var green = {
    "1": "rgba(248, 255, 251, 1)",
    "3": "rgba(205, 254, 225, 1)",
    "4": "rgba(180, 254, 210, 1)",
    "5": "rgba(146, 254, 194, 1)",
    "7": "rgba(56, 250, 163, 1)",
    "12": "rgba(41, 132, 90, 1)",
    "13": "rgba(19, 111, 69, 1)",
    "14": "rgba(12, 81, 50, 1)",
    "15": "rgba(8, 61, 37, 1)",
    "16": "rgba(9, 42, 27, 1)"
  };
  var lime = {
    "9": "rgba(37, 232, 43, 1)",
    "15": "rgba(3, 61, 5, 1)"
  };
  var magenta = {
    "3": "rgba(253, 239, 253, 1)",
    "12": "rgba(197, 48, 197, 1)"
  };
  var orange = {
    "3": "rgba(255, 241, 227, 1)",
    "4": "rgba(255, 235, 213, 1)",
    "5": "rgba(255, 228, 198, 1)",
    "7": "rgba(255, 214, 164, 1)",
    "8": "rgba(255, 200, 121, 1)",
    "9": "rgba(255, 184, 0, 1)",
    "10": "rgba(229, 165, 0, 1)",
    "11": "rgba(178, 132, 0, 1)",
    "12": "rgba(149, 111, 0, 1)",
    "14": "rgba(94, 66, 0, 1)",
    "15": "rgba(65, 45, 0, 1)",
    "16": "rgba(37, 26, 0, 1)"
  };
  var purple = {
    "1": "rgba(253, 253, 255, 1)",
    "2": "rgba(248, 247, 255, 1)",
    "3": "rgba(243, 241, 255, 1)",
    "5": "rgba(233, 229, 255, 1)",
    "6": "rgba(228, 222, 255, 1)",
    "7": "rgba(223, 217, 255, 1)",
    "11": "rgba(148, 116, 255, 1)",
    "12": "rgba(128, 81, 255, 1)",
    "13": "rgba(113, 38, 255, 1)",
    "14": "rgba(87, 0, 209, 1)"
  };
  var red = {
    "1": "rgba(255, 251, 251, 1)",
    "4": "rgba(254, 233, 232, 1)",
    "5": "rgba(254, 226, 225, 1)",
    "6": "rgba(254, 218, 217, 1)",
    "7": "rgba(254, 211, 209, 1)",
    "8": "rgba(254, 195, 193, 1)",
    "11": "rgba(239, 77, 47, 1)",
    "12": "rgba(229, 28, 0, 1)",
    "13": "rgba(181, 38, 11, 1)",
    "14": "rgba(142, 31, 11, 1)",
    "15": "rgba(95, 21, 7, 1)",
    "16": "rgba(47, 10, 4, 1)"
  };
  var rose = {
    "2": "rgba(255, 246, 248, 1)",
    "11": "rgba(253, 75, 146, 1)"
  };
  var teal = {
    "9": "rgba(44, 224, 212, 1)",
    "15": "rgba(3, 60, 57, 1)"
  };
  var yellow = {
    "2": "rgba(255, 248, 219, 1)",
    "3": "rgba(255, 244, 191, 1)",
    "4": "rgba(255, 239, 157, 1)",
    "5": "rgba(255, 235, 120, 1)",
    "6": "rgba(255, 230, 0, 1)",
    "8": "rgba(234, 211, 0, 1)",
    "9": "rgba(225, 203, 0, 1)",
    "11": "rgba(153, 138, 0, 1)",
    "12": "rgba(130, 117, 0, 1)",
    "14": "rgba(79, 71, 0, 1)",
    "15": "rgba(51, 46, 0, 1)",
    "16": "rgba(31, 28, 0, 1)"
  };
  var blackAlpha = {
    1: "rgba(0, 0, 0, 0)",
    3: "rgba(0, 0, 0, 0.02)",
    5: "rgba(0, 0, 0, 0.05)",
    6: "rgba(0, 0, 0, 0.06)",
    7: "rgba(0, 0, 0, 0.08)",
    8: "rgba(0, 0, 0, 0.11)",
    9: "rgba(0, 0, 0, 0.17)",
    10: "rgba(0, 0, 0, 0.20)",
    14: "rgba(0, 0, 0, 0.71)",
    15: "rgba(0, 0, 0, 0.81)"
  };
  var whiteAlpha = {
    4: "rgba(255, 255, 255, 0.03)",
    8: "rgba(255, 255, 255, 0.11)",
    9: "rgba(255, 255, 255, 0.17)",
    10: "rgba(255, 255, 255, 0.20)",
    11: "rgba(255, 255, 255, 0.28)"
  };
  var color = {
    "color-scheme": {
      value: "light"
    },
    "color-bg": {
      value: gray[6],
      description: "The default background color of the admin."
    },
    "color-bg-inverse": {
      value: gray[16],
      description: "Use for high contrast page or component backgrounds."
    },
    "color-bg-surface": {
      value: gray[1],
      description: "The background color for elements with the highest level of prominence, like a card."
    },
    "color-bg-surface-hover": {
      value: gray[4],
      description: "The hover state color for elements with the highest level of prominence."
    },
    "color-bg-surface-active": {
      value: gray[5],
      description: "The active state (on press) color for elements with the highest level of prominence."
    },
    "color-bg-surface-selected": {
      value: gray[6],
      description: "The selected state color for elements with the highest level of prominence."
    },
    "color-bg-surface-disabled": {
      value: blackAlpha[5],
      description: "The disabled state color for elements."
    },
    "color-bg-surface-secondary": {
      value: gray[4],
      description: "The background color for elements with a secondary level of prominence."
    },
    "color-bg-surface-secondary-hover": {
      value: gray[6],
      description: "The hover state color for elements with a secondary level of prominence."
    },
    "color-bg-surface-secondary-active": {
      value: gray[7],
      description: "The active state (on press) color for elements with a secondary level of prominence."
    },
    "color-bg-surface-secondary-selected": {
      value: gray[7],
      description: "The selected state color for elements with a secondary level of prominence."
    },
    "color-bg-surface-tertiary": {
      value: gray[5],
      description: "The background color for elements with a third level of prominence."
    },
    "color-bg-surface-tertiary-hover": {
      value: gray[7],
      description: "The hover state color for elements with a third level of prominence."
    },
    "color-bg-surface-tertiary-active": {
      value: gray[8],
      description: "The active state (on press) color for elements with a third level of prominence."
    },
    "color-bg-surface-brand": {
      value: gray[8],
      description: "Use to apply the key color to elements."
    },
    "color-bg-surface-brand-hover": {
      value: gray[7],
      description: "The hover state color for key elements."
    },
    "color-bg-surface-brand-active": {
      value: gray[6],
      description: "The active state (on press) color for key elements."
    },
    "color-bg-surface-brand-selected": {
      value: gray[6],
      description: "The selected state color for key elements."
    },
    "color-bg-surface-info": {
      value: azure[3],
      description: "Use for backgrounds communicating important information, like banners."
    },
    "color-bg-surface-info-hover": {
      value: azure[4],
      description: "The hover state color for communicating important information."
    },
    "color-bg-surface-info-active": {
      value: azure[6],
      description: "The active state (on press) color for communicating important information."
    },
    "color-bg-surface-success": {
      value: green[3],
      description: "Use for backgrounds communicating success, like banners."
    },
    "color-bg-surface-success-hover": {
      value: green[4],
      description: "The hover state color for communicating success."
    },
    "color-bg-surface-success-active": {
      value: green[5],
      description: "The active state (on press) color for communicating success."
    },
    "color-bg-surface-caution": {
      value: yellow[2],
      description: "Use for backgrounds communicating caution, like banners."
    },
    "color-bg-surface-caution-hover": {
      value: yellow[3],
      description: "The hover state for communicating caution."
    },
    "color-bg-surface-caution-active": {
      value: yellow[4],
      description: "The active state (on press) color for communicating caution."
    },
    "color-bg-surface-warning": {
      value: orange[3],
      description: "Use for backgrounds communicating warning, like banners."
    },
    "color-bg-surface-warning-hover": {
      value: orange[4],
      description: "The hover state color for communicating warning."
    },
    "color-bg-surface-warning-active": {
      value: orange[5],
      description: "The active state (on press) color for communicating warning."
    },
    "color-bg-surface-critical": {
      value: red[4],
      description: "Use for backgrounds communicating critical information, like banners or input errors."
    },
    "color-bg-surface-critical-hover": {
      value: red[5],
      description: "The hover state color for communicating critical information."
    },
    "color-bg-surface-critical-active": {
      value: red[6],
      description: "The active state (on press) color for communicating critical information."
    },
    "color-bg-surface-emphasis": {
      value: blue[3],
      description: "Use for backgrounds indicating areas of focus in editors, such as the theme editor."
    },
    "color-bg-surface-emphasis-hover": {
      value: blue[4],
      description: "The hover state color for elements indicating areas of focus in editors."
    },
    "color-bg-surface-emphasis-active": {
      value: blue[5],
      description: "The active state (on press) color for elements indicating areas of focus in editors."
    },
    "color-bg-surface-magic": {
      value: purple[2],
      description: "Use for backgrounds of elements suggested by magic AI."
    },
    "color-bg-surface-magic-hover": {
      value: purple[3],
      description: "The hover state color for elements suggested by magic AI."
    },
    "color-bg-surface-magic-active": {
      value: purple[5],
      description: "The active state (on press) color for elements suggested by magic AI."
    },
    "color-bg-surface-inverse": {
      value: gray[15],
      description: "Use for elements on bg-inverse."
    },
    "color-bg-surface-transparent": {
      value: blackAlpha[1],
      description: "Use for elements that need a fully transparent background."
    },
    "color-bg-fill": {
      value: gray[1],
      description: "The background color of contained elements with a smaller surface area, like a button."
    },
    "color-bg-fill-hover": {
      value: gray[3],
      description: "The hover state color of contained elements with a smaller surface area, like a button."
    },
    "color-bg-fill-active": {
      value: gray[4],
      description: "The active state (on press) color of contained elements with a smaller surface area, like a button."
    },
    "color-bg-fill-selected": {
      value: gray[10],
      description: "The selected state color of contained elements with a smaller surface area, like a button or checkbox."
    },
    "color-bg-fill-disabled": {
      value: blackAlpha[5],
      description: "The disabled state color of contained elements with a smaller surface area, like a button."
    },
    "color-bg-fill-secondary": {
      value: gray[6],
      description: "The background color of elements with a smaller surface area and a secondary level of prominence."
    },
    "color-bg-fill-secondary-hover": {
      value: gray[7],
      description: "The hover state color of elements with a smaller surface area and a secondary level of prominence."
    },
    "color-bg-fill-secondary-active": {
      value: gray[8],
      description: "The active state (on press) color of elements with a smaller surface area and a secondary level of prominence."
    },
    "color-bg-fill-tertiary": {
      value: gray[8],
      description: "The background color of elements with a smaller surface area and a third level of prominence."
    },
    "color-bg-fill-tertiary-hover": {
      value: gray[9],
      description: "The hover state color of elements with a smaller surface area and a third level of prominence."
    },
    "color-bg-fill-tertiary-active": {
      value: gray[10],
      description: "The active state (on press) color of elements with a smaller surface area and a third level of prominence."
    },
    "color-bg-fill-brand": {
      value: gray[15],
      description: "The background color of main actions, like primary buttons."
    },
    "color-bg-fill-brand-hover": {
      value: gray[16],
      description: "The hover state color of main actions, like primary buttons."
    },
    "color-bg-fill-brand-active": {
      value: gray[16],
      description: "The active state (on press) color of main actions, like primary buttons."
    },
    "color-bg-fill-brand-selected": {
      value: gray[15],
      description: "The selected state color of main actions, like primary buttons."
    },
    "color-bg-fill-brand-disabled": {
      value: blackAlpha[9],
      description: "The disabled state color of main actions, like primary buttons."
    },
    "color-bg-fill-info": {
      value: azure[9],
      description: "Use for backgrounds communicating important information on elements with a smaller surface area, like a badge or button."
    },
    "color-bg-fill-info-hover": {
      value: azure[10],
      description: "The hover state color for communicating important information on elements with a smaller surface area."
    },
    "color-bg-fill-info-active": {
      value: azure[11],
      description: "The active state (on press) color for communicating important information on elements with a smaller surface area."
    },
    "color-bg-fill-info-secondary": {
      value: azure[5],
      description: "Use for backgrounds communicating important information on elements with a smaller surface area, with a secondary level of prominence."
    },
    "color-bg-fill-success": {
      value: green[12],
      description: "Use for backgrounds communicating success on elements with a smaller surface area, like a badge or a banner."
    },
    "color-bg-fill-success-hover": {
      value: green[13],
      description: "The hover state color for communicating success on elements with a smaller surface area."
    },
    "color-bg-fill-success-active": {
      value: green[14],
      description: "The active state (on press) color for communicating success on elements with a smaller surface area."
    },
    "color-bg-fill-success-secondary": {
      value: green[4],
      description: "Use for backgrounds communicating success on elements with a smaller surface area, with a secondary level of prominence."
    },
    "color-bg-fill-warning": {
      value: orange[9],
      description: "Use for backgrounds communicating warning on elements with a smaller surface area, like a badge or a banner."
    },
    "color-bg-fill-warning-hover": {
      value: orange[10],
      description: "The hover state color for communicating warning on elements with a smaller surface area."
    },
    "color-bg-fill-warning-active": {
      value: orange[11],
      description: "The active state (on press) color for communicating warning on elements with a smaller surface area."
    },
    "color-bg-fill-warning-secondary": {
      value: orange[7],
      description: "Use for backgrounds communicating warning on elements with a smaller surface area, with a secondary level of prominence."
    },
    "color-bg-fill-caution": {
      value: yellow[6],
      description: "Use for backgrounds communicating caution on elements with a smaller surface area, like a badge or a banner."
    },
    "color-bg-fill-caution-hover": {
      value: yellow[8],
      description: "The hover state color for communicating caution on elements with a smaller surface area."
    },
    "color-bg-fill-caution-active": {
      value: yellow[9],
      description: "The active state (on press) color for communicating caution on elements with a smaller surface area."
    },
    "color-bg-fill-caution-secondary": {
      value: yellow[5],
      description: "Use for backgrounds communicating caution on elements with a smaller surface area, with a secondary level of prominence."
    },
    "color-bg-fill-critical": {
      value: red[12],
      description: "Use for backgrounds communicating critical information on elements with a smaller surface area, like a badge or a banner."
    },
    "color-bg-fill-critical-hover": {
      value: red[13],
      description: "The hover state color for communicating critical information on elements with a smaller surface area."
    },
    "color-bg-fill-critical-active": {
      value: red[14],
      description: "The active state (on press) color for communicating critical information on elements with a smaller surface area."
    },
    "color-bg-fill-critical-selected": {
      value: red[14],
      description: "The selected state color for communicating critical information on elements with a smaller surface area."
    },
    "color-bg-fill-critical-secondary": {
      value: red[7],
      description: "Use for backgrounds communicating critical information on elements with a smaller surface area, with a secondary level of prominence."
    },
    "color-bg-fill-emphasis": {
      value: blue[13],
      description: "Use for backgrounds indicating areas of focus in editors on elements with a smaller surface area, like a button or a badge."
    },
    "color-bg-fill-emphasis-hover": {
      value: blue[14],
      description: "The hover state color for indicating areas of focus in editors on elements with a smaller surface area."
    },
    "color-bg-fill-emphasis-active": {
      value: blue[15],
      description: "The active state (on press) color for indicating areas of focus in editors on elements with a smaller surface area."
    },
    "color-bg-fill-magic": {
      value: purple[12],
      description: "The background color of elements suggested by magic AI, like a badge or a banner."
    },
    "color-bg-fill-magic-secondary": {
      value: purple[5],
      description: "The background color of elements suggested by magic AI, with a secondary level of prominence."
    },
    "color-bg-fill-magic-secondary-hover": {
      value: purple[6],
      description: "The hover state color of elements suggested by magic AI, with a secondary level of prominence."
    },
    "color-bg-fill-magic-secondary-active": {
      value: purple[7],
      description: "The active state (on press) color of elements suggested by magic AI, with a secondary level of prominence."
    },
    "color-bg-fill-inverse": {
      value: gray[15],
      description: "The background color of elements with a smaller surface area on an inverse background."
    },
    "color-bg-fill-inverse-hover": {
      value: gray[14],
      description: "The hover state color of elements with a smaller surface area on an inverse background."
    },
    "color-bg-fill-inverse-active": {
      value: gray[13],
      description: "The active state (on press) color of elements with a smaller surface area on an inverse background."
    },
    "color-bg-fill-transparent": {
      value: blackAlpha[3],
      description: "The background color of elements that need to sit on different background colors, like tabs."
    },
    "color-bg-fill-transparent-hover": {
      value: blackAlpha[5],
      description: "The hover state color of elements that need to sit on different background colors, like tabs."
    },
    "color-bg-fill-transparent-active": {
      value: blackAlpha[7],
      description: "The active state (on press) color of elements that need to sit on different background colors, like tabs."
    },
    "color-bg-fill-transparent-selected": {
      value: blackAlpha[7],
      description: "The selected state color of elements that need to sit on different background colors, like tabs."
    },
    "color-bg-fill-transparent-secondary": {
      value: blackAlpha[6],
      description: "The background color of elements that need to sit on different background colors, with a secondary level of prominence."
    },
    "color-bg-fill-transparent-secondary-hover": {
      value: blackAlpha[7],
      description: "The hover state color of elements that need to sit on different background colors, with a secondary level of prominence."
    },
    "color-bg-fill-transparent-secondary-active": {
      value: blackAlpha[8],
      description: "The active state (on press) color of elements that need to sit on different background colors, with a secondary level of prominence."
    },
    "color-text": {
      value: gray[15],
      description: "The default text color."
    },
    "color-text-secondary": {
      value: gray[13],
      description: "Use for text with a secondary level of prominence."
    },
    "color-text-disabled": {
      value: gray[11],
      description: "Use for text in a disabled state."
    },
    "color-text-link": {
      value: blue[13],
      description: "Use for text links."
    },
    "color-text-link-hover": {
      value: blue[14],
      description: "The hover state color for text links."
    },
    "color-text-link-active": {
      value: blue[15],
      description: "The active state (on press) color for text links."
    },
    "color-text-brand": {
      value: gray[14],
      description: "Use for text that needs to pull attention."
    },
    "color-text-brand-hover": {
      value: gray[15],
      description: "The hover state color for text that needs to pull attention."
    },
    "color-text-brand-on-bg-fill": {
      value: gray[1],
      description: "Use for text on bg-fill-brand, like primary buttons."
    },
    "color-text-brand-on-bg-fill-hover": {
      value: gray[8],
      description: "The hover state color for text on bg-fill-brand-hover."
    },
    "color-text-brand-on-bg-fill-active": {
      value: gray[10],
      description: "The active state (on press) color for text on bg-fill-brand."
    },
    "color-text-brand-on-bg-fill-disabled": {
      value: gray[1],
      description: "The disabled state color for text on bg-fill-brand-disabled."
    },
    "color-text-info": {
      value: azure[15],
      description: "Use for text communicating important information."
    },
    "color-text-info-hover": {
      value: azure[15],
      description: "The hover state color for text communicating important information."
    },
    "color-text-info-active": {
      value: azure[16],
      description: "The active state (on press) color for text communicating important information."
    },
    "color-text-info-secondary": {
      value: azure[12],
      description: "Use for text communicating important information with a secondary level of prominence."
    },
    "color-text-info-on-bg-fill": {
      value: azure[16],
      description: "Use for text and icons on bg-fill-info."
    },
    "color-text-success": {
      value: green[14],
      description: "Use for text communicating success."
    },
    "color-text-success-hover": {
      value: green[15],
      description: "The hover state color for text communicating success."
    },
    "color-text-success-active": {
      value: green[16],
      description: "The active state (on press) color for text communicating success."
    },
    "color-text-success-secondary": {
      value: green[12],
      description: "Use for text communicating success with a secondary level of prominence."
    },
    "color-text-success-on-bg-fill": {
      value: green[1],
      description: "Use for text and icons on bg-fill-success."
    },
    "color-text-caution": {
      value: yellow[14],
      description: "Use for text communicating caution."
    },
    "color-text-caution-hover": {
      value: yellow[15],
      description: "The hover state color for text communicating caution."
    },
    "color-text-caution-active": {
      value: yellow[16],
      description: "The active state (on press) color for text communicating caution."
    },
    "color-text-caution-secondary": {
      value: yellow[12],
      description: "Use for text communicating caution with a secondary level of prominence."
    },
    "color-text-caution-on-bg-fill": {
      value: yellow[15],
      description: "Use for text and icons on bg-fill-caution."
    },
    "color-text-warning": {
      value: orange[14],
      description: "Use for text communicating warning."
    },
    "color-text-warning-hover": {
      value: orange[15],
      description: "The hover state color for text communicating warning."
    },
    "color-text-warning-active": {
      value: orange[16],
      description: "The active state (on press) color for text communicating warning."
    },
    "color-text-warning-secondary": {
      value: orange[12],
      description: "Use for text communicating warning with a secondary level of prominence."
    },
    "color-text-warning-on-bg-fill": {
      value: orange[16],
      description: "Use for text and icons on bg-fill-warning."
    },
    "color-text-critical": {
      value: red[14],
      description: "Use for text communicating critical information."
    },
    "color-text-critical-hover": {
      value: red[15],
      description: "The hover state color for text communicating critical information."
    },
    "color-text-critical-active": {
      value: red[16],
      description: "The active state (on press) color for text communicating critical information."
    },
    "color-text-critical-secondary": {
      value: red[12],
      description: "Use for text communicating critical information with a secondary level of prominence."
    },
    "color-text-critical-on-bg-fill": {
      value: red[1],
      description: "Use for text and icons on bg-fill-critical."
    },
    "color-text-emphasis": {
      value: blue[13],
      description: "Use for text indicating areas of focus in editors, like the theme editor."
    },
    "color-text-emphasis-hover": {
      value: blue[14],
      description: "The hover state color for text indicating areas of focus."
    },
    "color-text-emphasis-active": {
      value: blue[15],
      description: "The active state (on press) color for text indicating areas of focus."
    },
    "color-text-emphasis-on-bg-fill": {
      value: blue[1],
      description: "Use for text and icons on bg-fill-emphasis."
    },
    "color-text-emphasis-on-bg-fill-hover": {
      value: blue[5],
      description: "Use for text and icons on bg-fill-emphasis-hover."
    },
    "color-text-emphasis-on-bg-fill-active": {
      value: blue[7],
      description: "Use for text and icons on bg-fill-emphasis-active."
    },
    "color-text-magic": {
      value: purple[14],
      description: "Use for text suggested by magic AI."
    },
    "color-text-magic-secondary": {
      value: purple[13],
      description: "Use for text suggested by magic AI with a secondary level of prominence."
    },
    "color-text-magic-on-bg-fill": {
      value: purple[1],
      description: "Use for text and icons on bg-fill-magic."
    },
    "color-text-inverse": {
      value: gray[8],
      description: "Use for text on an inverse background."
    },
    "color-text-inverse-secondary": {
      value: gray[11],
      description: "Use for secondary text on an inverse background."
    },
    "color-text-link-inverse": {
      value: blue[8],
      description: "Use for text links on an inverse background."
    },
    "color-border": {
      value: gray[8],
      description: "The default color for borders on any element."
    },
    "color-border-hover": {
      value: gray[10],
      description: "The hover color for borders on any element."
    },
    "color-border-disabled": {
      value: gray[7],
      description: "The disabled color for borders on any element."
    },
    "color-border-secondary": {
      value: gray[7],
      description: "The color for hr elements or any visual dividers."
    },
    "color-border-tertiary": {
      value: gray[10],
      description: "The border color on any element. Pair with bg-surface-tertiary or bg-fill-tertiary."
    },
    "color-border-focus": {
      value: blue[13],
      description: "The focus ring for any interactive element in a focused state."
    },
    "color-border-brand": {
      value: gray[8],
      description: "Use for borders paired with brand colors."
    },
    "color-border-info": {
      value: azure[8],
      description: "Use for borders communicating information."
    },
    "color-border-success": {
      value: green[5],
      description: "Use for borders communicating success."
    },
    "color-border-caution": {
      value: yellow[5],
      description: "Use for borders communicating caution."
    },
    "color-border-warning": {
      value: orange[8],
      description: "Use for borders communicating warning."
    },
    "color-border-critical": {
      value: red[8],
      description: "Use for borders communicating critical information."
    },
    "color-border-critical-secondary": {
      value: red[14],
      description: "Use for borders communicating critical information, such as borders on invalid text fields."
    },
    "color-border-emphasis": {
      value: blue[13],
      description: "Use for borders indicating areas of focus."
    },
    "color-border-emphasis-hover": {
      value: blue[14],
      description: "The hover state color for borders indicating areas of focus."
    },
    "color-border-emphasis-active": {
      value: blue[15],
      description: "The active state (on press) color for borders indicating areas of focus."
    },
    "color-border-magic": {
      value: purple[6],
      description: "Use for borders suggested by magic AI."
    },
    "color-border-magic-secondary": {
      value: purple[11],
      description: "Use for borders suggested by magic AI, such as borders on text fields."
    },
    "color-border-magic-secondary-hover": {
      value: purple[12],
      description: "Use for borders suggested by magic AI, such as borders on text fields."
    },
    "color-border-inverse": {
      value: gray[13],
      description: "Use for borders on an inverse background, such as borders on the global search."
    },
    "color-border-inverse-hover": {
      value: gray[10],
      description: "The hover state color for borders on an inverse background."
    },
    "color-border-inverse-active": {
      value: gray[8],
      description: "The active state (on press) color for borders on an inverse background."
    },
    "color-tooltip-tail-down-border-experimental": {
      value: gray[9],
      description: "The border color for tooltip tails pointing down."
    },
    "color-tooltip-tail-up-border-experimental": {
      value: gray[8],
      description: "The border color for tooltip tails pointing up."
    },
    "color-border-gradient-experimental": {
      value: "linear-gradient(to bottom, " + gray[7] + ", " + gray[10] + " 78%, " + gray[11] + ")"
    },
    "color-border-gradient-hover-experimental": {
      value: "linear-gradient(to bottom, " + gray[7] + ", " + gray[10] + " 78%, " + gray[11] + ")"
    },
    "color-border-gradient-selected-experimental": {
      value: "linear-gradient(to bottom, " + gray[7] + ", " + gray[10] + " 78%, " + gray[11] + ")"
    },
    "color-border-gradient-active-experimental": {
      value: "linear-gradient(to bottom, " + gray[7] + ", " + gray[10] + " 78%, " + gray[11] + ")"
    },
    "color-icon": {
      value: gray[14],
      description: "The default color for icons."
    },
    "color-icon-hover": {
      value: gray[15],
      description: "The hover state color for icons."
    },
    "color-icon-active": {
      value: gray[16],
      description: "The active state (on press) color for icons."
    },
    "color-icon-disabled": {
      value: gray[10],
      description: "The disabled state color for icons."
    },
    "color-icon-secondary": {
      value: gray[12],
      description: "Use for secondary icons."
    },
    "color-icon-secondary-hover": {
      value: gray[13],
      description: "The hover state color for secondary icons."
    },
    "color-icon-secondary-active": {
      value: gray[14],
      description: "The active state (on press) color for secondary icons."
    },
    "color-icon-brand": {
      value: gray[16],
      description: "Use for icons that need to pull more focus."
    },
    "color-icon-info": {
      value: azure[11],
      description: "Use for icons communicating information."
    },
    "color-icon-success": {
      value: green[12],
      description: "Use for icons communicating success."
    },
    "color-icon-caution": {
      value: yellow[11],
      description: "Use for icons communicating caution."
    },
    "color-icon-warning": {
      value: orange[11],
      description: "Use for icons communicating warning."
    },
    "color-icon-critical": {
      value: red[11],
      description: "Use for icons communicating critical information."
    },
    "color-icon-emphasis": {
      value: blue[13],
      description: "Use for icons indicating areas of focus in editors, like the theme editor."
    },
    "color-icon-emphasis-hover": {
      value: blue[14],
      description: "The hover color for icons indicating areas of focus in editors."
    },
    "color-icon-emphasis-active": {
      value: blue[15],
      description: "The active state (on press) color for icons indicating areas of focus in editors."
    },
    "color-icon-magic": {
      value: purple[12],
      description: "Use for icons suggested by magic AI."
    },
    "color-icon-inverse": {
      value: gray[8],
      description: "Use for icons on an inverse background."
    },
    "color-avatar-bg-fill": {
      value: gray[11]
    },
    "color-avatar-five-bg-fill": {
      value: rose[11]
    },
    "color-avatar-five-text-on-bg-fill": {
      value: rose[2]
    },
    "color-avatar-four-bg-fill": {
      value: azure[10]
    },
    "color-avatar-four-text-on-bg-fill": {
      value: azure[16]
    },
    "color-avatar-one-bg-fill": {
      value: magenta[12]
    },
    "color-avatar-one-text-on-bg-fill": {
      value: magenta[3]
    },
    "color-avatar-seven-bg-fill": {
      value: purple[11]
    },
    "color-avatar-seven-text-on-bg-fill": {
      value: purple[2]
    },
    "color-avatar-six-bg-fill": {
      value: lime[9]
    },
    "color-avatar-six-text-on-bg-fill": {
      value: lime[15]
    },
    "color-avatar-text-on-bg-fill": {
      value: gray[1]
    },
    "color-avatar-three-bg-fill": {
      value: teal[9]
    },
    "color-avatar-three-text-on-bg-fill": {
      value: teal[15]
    },
    "color-avatar-two-bg-fill": {
      value: green[7]
    },
    "color-avatar-two-text-on-bg-fill": {
      value: green[14]
    },
    "color-backdrop-bg": {
      value: blackAlpha[14]
    },
    "color-button-gradient-bg-fill": {
      value: "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)"
    },
    "color-checkbox-bg-surface-disabled": {
      value: blackAlpha[7]
    },
    "color-checkbox-icon-disabled": {
      value: gray[1]
    },
    "color-input-bg-surface": {
      value: gray[2]
    },
    "color-input-bg-surface-hover": {
      value: gray[3]
    },
    "color-input-bg-surface-active": {
      value: gray[4]
    },
    "color-input-border": {
      value: gray[12]
    },
    "color-input-border-hover": {
      value: gray[13]
    },
    "color-input-border-active": {
      value: gray[16]
    },
    "color-nav-bg": {
      value: gray[7]
    },
    "color-nav-bg-surface": {
      value: blackAlpha[3]
    },
    "color-nav-bg-surface-hover": {
      value: gray[6]
    },
    "color-nav-bg-surface-active": {
      value: gray[3]
    },
    "color-nav-bg-surface-selected": {
      value: gray[3]
    },
    "color-radio-button-bg-surface-disabled": {
      value: blackAlpha[7]
    },
    "color-radio-button-icon-disabled": {
      value: gray[1]
    },
    "color-video-thumbnail-play-button-bg-fill-hover": {
      value: blackAlpha[15]
    },
    "color-video-thumbnail-play-button-bg-fill": {
      value: blackAlpha[14]
    },
    "color-video-thumbnail-play-button-text-on-bg-fill": {
      value: gray[1]
    },
    "color-scrollbar-thumb-bg-hover": {
      value: gray[12]
    }
  };
  var font = {
    "font-family-sans": {
      value: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
    },
    "font-family-mono": {
      value: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
    },
    "font-size-275": {
      value: size[275]
    },
    "font-size-300": {
      value: size[300]
    },
    "font-size-325": {
      value: size[325]
    },
    "font-size-350": {
      value: size[350]
    },
    "font-size-400": {
      value: size[400]
    },
    "font-size-450": {
      value: size[450]
    },
    "font-size-500": {
      value: size[500]
    },
    "font-size-550": {
      value: size[550]
    },
    "font-size-600": {
      value: size[600]
    },
    "font-size-750": {
      value: size[750]
    },
    "font-size-800": {
      value: size[800]
    },
    "font-size-900": {
      value: size[900]
    },
    "font-size-1000": {
      value: size[1e3]
    },
    "font-weight-regular": {
      value: "450"
    },
    "font-weight-medium": {
      value: "550"
    },
    "font-weight-semibold": {
      value: "650"
    },
    "font-weight-bold": {
      value: "700"
    },
    "font-letter-spacing-densest": {
      value: "-0.54px"
    },
    "font-letter-spacing-denser": {
      value: "-0.3px"
    },
    "font-letter-spacing-dense": {
      value: "-0.2px"
    },
    "font-letter-spacing-normal": {
      value: "0px"
    },
    "font-line-height-300": {
      value: size[300]
    },
    "font-line-height-400": {
      value: size[400]
    },
    "font-line-height-500": {
      value: size[500]
    },
    "font-line-height-600": {
      value: size[600]
    },
    "font-line-height-700": {
      value: size[700]
    },
    "font-line-height-800": {
      value: size[800]
    },
    "font-line-height-1000": {
      value: size[1e3]
    },
    "font-line-height-1200": {
      value: size[1200]
    }
  };
  var height = {
    "height-0": {
      value: size[0]
    },
    "height-025": {
      value: size["025"]
    },
    "height-050": {
      value: size["050"]
    },
    "height-100": {
      value: size[100]
    },
    "height-150": {
      value: size[150]
    },
    "height-200": {
      value: size[200]
    },
    "height-300": {
      value: size[300]
    },
    "height-400": {
      value: size[400]
    },
    "height-500": {
      value: size[500]
    },
    "height-600": {
      value: size[600]
    },
    "height-700": {
      value: size[700]
    },
    "height-800": {
      value: size[800]
    },
    "height-900": {
      value: size[900]
    },
    "height-1000": {
      value: size[1e3]
    },
    "height-1200": {
      value: size[1200]
    },
    "height-1600": {
      value: size[1600]
    },
    "height-2000": {
      value: size[2e3]
    },
    "height-2400": {
      value: size[2400]
    },
    "height-2800": {
      value: size[2800]
    },
    "height-3200": {
      value: size[3200]
    }
  };
  var motion = {
    "motion-duration-0": {
      value: "0ms"
    },
    "motion-duration-50": {
      value: "50ms"
    },
    "motion-duration-100": {
      value: "100ms"
    },
    "motion-duration-150": {
      value: "150ms"
    },
    "motion-duration-200": {
      value: "200ms"
    },
    "motion-duration-250": {
      value: "250ms"
    },
    "motion-duration-300": {
      value: "300ms"
    },
    "motion-duration-350": {
      value: "350ms"
    },
    "motion-duration-400": {
      value: "400ms"
    },
    "motion-duration-450": {
      value: "450ms"
    },
    "motion-duration-500": {
      value: "500ms"
    },
    "motion-duration-5000": {
      value: "5000ms"
    },
    "motion-ease": {
      value: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      description: "Responds quickly and finishes with control. A great default for any user interaction."
    },
    "motion-ease-in": {
      value: "cubic-bezier(0.42, 0, 1, 1)",
      description: "Starts slowly and finishes at top speed. Use sparingly."
    },
    "motion-ease-out": {
      value: "cubic-bezier(0.19, 0.91, 0.38, 1)",
      description: "Starts at top speed and finishes slowly. Use sparingly."
    },
    "motion-ease-in-out": {
      value: "cubic-bezier(0.42, 0, 0.58, 1)",
      description: "Starts and finishes with equal speed. A good default for transitions triggered by the system."
    },
    "motion-linear": {
      value: "cubic-bezier(0, 0, 1, 1)",
      description: "Moves with constant speed. Use for continuous and mechanical animations, such as rotating spinners."
    },
    "motion-keyframes-bounce": {
      value: "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }"
    },
    "motion-keyframes-fade-in": {
      value: "{ to { opacity: 1 } }"
    },
    "motion-keyframes-pulse": {
      value: "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }"
    },
    "motion-keyframes-spin": {
      value: "{ to { transform: rotate(1turn) } }"
    },
    "motion-keyframes-appear-above": {
      value: "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    "motion-keyframes-appear-below": {
      value: "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    }
  };
  var shadow = {
    "shadow-0": {
      value: "none"
    },
    "shadow-100": {
      value: "0px 1px 0px 0px rgba(26, 26, 26, 0.07)"
    },
    "shadow-200": {
      value: "0px 3px 1px -1px rgba(26, 26, 26, 0.07)"
    },
    "shadow-300": {
      value: "0px 4px 6px -2px rgba(26, 26, 26, 0.20)"
    },
    "shadow-400": {
      value: "0px 8px 16px -4px rgba(26, 26, 26, 0.22)"
    },
    "shadow-500": {
      value: "0px 12px 20px -8px rgba(26, 26, 26, 0.24)"
    },
    "shadow-600": {
      value: "0px 20px 20px -8px rgba(26, 26, 26, 0.28)"
    },
    "shadow-bevel-100": {
      value: "1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, -1px 0px 0px 0px rgba(0, 0, 0, 0.13) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.17) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.5) inset"
    },
    "shadow-inset-100": {
      value: "0px 1px 2px 0px rgba(26, 26, 26, 0.15) inset, 0px 1px 1px 0px rgba(26, 26, 26, 0.15) inset"
    },
    "shadow-inset-200": {
      value: "0px 2px 1px 0px rgba(26, 26, 26, 0.20) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset, -1px 0px 1px 0px rgba(26, 26, 26, 0.12) inset"
    },
    "shadow-button": {
      value: "0px -1px 0px 0px #b5b5b5 inset, 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset, 0px 0.5px 0px 1.5px #FFF inset"
    },
    "shadow-button-hover": {
      value: "0px 1px 0px 0px #EBEBEB inset, -1px 0px 0px 0px #EBEBEB inset, 1px 0px 0px 0px #EBEBEB inset, 0px -1px 0px 0px #CCC inset"
    },
    "shadow-button-inset": {
      value: "-1px 0px 1px 0px rgba(26, 26, 26, 0.122) inset, 1px 0px 1px 0px rgba(26, 26, 26, 0.122) inset, 0px 2px 1px 0px rgba(26, 26, 26, 0.2) inset"
    },
    "shadow-button-primary": {
      value: "0px -1px 0px 1px rgba(0, 0, 0, 0.8) inset, 0px 0px 0px 1px rgba(48, 48, 48, 1) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.25) inset;"
    },
    "shadow-button-primary-hover": {
      value: "0px 1px 0px 0px rgba(255, 255, 255, 0.24) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1px 0px 0px #000 inset, 0px -1px 0px 1px #1A1A1A"
    },
    "shadow-button-primary-inset": {
      value: "0px 3px 0px 0px rgb(0, 0, 0) inset"
    },
    "shadow-button-primary-critical": {
      value: "0px -1px 0px 1px rgba(142, 31, 11, 0.8) inset, 0px 0px 0px 1px rgba(181, 38, 11, 0.8) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.349) inset"
    },
    "shadow-button-primary-critical-hover": {
      value: "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset"
    },
    "shadow-button-primary-critical-inset": {
      value: "-1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset"
    },
    "shadow-button-primary-success": {
      value: "0px -1px 0px 1px rgba(12, 81, 50, 0.8) inset, 0px 0px 0px 1px rgba(19, 111, 69, 0.8) inset, 0px 0.5px 0px 1.5px rgba(255, 255, 255, 0.251) inset"
    },
    "shadow-button-primary-success-hover": {
      value: "0px 1px 0px 0px rgba(255, 255, 255, 0.48) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, -1px 0px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1.5px 0px 0px rgba(0, 0, 0, 0.25) inset"
    },
    "shadow-button-primary-success-inset": {
      value: "-1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 1px 0px 1px 0px rgba(0, 0, 0, 0.2) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.6) inset"
    },
    "shadow-border-inset": {
      value: "0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset"
    }
  };
  var space = {
    "space-0": {
      value: size[0]
    },
    "space-025": {
      value: size["025"]
    },
    "space-050": {
      value: size["050"]
    },
    "space-100": {
      value: size[100]
    },
    "space-150": {
      value: size[150]
    },
    "space-200": {
      value: size[200]
    },
    "space-300": {
      value: size[300]
    },
    "space-400": {
      value: size[400]
    },
    "space-500": {
      value: size[500]
    },
    "space-600": {
      value: size[600]
    },
    "space-800": {
      value: size[800]
    },
    "space-1000": {
      value: size[1e3]
    },
    "space-1200": {
      value: size[1200]
    },
    "space-1600": {
      value: size[1600]
    },
    "space-2000": {
      value: size[2e3]
    },
    "space-2400": {
      value: size[2400]
    },
    "space-2800": {
      value: size[2800]
    },
    "space-3200": {
      value: size[3200]
    },
    "space-button-group-gap": {
      value: createVar("space-200")
    },
    "space-card-gap": {
      value: createVar("space-400")
    },
    "space-card-padding": {
      value: createVar("space-400")
    },
    "space-table-cell-padding": {
      value: createVar("space-150")
    }
  };
  function createVar(spaceTokenName) {
    return "var(" + createVarName(spaceTokenName) + ")";
  }
  var text = {
    // heading-3xl
    "text-heading-3xl-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-heading-3xl-font-size": {
      value: createVar$1("font-size-900")
    },
    "text-heading-3xl-font-weight": {
      value: createVar$1("font-weight-bold")
    },
    "text-heading-3xl-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-densest")
    },
    "text-heading-3xl-font-line-height": {
      value: createVar$1("font-line-height-1200")
    },
    // heading-2xl
    "text-heading-2xl-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-heading-2xl-font-size": {
      value: createVar$1("font-size-750")
    },
    "text-heading-2xl-font-weight": {
      value: createVar$1("font-weight-bold")
    },
    "text-heading-2xl-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-denser")
    },
    "text-heading-2xl-font-line-height": {
      value: createVar$1("font-line-height-1000")
    },
    // heading-xl
    "text-heading-xl-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-heading-xl-font-size": {
      value: createVar$1("font-size-600")
    },
    "text-heading-xl-font-weight": {
      value: createVar$1("font-weight-bold")
    },
    "text-heading-xl-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-dense")
    },
    "text-heading-xl-font-line-height": {
      value: createVar$1("font-line-height-800")
    },
    // heading-lg
    "text-heading-lg-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-heading-lg-font-size": {
      value: createVar$1("font-size-500")
    },
    "text-heading-lg-font-weight": {
      value: createVar$1("font-weight-semibold")
    },
    "text-heading-lg-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-dense")
    },
    "text-heading-lg-font-line-height": {
      value: createVar$1("font-line-height-600")
    },
    // heading-md
    "text-heading-md-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-heading-md-font-size": {
      value: createVar$1("font-size-350")
    },
    "text-heading-md-font-weight": {
      value: createVar$1("font-weight-semibold")
    },
    "text-heading-md-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-normal")
    },
    "text-heading-md-font-line-height": {
      value: createVar$1("font-line-height-500")
    },
    // heading-sm
    "text-heading-sm-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-heading-sm-font-size": {
      value: createVar$1("font-size-325")
    },
    "text-heading-sm-font-weight": {
      value: createVar$1("font-weight-semibold")
    },
    "text-heading-sm-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-normal")
    },
    "text-heading-sm-font-line-height": {
      value: createVar$1("font-line-height-500")
    },
    // heading-xs
    "text-heading-xs-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-heading-xs-font-size": {
      value: createVar$1("font-size-300")
    },
    "text-heading-xs-font-weight": {
      value: createVar$1("font-weight-semibold")
    },
    "text-heading-xs-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-normal")
    },
    "text-heading-xs-font-line-height": {
      value: createVar$1("font-line-height-400")
    },
    // body-lg
    "text-body-lg-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-body-lg-font-size": {
      value: createVar$1("font-size-350")
    },
    "text-body-lg-font-weight": {
      value: createVar$1("font-weight-regular")
    },
    "text-body-lg-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-normal")
    },
    "text-body-lg-font-line-height": {
      value: createVar$1("font-line-height-500")
    },
    // body-md
    "text-body-md-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-body-md-font-size": {
      value: createVar$1("font-size-325")
    },
    "text-body-md-font-weight": {
      value: createVar$1("font-weight-regular")
    },
    "text-body-md-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-normal")
    },
    "text-body-md-font-line-height": {
      value: createVar$1("font-line-height-500")
    },
    // body-sm
    "text-body-sm-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-body-sm-font-size": {
      value: createVar$1("font-size-300")
    },
    "text-body-sm-font-weight": {
      value: createVar$1("font-weight-regular")
    },
    "text-body-sm-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-normal")
    },
    "text-body-sm-font-line-height": {
      value: createVar$1("font-line-height-400")
    },
    // body-xs
    "text-body-xs-font-family": {
      value: createVar$1("font-family-sans")
    },
    "text-body-xs-font-size": {
      value: createVar$1("font-size-275")
    },
    "text-body-xs-font-weight": {
      value: createVar$1("font-weight-regular")
    },
    "text-body-xs-font-letter-spacing": {
      value: createVar$1("font-letter-spacing-normal")
    },
    "text-body-xs-font-line-height": {
      value: createVar$1("font-line-height-300")
    }
  };
  var width = {
    "width-0": {
      value: size[0]
    },
    "width-025": {
      value: size["025"]
    },
    "width-050": {
      value: size["050"]
    },
    "width-100": {
      value: size[100]
    },
    "width-150": {
      value: size[150]
    },
    "width-200": {
      value: size[200]
    },
    "width-300": {
      value: size[300]
    },
    "width-400": {
      value: size[400]
    },
    "width-500": {
      value: size[500]
    },
    "width-600": {
      value: size[600]
    },
    "width-700": {
      value: size[700]
    },
    "width-800": {
      value: size[800]
    },
    "width-900": {
      value: size[900]
    },
    "width-1000": {
      value: size[1e3]
    },
    "width-1200": {
      value: size[1200]
    },
    "width-1600": {
      value: size[1600]
    },
    "width-2000": {
      value: size[2e3]
    },
    "width-2400": {
      value: size[2400]
    },
    "width-2800": {
      value: size[2800]
    },
    "width-3200": {
      value: size[3200]
    }
  };
  var zIndex = {
    "z-index-0": {
      value: "auto"
    },
    "z-index-1": {
      value: "100"
    },
    "z-index-2": {
      value: "400"
    },
    "z-index-3": {
      value: "510"
    },
    "z-index-4": {
      value: "512"
    },
    "z-index-5": {
      value: "513"
    },
    "z-index-6": {
      value: "514"
    },
    "z-index-7": {
      value: "515"
    },
    "z-index-8": {
      value: "516"
    },
    "z-index-9": {
      value: "517"
    },
    "z-index-10": {
      value: "518"
    },
    "z-index-11": {
      value: "519"
    },
    "z-index-12": {
      value: "520"
    }
  };
  var metaThemeBase = createMetaThemeBase({
    border,
    breakpoints,
    color,
    font,
    height,
    motion,
    shadow,
    space,
    text,
    width,
    zIndex
  });
  function createMetaThemePartial(metaThemePartial) {
    return Object.fromEntries(Object.entries(metaThemePartial).map(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), tokenGroupName = _ref2[0], tokenGroup = _ref2[1];
      return [tokenGroupName, tokenGroup && tokenGroupNamesToRems.includes(tokenGroupName) ? tokenGroupToRems(tokenGroup) : tokenGroup];
    }));
  }
  function createMetaTheme(metaThemePartial) {
    return deepmerge(metaThemeBase, metaThemePartial);
  }
  function createThemeClassName(themeName) {
    return "p-theme-" + themeName;
  }
  function createIsTokenName(theme) {
    var tokenNames = new Set(getTokenNames(theme));
    return function(tokenName) {
      return tokenNames.has(tokenName);
    };
  }
  createIsTokenName(metaThemeBase);
  var themeNameLight = "light";
  var themeNameDefault = themeNameLight;
  var metaThemeLightPartial = createMetaThemePartial({});
  createMetaTheme(metaThemeLightPartial);
  var metaThemeLightHighContrastPartial = createMetaThemePartial({
    color: {
      "color-text": {
        value: gray[16]
      },
      "color-text-secondary": {
        value: gray[16]
      },
      "color-text-brand": {
        value: gray[16]
      },
      "color-icon-secondary": {
        value: gray[14]
      },
      "color-border": {
        value: gray[12]
      },
      "color-input-border": {
        value: gray[14]
      },
      "color-border-secondary": {
        value: gray[12]
      },
      "color-bg-surface-secondary": {
        value: gray[6]
      }
    },
    shadow: {
      "shadow-bevel-100": {
        value: "0px 1px 0px 0px rgba(26, 26, 26, 0.07), 0px 1px 0px 0px rgba(208, 208, 208, 0.40) inset, 1px 0px 0px 0px #CCC inset, -1px 0px 0px 0px #CCC inset, 0px -1px 0px 0px #999 inset"
      }
    }
  });
  createMetaTheme(metaThemeLightHighContrastPartial);
  var buttonShadow = "0 0 0 " + createVar$1("border-width-025") + " " + createVar$1("color-border") + " inset";
  var metaThemeLightMobilePartial = createMetaThemePartial({
    color: {
      "color-button-gradient-bg-fill": {
        value: "none"
      }
    },
    shadow: {
      "shadow-100": {
        value: "none"
      },
      "shadow-bevel-100": {
        value: "none"
      },
      "shadow-button": {
        value: buttonShadow
      },
      "shadow-button-hover": {
        value: buttonShadow
      },
      "shadow-button-inset": {
        value: buttonShadow
      },
      "shadow-button-primary": {
        value: "none"
      },
      "shadow-button-primary-hover": {
        value: "none"
      },
      "shadow-button-primary-inset": {
        value: "none"
      },
      "shadow-button-primary-critical": {
        value: "none"
      },
      "shadow-button-primary-critical-hover": {
        value: "none"
      },
      "shadow-button-primary-critical-inset": {
        value: "none"
      },
      "shadow-button-primary-success": {
        value: "none"
      },
      "shadow-button-primary-success-hover": {
        value: "none"
      },
      "shadow-button-primary-success-inset": {
        value: "none"
      }
    },
    space: {
      "space-card-gap": {
        value: createVar$1("space-200")
      }
    },
    text: {
      // heading-2xl
      "text-heading-2xl-font-size": {
        value: createVar$1("font-size-800")
      },
      // heading-xl
      "text-heading-xl-font-size": {
        value: createVar$1("font-size-550")
      },
      "text-heading-xl-font-line-height": {
        value: createVar$1("font-line-height-700")
      },
      // heading-lg
      "text-heading-lg-font-size": {
        value: createVar$1("font-size-450")
      },
      // heading-md
      "text-heading-md-font-size": {
        value: createVar$1("font-size-400")
      },
      // heading-sm
      "text-heading-sm-font-size": {
        value: createVar$1("font-size-350")
      },
      // body-lg
      "text-body-lg-font-size": {
        value: createVar$1("font-size-450")
      },
      "text-body-lg-font-line-height": {
        value: createVar$1("font-line-height-700")
      },
      // body-md
      "text-body-md-font-size": {
        value: createVar$1("font-size-400")
      },
      "text-body-md-font-line-height": {
        value: createVar$1("font-line-height-600")
      },
      // body-sm
      "text-body-sm-font-size": {
        value: createVar$1("font-size-350")
      },
      "text-body-sm-font-line-height": {
        value: createVar$1("font-line-height-500")
      },
      // body-xs
      "text-body-xs-font-size": {
        value: createVar$1("font-size-300")
      },
      "text-body-xs-font-line-height": {
        value: createVar$1("font-line-height-400")
      }
    }
  });
  createMetaTheme(metaThemeLightMobilePartial);
  var metaThemeDarkPartial = createMetaThemePartial({
    color: {
      "color-scheme": {
        value: "dark"
      },
      "color-bg": {
        value: gray[16]
      },
      "color-bg-surface": {
        value: gray[15]
      },
      "color-bg-fill": {
        value: gray[15]
      },
      "color-icon": {
        value: gray[8]
      },
      "color-icon-secondary": {
        value: gray[12]
      },
      "color-text": {
        value: gray[8]
      },
      "color-text-secondary": {
        value: gray[11]
      },
      "color-bg-surface-secondary-active": {
        value: gray[13]
      },
      "color-bg-surface-secondary-hover": {
        value: gray[14]
      },
      "color-bg-fill-transparent": {
        value: whiteAlpha[8]
      },
      "color-bg-fill-brand": {
        value: gray[1]
      },
      "color-text-brand-on-bg-fill": {
        value: gray[15]
      },
      "color-bg-surface-hover": {
        value: gray[14]
      },
      "color-bg-fill-hover": {
        value: gray[14]
      },
      "color-bg-fill-transparent-hover": {
        value: whiteAlpha[9]
      },
      "color-bg-fill-brand-hover": {
        value: gray[5]
      },
      "color-bg-surface-selected": {
        value: gray[13]
      },
      "color-bg-fill-selected": {
        value: gray[13]
      },
      "color-bg-fill-transparent-selected": {
        value: whiteAlpha[11]
      },
      "color-bg-fill-brand-selected": {
        value: gray[9]
      },
      "color-bg-surface-active": {
        value: gray[13]
      },
      "color-bg-fill-active": {
        value: gray[13]
      },
      "color-bg-fill-transparent-active": {
        value: whiteAlpha[10]
      },
      "color-bg-fill-brand-active": {
        value: gray[4]
      },
      "color-bg-surface-brand-selected": {
        value: gray[14]
      },
      "color-border-secondary": {
        value: gray[13]
      },
      "color-tooltip-tail-down-border-experimental": {
        value: "rgba(60, 60, 60, 1)"
      },
      "color-tooltip-tail-up-border-experimental": {
        value: "rgba(71, 71, 71, 1)"
      },
      "color-border-gradient-experimental": {
        value: "linear-gradient(to bottom, " + whiteAlpha[9] + ", " + whiteAlpha[4] + ")"
      },
      "color-border-gradient-hover-experimental": {
        value: "linear-gradient(to bottom, " + whiteAlpha[9] + ", " + whiteAlpha[4] + ")"
      },
      "color-border-gradient-selected-experimental": {
        value: "linear-gradient(to bottom, " + blackAlpha[10] + ", " + whiteAlpha[10] + ")"
      },
      "color-border-gradient-active-experimental": {
        value: "linear-gradient(to bottom, " + whiteAlpha[10] + ", " + whiteAlpha[4] + ")"
      }
    },
    shadow: {
      "shadow-bevel-100": {
        value: "1px 0px 0px 0px rgba(204, 204, 204, 0.08) inset, -1px 0px 0px 0px rgba(204, 204, 204, 0.08) inset, 0px -1px 0px 0px rgba(204, 204, 204, 0.08) inset, 0px 1px 0px 0px rgba(204, 204, 204, 0.16) inset"
      }
    }
  });
  createMetaTheme(metaThemeDarkPartial);
  var metaThemePartials = {
    light: metaThemeLightPartial,
    "light-mobile": metaThemeLightMobilePartial,
    "light-high-contrast-experimental": metaThemeLightHighContrastPartial,
    "dark-experimental": metaThemeDarkPartial
  };
  var metaThemeDefaultPartial = metaThemePartials[themeNameDefault];
  createMetaTheme(metaThemeDefaultPartial);
  var themes = {
    "light": {
      "border": {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem"
      },
      "breakpoints": {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem"
      },
      "color": {
        "color-scheme": "light",
        "color-bg": "rgba(241, 241, 241, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(255, 255, 255, 1)",
        "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
        "color-bg-surface-active": "rgba(243, 243, 243, 1)",
        "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
        "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 225, 1)",
        "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
        "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
        "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
        "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
        "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
        "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(255, 255, 255, 1)",
        "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
        "color-bg-fill-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(41, 132, 90, 1)",
        "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
        "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
        "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
        "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
        "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
        "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
        "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
        "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
        "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(48, 48, 48, 1)",
        "color-text-secondary": "rgba(97, 97, 97, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(74, 74, 74, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(12, 81, 50, 1)",
        "color-text-success-hover": "rgba(8, 61, 37, 1)",
        "color-text-success-active": "rgba(9, 42, 27, 1)",
        "color-text-success-secondary": "rgba(41, 132, 90, 1)",
        "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 31, 11, 1)",
        "color-text-critical-hover": "rgba(95, 21, 7, 1)",
        "color-text-critical-active": "rgba(47, 10, 4, 1)",
        "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
        "color-text-emphasis": "rgba(0, 91, 211, 1)",
        "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-magic": "rgba(87, 0, 209, 1)",
        "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
        "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(227, 227, 227, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(235, 235, 235, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 254, 194, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 195, 193, 1)",
        "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
        "color-border-emphasis": "rgba(0, 91, 211, 1)",
        "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-border-magic": "rgba(228, 222, 255, 1)",
        "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
        "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border-experimental": "rgba(212, 212, 212, 1)",
        "color-tooltip-tail-up-border-experimental": "rgba(227, 227, 227, 1)",
        "color-border-gradient-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-hover-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-selected-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-active-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-icon": "rgba(74, 74, 74, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(138, 138, 138, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(41, 132, 90, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(239, 77, 47, 1)",
        "color-icon-emphasis": "rgba(0, 91, 211, 1)",
        "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-icon-magic": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(138, 138, 138, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)"
      },
      "font": {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "650",
        "font-weight-bold": "700",
        "font-letter-spacing-densest": "-0.03375rem",
        "font-letter-spacing-denser": "-0.01875rem",
        "font-letter-spacing-dense": "-0.0125rem",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem"
      },
      "height": {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem"
      },
      "motion": {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
      },
      "shadow": {
        "shadow-0": "none",
        "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
        "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
        "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
        "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
        "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
        "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
        "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, -0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, 0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.17) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.5) inset",
        "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
        "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
        "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
        "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
        "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
        "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
        "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
        "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
        "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
      },
      "space": {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "1rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem"
      },
      "text": {
        "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-3xl-font-size": "2.25rem",
        "text-heading-3xl-font-weight": "700",
        "text-heading-3xl-font-letter-spacing": "-0.03375rem",
        "text-heading-3xl-font-line-height": "3rem",
        "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-2xl-font-size": "1.875rem",
        "text-heading-2xl-font-weight": "700",
        "text-heading-2xl-font-letter-spacing": "-0.01875rem",
        "text-heading-2xl-font-line-height": "2.5rem",
        "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xl-font-size": "1.5rem",
        "text-heading-xl-font-weight": "700",
        "text-heading-xl-font-letter-spacing": "-0.0125rem",
        "text-heading-xl-font-line-height": "2rem",
        "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-lg-font-size": "1.25rem",
        "text-heading-lg-font-weight": "650",
        "text-heading-lg-font-letter-spacing": "-0.0125rem",
        "text-heading-lg-font-line-height": "1.5rem",
        "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-md-font-size": "0.875rem",
        "text-heading-md-font-weight": "650",
        "text-heading-md-font-letter-spacing": "0rem",
        "text-heading-md-font-line-height": "1.25rem",
        "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-sm-font-size": "0.8125rem",
        "text-heading-sm-font-weight": "650",
        "text-heading-sm-font-letter-spacing": "0rem",
        "text-heading-sm-font-line-height": "1.25rem",
        "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xs-font-size": "0.75rem",
        "text-heading-xs-font-weight": "650",
        "text-heading-xs-font-letter-spacing": "0rem",
        "text-heading-xs-font-line-height": "1rem",
        "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-lg-font-size": "0.875rem",
        "text-body-lg-font-weight": "450",
        "text-body-lg-font-letter-spacing": "0rem",
        "text-body-lg-font-line-height": "1.25rem",
        "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-md-font-size": "0.8125rem",
        "text-body-md-font-weight": "450",
        "text-body-md-font-letter-spacing": "0rem",
        "text-body-md-font-line-height": "1.25rem",
        "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-sm-font-size": "0.75rem",
        "text-body-sm-font-weight": "450",
        "text-body-sm-font-letter-spacing": "0rem",
        "text-body-sm-font-line-height": "1rem",
        "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-xs-font-size": "0.6875rem",
        "text-body-xs-font-weight": "450",
        "text-body-xs-font-letter-spacing": "0rem",
        "text-body-xs-font-line-height": "0.75rem"
      },
      "width": {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem"
      },
      "zIndex": {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520"
      }
    },
    "light-mobile": {
      "border": {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem"
      },
      "breakpoints": {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem"
      },
      "color": {
        "color-scheme": "light",
        "color-bg": "rgba(241, 241, 241, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(255, 255, 255, 1)",
        "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
        "color-bg-surface-active": "rgba(243, 243, 243, 1)",
        "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
        "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 225, 1)",
        "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
        "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
        "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
        "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
        "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
        "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(255, 255, 255, 1)",
        "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
        "color-bg-fill-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(41, 132, 90, 1)",
        "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
        "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
        "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
        "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
        "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
        "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
        "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
        "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
        "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(48, 48, 48, 1)",
        "color-text-secondary": "rgba(97, 97, 97, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(74, 74, 74, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(12, 81, 50, 1)",
        "color-text-success-hover": "rgba(8, 61, 37, 1)",
        "color-text-success-active": "rgba(9, 42, 27, 1)",
        "color-text-success-secondary": "rgba(41, 132, 90, 1)",
        "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 31, 11, 1)",
        "color-text-critical-hover": "rgba(95, 21, 7, 1)",
        "color-text-critical-active": "rgba(47, 10, 4, 1)",
        "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
        "color-text-emphasis": "rgba(0, 91, 211, 1)",
        "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-magic": "rgba(87, 0, 209, 1)",
        "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
        "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(227, 227, 227, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(235, 235, 235, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 254, 194, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 195, 193, 1)",
        "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
        "color-border-emphasis": "rgba(0, 91, 211, 1)",
        "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-border-magic": "rgba(228, 222, 255, 1)",
        "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
        "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border-experimental": "rgba(212, 212, 212, 1)",
        "color-tooltip-tail-up-border-experimental": "rgba(227, 227, 227, 1)",
        "color-border-gradient-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-hover-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-selected-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-active-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-icon": "rgba(74, 74, 74, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(138, 138, 138, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(41, 132, 90, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(239, 77, 47, 1)",
        "color-icon-emphasis": "rgba(0, 91, 211, 1)",
        "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-icon-magic": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "none",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(138, 138, 138, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)"
      },
      "font": {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "650",
        "font-weight-bold": "700",
        "font-letter-spacing-densest": "-0.03375rem",
        "font-letter-spacing-denser": "-0.01875rem",
        "font-letter-spacing-dense": "-0.0125rem",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem"
      },
      "height": {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem"
      },
      "motion": {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
      },
      "shadow": {
        "shadow-0": "none",
        "shadow-100": "none",
        "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
        "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
        "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
        "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
        "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
        "shadow-bevel-100": "none",
        "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
        "shadow-button-hover": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
        "shadow-button-inset": "0 0 0 var(--p-border-width-025) var(--p-color-border) inset",
        "shadow-button-primary": "none",
        "shadow-button-primary-hover": "none",
        "shadow-button-primary-inset": "none",
        "shadow-button-primary-critical": "none",
        "shadow-button-primary-critical-hover": "none",
        "shadow-button-primary-critical-inset": "none",
        "shadow-button-primary-success": "none",
        "shadow-button-primary-success-hover": "none",
        "shadow-button-primary-success-inset": "none",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
      },
      "space": {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "0.5rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem"
      },
      "text": {
        "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-3xl-font-size": "2.25rem",
        "text-heading-3xl-font-weight": "700",
        "text-heading-3xl-font-letter-spacing": "-0.03375rem",
        "text-heading-3xl-font-line-height": "3rem",
        "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-2xl-font-size": "2rem",
        "text-heading-2xl-font-weight": "700",
        "text-heading-2xl-font-letter-spacing": "-0.01875rem",
        "text-heading-2xl-font-line-height": "2.5rem",
        "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xl-font-size": "1.375rem",
        "text-heading-xl-font-weight": "700",
        "text-heading-xl-font-letter-spacing": "-0.0125rem",
        "text-heading-xl-font-line-height": "1.75rem",
        "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-lg-font-size": "1.125rem",
        "text-heading-lg-font-weight": "650",
        "text-heading-lg-font-letter-spacing": "-0.0125rem",
        "text-heading-lg-font-line-height": "1.5rem",
        "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-md-font-size": "1rem",
        "text-heading-md-font-weight": "650",
        "text-heading-md-font-letter-spacing": "0rem",
        "text-heading-md-font-line-height": "1.25rem",
        "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-sm-font-size": "0.875rem",
        "text-heading-sm-font-weight": "650",
        "text-heading-sm-font-letter-spacing": "0rem",
        "text-heading-sm-font-line-height": "1.25rem",
        "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xs-font-size": "0.75rem",
        "text-heading-xs-font-weight": "650",
        "text-heading-xs-font-letter-spacing": "0rem",
        "text-heading-xs-font-line-height": "1rem",
        "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-lg-font-size": "1.125rem",
        "text-body-lg-font-weight": "450",
        "text-body-lg-font-letter-spacing": "0rem",
        "text-body-lg-font-line-height": "1.75rem",
        "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-md-font-size": "1rem",
        "text-body-md-font-weight": "450",
        "text-body-md-font-letter-spacing": "0rem",
        "text-body-md-font-line-height": "1.5rem",
        "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-sm-font-size": "0.875rem",
        "text-body-sm-font-weight": "450",
        "text-body-sm-font-letter-spacing": "0rem",
        "text-body-sm-font-line-height": "1.25rem",
        "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-xs-font-size": "0.75rem",
        "text-body-xs-font-weight": "450",
        "text-body-xs-font-letter-spacing": "0rem",
        "text-body-xs-font-line-height": "1rem"
      },
      "width": {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem"
      },
      "zIndex": {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520"
      }
    },
    "light-high-contrast-experimental": {
      "border": {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem"
      },
      "breakpoints": {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem"
      },
      "color": {
        "color-scheme": "light",
        "color-bg": "rgba(241, 241, 241, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(255, 255, 255, 1)",
        "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
        "color-bg-surface-active": "rgba(243, 243, 243, 1)",
        "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 225, 1)",
        "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
        "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
        "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
        "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
        "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
        "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(255, 255, 255, 1)",
        "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
        "color-bg-fill-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(41, 132, 90, 1)",
        "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
        "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
        "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
        "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
        "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
        "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
        "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
        "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
        "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(26, 26, 26, 1)",
        "color-text-secondary": "rgba(26, 26, 26, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(26, 26, 26, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(12, 81, 50, 1)",
        "color-text-success-hover": "rgba(8, 61, 37, 1)",
        "color-text-success-active": "rgba(9, 42, 27, 1)",
        "color-text-success-secondary": "rgba(41, 132, 90, 1)",
        "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 31, 11, 1)",
        "color-text-critical-hover": "rgba(95, 21, 7, 1)",
        "color-text-critical-active": "rgba(47, 10, 4, 1)",
        "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
        "color-text-emphasis": "rgba(0, 91, 211, 1)",
        "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-magic": "rgba(87, 0, 209, 1)",
        "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
        "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(138, 138, 138, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(138, 138, 138, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 254, 194, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 195, 193, 1)",
        "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
        "color-border-emphasis": "rgba(0, 91, 211, 1)",
        "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-border-magic": "rgba(228, 222, 255, 1)",
        "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
        "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border-experimental": "rgba(212, 212, 212, 1)",
        "color-tooltip-tail-up-border-experimental": "rgba(227, 227, 227, 1)",
        "color-border-gradient-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-hover-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-selected-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-border-gradient-active-experimental": "linear-gradient(to bottom, rgba(235, 235, 235, 1), rgba(204, 204, 204, 1) 78%, rgba(181, 181, 181, 1))",
        "color-icon": "rgba(74, 74, 74, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(74, 74, 74, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(41, 132, 90, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(239, 77, 47, 1)",
        "color-icon-emphasis": "rgba(0, 91, 211, 1)",
        "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-icon-magic": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(74, 74, 74, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)"
      },
      "font": {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "650",
        "font-weight-bold": "700",
        "font-letter-spacing-densest": "-0.03375rem",
        "font-letter-spacing-denser": "-0.01875rem",
        "font-letter-spacing-dense": "-0.0125rem",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem"
      },
      "height": {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem"
      },
      "motion": {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
      },
      "shadow": {
        "shadow-0": "none",
        "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
        "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
        "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
        "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
        "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
        "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
        "shadow-bevel-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07), 0rem 0.0625rem 0rem 0rem rgba(208, 208, 208, 0.40) inset, 0.0625rem 0rem 0rem 0rem #CCC inset, -0.0625rem 0rem 0rem 0rem #CCC inset, 0rem -0.0625rem 0rem 0rem #999 inset",
        "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
        "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
        "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
        "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
        "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
        "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
        "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
        "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
        "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
      },
      "space": {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "1rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem"
      },
      "text": {
        "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-3xl-font-size": "2.25rem",
        "text-heading-3xl-font-weight": "700",
        "text-heading-3xl-font-letter-spacing": "-0.03375rem",
        "text-heading-3xl-font-line-height": "3rem",
        "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-2xl-font-size": "1.875rem",
        "text-heading-2xl-font-weight": "700",
        "text-heading-2xl-font-letter-spacing": "-0.01875rem",
        "text-heading-2xl-font-line-height": "2.5rem",
        "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xl-font-size": "1.5rem",
        "text-heading-xl-font-weight": "700",
        "text-heading-xl-font-letter-spacing": "-0.0125rem",
        "text-heading-xl-font-line-height": "2rem",
        "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-lg-font-size": "1.25rem",
        "text-heading-lg-font-weight": "650",
        "text-heading-lg-font-letter-spacing": "-0.0125rem",
        "text-heading-lg-font-line-height": "1.5rem",
        "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-md-font-size": "0.875rem",
        "text-heading-md-font-weight": "650",
        "text-heading-md-font-letter-spacing": "0rem",
        "text-heading-md-font-line-height": "1.25rem",
        "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-sm-font-size": "0.8125rem",
        "text-heading-sm-font-weight": "650",
        "text-heading-sm-font-letter-spacing": "0rem",
        "text-heading-sm-font-line-height": "1.25rem",
        "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xs-font-size": "0.75rem",
        "text-heading-xs-font-weight": "650",
        "text-heading-xs-font-letter-spacing": "0rem",
        "text-heading-xs-font-line-height": "1rem",
        "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-lg-font-size": "0.875rem",
        "text-body-lg-font-weight": "450",
        "text-body-lg-font-letter-spacing": "0rem",
        "text-body-lg-font-line-height": "1.25rem",
        "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-md-font-size": "0.8125rem",
        "text-body-md-font-weight": "450",
        "text-body-md-font-letter-spacing": "0rem",
        "text-body-md-font-line-height": "1.25rem",
        "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-sm-font-size": "0.75rem",
        "text-body-sm-font-weight": "450",
        "text-body-sm-font-letter-spacing": "0rem",
        "text-body-sm-font-line-height": "1rem",
        "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-xs-font-size": "0.6875rem",
        "text-body-xs-font-weight": "450",
        "text-body-xs-font-letter-spacing": "0rem",
        "text-body-xs-font-line-height": "0.75rem"
      },
      "width": {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem"
      },
      "zIndex": {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520"
      }
    },
    "dark-experimental": {
      "border": {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem"
      },
      "breakpoints": {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem"
      },
      "color": {
        "color-scheme": "dark",
        "color-bg": "rgba(26, 26, 26, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(48, 48, 48, 1)",
        "color-bg-surface-hover": "rgba(74, 74, 74, 1)",
        "color-bg-surface-active": "rgba(97, 97, 97, 1)",
        "color-bg-surface-selected": "rgba(97, 97, 97, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
        "color-bg-surface-secondary-hover": "rgba(74, 74, 74, 1)",
        "color-bg-surface-secondary-active": "rgba(97, 97, 97, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(74, 74, 74, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 225, 1)",
        "color-bg-surface-success-hover": "rgba(180, 254, 210, 1)",
        "color-bg-surface-success-active": "rgba(146, 254, 194, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 233, 232, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 226, 225, 1)",
        "color-bg-surface-critical-active": "rgba(254, 218, 217, 1)",
        "color-bg-surface-emphasis": "rgba(240, 242, 255, 1)",
        "color-bg-surface-emphasis-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-emphasis-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-magic": "rgba(248, 247, 255, 1)",
        "color-bg-surface-magic-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-magic-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(48, 48, 48, 1)",
        "color-bg-fill-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-selected": "rgba(97, 97, 97, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(255, 255, 255, 1)",
        "color-bg-fill-brand-hover": "rgba(243, 243, 243, 1)",
        "color-bg-fill-brand-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-brand-selected": "rgba(212, 212, 212, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(41, 132, 90, 1)",
        "color-bg-fill-success-hover": "rgba(19, 111, 69, 1)",
        "color-bg-fill-success-active": "rgba(12, 81, 50, 1)",
        "color-bg-fill-success-secondary": "rgba(180, 254, 210, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(229, 28, 0, 1)",
        "color-bg-fill-critical-hover": "rgba(181, 38, 11, 1)",
        "color-bg-fill-critical-active": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 31, 11, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 211, 209, 1)",
        "color-bg-fill-emphasis": "rgba(0, 91, 211, 1)",
        "color-bg-fill-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-magic": "rgba(128, 81, 255, 1)",
        "color-bg-fill-magic-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-magic-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-magic-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(255, 255, 255, 0.11)",
        "color-bg-fill-transparent-hover": "rgba(255, 255, 255, 0.17)",
        "color-bg-fill-transparent-active": "rgba(255, 255, 255, 0.20)",
        "color-bg-fill-transparent-selected": "rgba(255, 255, 255, 0.28)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(227, 227, 227, 1)",
        "color-text-secondary": "rgba(181, 181, 181, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(74, 74, 74, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(12, 81, 50, 1)",
        "color-text-success-hover": "rgba(8, 61, 37, 1)",
        "color-text-success-active": "rgba(9, 42, 27, 1)",
        "color-text-success-secondary": "rgba(41, 132, 90, 1)",
        "color-text-success-on-bg-fill": "rgba(248, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 31, 11, 1)",
        "color-text-critical-hover": "rgba(95, 21, 7, 1)",
        "color-text-critical-active": "rgba(47, 10, 4, 1)",
        "color-text-critical-secondary": "rgba(229, 28, 0, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 251, 251, 1)",
        "color-text-emphasis": "rgba(0, 91, 211, 1)",
        "color-text-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-text-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-text-emphasis-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-emphasis-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-emphasis-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-magic": "rgba(87, 0, 209, 1)",
        "color-text-magic-secondary": "rgba(113, 38, 255, 1)",
        "color-text-magic-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(227, 227, 227, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(97, 97, 97, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 254, 194, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 195, 193, 1)",
        "color-border-critical-secondary": "rgba(142, 31, 11, 1)",
        "color-border-emphasis": "rgba(0, 91, 211, 1)",
        "color-border-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-border-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-border-magic": "rgba(228, 222, 255, 1)",
        "color-border-magic-secondary": "rgba(148, 116, 255, 1)",
        "color-border-magic-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border-experimental": "rgba(60, 60, 60, 1)",
        "color-tooltip-tail-up-border-experimental": "rgba(71, 71, 71, 1)",
        "color-border-gradient-experimental": "linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.03))",
        "color-border-gradient-hover-experimental": "linear-gradient(to bottom, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.03))",
        "color-border-gradient-selected-experimental": "linear-gradient(to bottom, rgba(0, 0, 0, 0.20), rgba(255, 255, 255, 0.20))",
        "color-border-gradient-active-experimental": "linear-gradient(to bottom, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.03))",
        "color-icon": "rgba(227, 227, 227, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(138, 138, 138, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(41, 132, 90, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(239, 77, 47, 1)",
        "color-icon-emphasis": "rgba(0, 91, 211, 1)",
        "color-icon-emphasis-hover": "rgba(0, 66, 153, 1)",
        "color-icon-emphasis-active": "rgba(0, 46, 106, 1)",
        "color-icon-magic": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(56, 250, 163, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(12, 81, 50, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(138, 138, 138, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)"
      },
      "font": {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "650",
        "font-weight-bold": "700",
        "font-letter-spacing-densest": "-0.03375rem",
        "font-letter-spacing-denser": "-0.01875rem",
        "font-letter-spacing-dense": "-0.0125rem",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem"
      },
      "height": {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem"
      },
      "motion": {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above": "{ from { transform: translateY(var(--p-space-100)); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below": "{ from { transform: translateY(calc(var(--p-space-100) * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
      },
      "shadow": {
        "shadow-0": "none",
        "shadow-100": "0rem 0.0625rem 0rem 0rem rgba(26, 26, 26, 0.07)",
        "shadow-200": "0rem 0.1875rem 0.0625rem -0.0625rem rgba(26, 26, 26, 0.07)",
        "shadow-300": "0rem 0.25rem 0.375rem -0.125rem rgba(26, 26, 26, 0.20)",
        "shadow-400": "0rem 0.5rem 1rem -0.25rem rgba(26, 26, 26, 0.22)",
        "shadow-500": "0rem 0.75rem 1.25rem -0.5rem rgba(26, 26, 26, 0.24)",
        "shadow-600": "0rem 1.25rem 1.25rem -0.5rem rgba(26, 26, 26, 0.28)",
        "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, -0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem -0.0625rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.16) inset",
        "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
        "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
        "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
        "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
        "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
        "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
        "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 31, 11, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(181, 38, 11, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.349) inset",
        "shadow-button-primary-critical-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
        "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
      },
      "space": {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "1rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem"
      },
      "text": {
        "text-heading-3xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-3xl-font-size": "2.25rem",
        "text-heading-3xl-font-weight": "700",
        "text-heading-3xl-font-letter-spacing": "-0.03375rem",
        "text-heading-3xl-font-line-height": "3rem",
        "text-heading-2xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-2xl-font-size": "1.875rem",
        "text-heading-2xl-font-weight": "700",
        "text-heading-2xl-font-letter-spacing": "-0.01875rem",
        "text-heading-2xl-font-line-height": "2.5rem",
        "text-heading-xl-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xl-font-size": "1.5rem",
        "text-heading-xl-font-weight": "700",
        "text-heading-xl-font-letter-spacing": "-0.0125rem",
        "text-heading-xl-font-line-height": "2rem",
        "text-heading-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-lg-font-size": "1.25rem",
        "text-heading-lg-font-weight": "650",
        "text-heading-lg-font-letter-spacing": "-0.0125rem",
        "text-heading-lg-font-line-height": "1.5rem",
        "text-heading-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-md-font-size": "0.875rem",
        "text-heading-md-font-weight": "650",
        "text-heading-md-font-letter-spacing": "0rem",
        "text-heading-md-font-line-height": "1.25rem",
        "text-heading-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-sm-font-size": "0.8125rem",
        "text-heading-sm-font-weight": "650",
        "text-heading-sm-font-letter-spacing": "0rem",
        "text-heading-sm-font-line-height": "1.25rem",
        "text-heading-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-heading-xs-font-size": "0.75rem",
        "text-heading-xs-font-weight": "650",
        "text-heading-xs-font-letter-spacing": "0rem",
        "text-heading-xs-font-line-height": "1rem",
        "text-body-lg-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-lg-font-size": "0.875rem",
        "text-body-lg-font-weight": "450",
        "text-body-lg-font-letter-spacing": "0rem",
        "text-body-lg-font-line-height": "1.25rem",
        "text-body-md-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-md-font-size": "0.8125rem",
        "text-body-md-font-weight": "450",
        "text-body-md-font-letter-spacing": "0rem",
        "text-body-md-font-line-height": "1.25rem",
        "text-body-sm-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-sm-font-size": "0.75rem",
        "text-body-sm-font-weight": "450",
        "text-body-sm-font-letter-spacing": "0rem",
        "text-body-sm-font-line-height": "1rem",
        "text-body-xs-font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "text-body-xs-font-size": "0.6875rem",
        "text-body-xs-font-weight": "450",
        "text-body-xs-font-letter-spacing": "0rem",
        "text-body-xs-font-line-height": "0.75rem"
      },
      "width": {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem"
      },
      "zIndex": {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520"
      }
    }
  };
  var themeDefault = themes[themeNameDefault];
  createIsTokenName(themes[themeNameDefault]);
  const ThemeContext = /* @__PURE__ */ React2.createContext(null);
  const ThemeNameContext = /* @__PURE__ */ React2.createContext(null);
  function getTheme(themeName) {
    return themes[themeName];
  }
  function useTheme() {
    const theme = React2.useContext(ThemeContext);
    if (!theme) {
      throw new Error("No theme was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    }
    return theme;
  }
  function useThemeName() {
    const themeName = React2.useContext(ThemeNameContext);
    if (!themeName) {
      throw new Error("No themeName was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    }
    return themeName;
  }
  function isObject(value) {
    const type = typeof value;
    return value != null && (type === "object" || type === "function");
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  function variationName(name, value) {
    return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }
  function sanitizeCustomProperties(styles2) {
    const nonNullValues = Object.entries(styles2).filter(([_, value]) => value != null);
    return nonNullValues.length ? Object.fromEntries(nonNullValues) : void 0;
  }
  function getResponsiveProps(componentName, componentProp, tokenSubgroup, responsiveProp) {
    if (!responsiveProp) return {};
    let result;
    if (!isObject(responsiveProp)) {
      result = {
        [breakpointsAliases[0]]: `var(--p-${tokenSubgroup}-${responsiveProp})`
      };
    } else {
      result = Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, aliasOrScale]) => [breakpointAlias, `var(--p-${tokenSubgroup}-${aliasOrScale})`]));
    }
    return Object.fromEntries(Object.entries(result).map(([breakpointAlias, value]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, value]));
  }
  function getResponsiveValue(componentName, componentProp, responsiveProp) {
    if (!responsiveProp) return {};
    if (!isObject(responsiveProp)) {
      return {
        [`--pc-${componentName}-${componentProp}-${breakpointsAliases[0]}`]: responsiveProp
      };
    }
    return Object.fromEntries(Object.entries(responsiveProp).map(([breakpointAlias, responsiveValue]) => [`--pc-${componentName}-${componentProp}-${breakpointAlias}`, responsiveValue]));
  }
  var styles$f = {
    "themeContainer": "Polaris-ThemeProvider--themeContainer"
  };
  const themeNamesLocal = ["light", "dark-experimental"];
  const isThemeNameLocal = (name) => themeNamesLocal.includes(name);
  function ThemeProvider(props) {
    const {
      as: ThemeContainer = "div",
      children,
      className,
      theme: themeName = themeNameDefault
    } = props;
    return /* @__PURE__ */ React2.createElement(ThemeNameContext.Provider, {
      value: themeName
    }, /* @__PURE__ */ React2.createElement(ThemeContext.Provider, {
      value: getTheme(themeName)
    }, /* @__PURE__ */ React2.createElement(ThemeContainer, {
      "data-portal-id": props["data-portal-id"],
      className: classNames(createThemeClassName(themeName), styles$f.themeContainer, className)
    }, children)));
  }
  const WithinContentContext = /* @__PURE__ */ React2.createContext(false);
  const isServer = typeof window === "undefined" || typeof document === "undefined";
  const useIsomorphicLayoutEffect = isServer ? React2.useEffect : React2.useLayoutEffect;
  function useEventListener(eventName, handler, target, options) {
    const handlerRef = React2.useRef(handler);
    const optionsRef = React2.useRef(options);
    useIsomorphicLayoutEffect(() => {
      handlerRef.current = handler;
    }, [handler]);
    useIsomorphicLayoutEffect(() => {
      optionsRef.current = options;
    }, [options]);
    React2.useEffect(() => {
      let targetElement;
      {
        targetElement = window;
      }
      const eventOptions = optionsRef.current;
      const eventListener = (event) => handlerRef.current(event);
      targetElement.addEventListener(eventName, eventListener, eventOptions);
      return () => {
        targetElement.removeEventListener(eventName, eventListener, eventOptions);
      };
    }, [eventName, target]);
  }
  const Breakpoints = {
    // TODO: Update to lgDown
    stackedContent: "1039.95px"
  };
  const noWindowMatches = {
    media: "",
    addListener: noop$2,
    removeListener: noop$2,
    matches: false,
    onchange: noop$2,
    addEventListener: noop$2,
    removeEventListener: noop$2,
    dispatchEvent: (_) => true
  };
  function noop$2() {
  }
  function stackedContent() {
    return typeof window === "undefined" ? noWindowMatches : window.matchMedia(`(max-width: ${Breakpoints.stackedContent})`);
  }
  const breakpointsQueryEntries = getBreakpointsQueryEntries(themeDefault.breakpoints);
  function getMatches(defaults, forceDefaults) {
    if (!isServer && !forceDefaults) {
      return Object.fromEntries(breakpointsQueryEntries.map(([directionAlias, query]) => [directionAlias, window.matchMedia(query).matches]));
    }
    return Object.fromEntries(breakpointsQueryEntries.map(([directionAlias]) => [directionAlias, false]));
  }
  function useBreakpoints(options) {
    const [breakpoints2, setBreakpoints] = React2.useState(getMatches(options?.defaults, true));
    useIsomorphicLayoutEffect(() => {
      const mediaQueryLists = breakpointsQueryEntries.map(([_, query]) => window.matchMedia(query));
      const handler = () => setBreakpoints(getMatches());
      mediaQueryLists.forEach((mql) => {
        if (mql.addListener) {
          mql.addListener(handler);
        } else {
          mql.addEventListener("change", handler);
        }
      });
      handler();
      return () => {
        mediaQueryLists.forEach((mql) => {
          if (mql.removeListener) {
            mql.removeListener(handler);
          } else {
            mql.removeEventListener("change", handler);
          }
        });
      };
    }, []);
    return breakpoints2;
  }
  function getBreakpointsQueryEntries(breakpoints2) {
    const mediaConditionEntries = Object.entries(getMediaConditions(breakpoints2));
    return mediaConditionEntries.map(([breakpointsToken, mediaConditions]) => Object.entries(mediaConditions).map(([direction, mediaCondition]) => {
      const breakpointsAlias = breakpointsToken.split("-")[1];
      const directionAlias = `${breakpointsAlias}${capitalize(direction)}`;
      return [directionAlias, mediaCondition];
    })).flat();
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  function debounce(func, waitArg, options) {
    let lastArgs;
    let lastThis;
    let maxWait;
    let result;
    let timerId;
    let lastCallTime;
    let lastInvokeTime = 0;
    let leading = false;
    let maxing = false;
    let trailing = true;
    const useRAF = !waitArg && waitArg !== 0;
    if (typeof func !== "function") {
      throw new TypeError("Expected a function");
    }
    const wait = waitArg || 0;
    if (typeof options === "object") {
      leading = Boolean(options.leading);
      maxing = "maxWait" in options;
      maxWait = maxing ? Math.max(Number(options.maxWait) || 0, wait) : void 0;
      trailing = "trailing" in options ? Boolean(options.trailing) : trailing;
    }
    function invokeFunc(time) {
      const args = lastArgs;
      const thisArg = lastThis;
      lastArgs = void 0;
      lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function startTimer(pendingFunc, wait2) {
      if (useRAF) {
        cancelAnimationFrame(timerId);
        return requestAnimationFrame(pendingFunc);
      }
      return setTimeout(pendingFunc, wait2);
    }
    function cancelTimer(id) {
      if (useRAF) {
        return cancelAnimationFrame(id);
      }
      clearTimeout(id);
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = startTimer(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      const timeSinceLastCall = time - lastCallTime;
      const timeSinceLastInvoke = time - lastInvokeTime;
      const timeWaiting = wait - timeSinceLastCall;
      return maxing && maxWait ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      const timeSinceLastCall = time - lastCallTime;
      const timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && maxWait && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      const time = Date.now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = startTimer(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        cancelTimer(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(Date.now());
    }
    function pending() {
      return timerId !== void 0;
    }
    function debounced(...args) {
      const time = Date.now();
      const isInvoking = shouldInvoke(time);
      lastArgs = args;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          timerId = startTimer(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = startTimer(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    debounced.pending = pending;
    return debounced;
  }
  class Rect {
    static get zero() {
      return new Rect();
    }
    constructor({
      top = 0,
      left = 0,
      width: width2 = 0,
      height: height2 = 0
    } = {}) {
      this.top = top;
      this.left = left;
      this.width = width2;
      this.height = height2;
    }
    get center() {
      return {
        x: this.left + this.width / 2,
        y: this.top + this.height / 2
      };
    }
  }
  function getRectForNode(node) {
    if (!(node instanceof Element)) {
      return new Rect({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    const rect = node.getBoundingClientRect();
    return new Rect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
  }
  const SIXTY_FPS = 1e3 / 60;
  class StickyManager {
    constructor(container) {
      this.stickyItems = [];
      this.stuckItems = [];
      this.container = null;
      this.topBarOffset = 0;
      this.handleResize = debounce(() => {
        this.manageStickyItems();
      }, SIXTY_FPS, {
        leading: true,
        trailing: true,
        maxWait: SIXTY_FPS
      });
      this.handleScroll = debounce(() => {
        this.manageStickyItems();
      }, SIXTY_FPS, {
        leading: true,
        trailing: true,
        maxWait: SIXTY_FPS
      });
      if (container) {
        this.setContainer(container);
      }
    }
    registerStickyItem(stickyItem) {
      this.stickyItems.push(stickyItem);
    }
    unregisterStickyItem(nodeToRemove) {
      const nodeIndex = this.stickyItems.findIndex(({
        stickyNode
      }) => nodeToRemove === stickyNode);
      this.stickyItems.splice(nodeIndex, 1);
    }
    setContainer(el) {
      this.container = el;
      if (isDocument(el)) {
        this.setTopBarOffset(el);
      }
      this.container.addEventListener("scroll", this.handleScroll);
      window.addEventListener("resize", this.handleResize);
      this.manageStickyItems();
    }
    removeScrollListener() {
      if (this.container) {
        this.container.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
      }
    }
    manageStickyItems() {
      if (this.stickyItems.length <= 0) {
        return;
      }
      const scrollTop = this.container ? scrollTopFor(this.container) : 0;
      const containerTop = getRectForNode(this.container).top + this.topBarOffset;
      this.stickyItems.forEach((stickyItem) => {
        const {
          handlePositioning
        } = stickyItem;
        const {
          sticky,
          top,
          left,
          width: width2
        } = this.evaluateStickyItem(stickyItem, scrollTop, containerTop);
        this.updateStuckItems(stickyItem, sticky);
        handlePositioning(sticky, top, left, width2);
      });
    }
    evaluateStickyItem(stickyItem, scrollTop, containerTop) {
      const {
        stickyNode,
        placeHolderNode,
        boundingElement,
        offset,
        disableWhenStacked
      } = stickyItem;
      if (disableWhenStacked && stackedContent().matches) {
        return {
          sticky: false,
          top: 0,
          left: 0,
          width: "auto"
        };
      }
      const stickyOffset = offset ? this.getOffset(stickyNode) + parseInt(
        // Important: This will not update when the active theme changes.
        // Update this to `useTheme` once converted to a function component.
        themeDefault.space["space-500"],
        10
      ) : this.getOffset(stickyNode);
      const scrollPosition = scrollTop + stickyOffset;
      const placeHolderNodeCurrentTop = placeHolderNode.getBoundingClientRect().top - containerTop + scrollTop;
      const top = containerTop + stickyOffset;
      const width2 = placeHolderNode.getBoundingClientRect().width;
      const left = placeHolderNode.getBoundingClientRect().left;
      let sticky;
      if (boundingElement == null) {
        sticky = scrollPosition >= placeHolderNodeCurrentTop;
      } else {
        const stickyItemHeight = stickyNode.getBoundingClientRect().height || stickyNode.firstElementChild?.getBoundingClientRect().height || 0;
        const stickyItemBottomPosition = boundingElement.getBoundingClientRect().bottom - stickyItemHeight + scrollTop - containerTop;
        sticky = scrollPosition >= placeHolderNodeCurrentTop && scrollPosition < stickyItemBottomPosition;
      }
      return {
        sticky,
        top,
        left,
        width: width2
      };
    }
    updateStuckItems(item, sticky) {
      const {
        stickyNode
      } = item;
      if (sticky && !this.isNodeStuck(stickyNode)) {
        this.addStuckItem(item);
      } else if (!sticky && this.isNodeStuck(stickyNode)) {
        this.removeStuckItem(item);
      }
    }
    addStuckItem(stickyItem) {
      this.stuckItems.push(stickyItem);
    }
    removeStuckItem(stickyItem) {
      const {
        stickyNode: nodeToRemove
      } = stickyItem;
      const nodeIndex = this.stuckItems.findIndex(({
        stickyNode
      }) => nodeToRemove === stickyNode);
      this.stuckItems.splice(nodeIndex, 1);
    }
    getOffset(node) {
      if (this.stuckItems.length === 0) {
        return 0;
      }
      let offset = 0;
      let count = 0;
      const stuckNodesLength = this.stuckItems.length;
      const nodeRect = getRectForNode(node);
      while (count < stuckNodesLength) {
        const stuckNode = this.stuckItems[count].stickyNode;
        if (stuckNode !== node) {
          const stuckNodeRect = getRectForNode(stuckNode);
          if (!horizontallyOverlaps(nodeRect, stuckNodeRect)) {
            offset += getRectForNode(stuckNode).height;
          }
        } else {
          break;
        }
        count++;
      }
      return offset;
    }
    isNodeStuck(node) {
      const nodeFound = this.stuckItems.findIndex(({
        stickyNode
      }) => node === stickyNode);
      return nodeFound >= 0;
    }
    setTopBarOffset(container) {
      const topbarElement = container.querySelector(`:not(${scrollable.selector}) ${dataPolarisTopBar.selector}`);
      this.topBarOffset = topbarElement ? topbarElement.clientHeight : 0;
    }
  }
  function isDocument(node) {
    return node === document;
  }
  function scrollTopFor(container) {
    return isDocument(container) ? document.body.scrollTop || document.documentElement.scrollTop : container.scrollTop;
  }
  function horizontallyOverlaps(rect1, rect2) {
    const rect1Left = rect1.left;
    const rect1Right = rect1.left + rect1.width;
    const rect2Left = rect2.left;
    const rect2Right = rect2.left + rect2.width;
    return rect2Right < rect1Left || rect1Right < rect2Left;
  }
  const I18nContext = /* @__PURE__ */ React2.createContext(void 0);
  const ScrollLockManagerContext = /* @__PURE__ */ React2.createContext(void 0);
  const StickyManagerContext = /* @__PURE__ */ React2.createContext(void 0);
  const LinkContext = /* @__PURE__ */ React2.createContext(void 0);
  class EventListener extends React2.PureComponent {
    componentDidMount() {
      this.attachListener();
    }
    componentDidUpdate({
      passive,
      ...detachProps
    }) {
      this.detachListener(detachProps);
      this.attachListener();
    }
    componentWillUnmount() {
      this.detachListener();
    }
    render() {
      return null;
    }
    attachListener() {
      const {
        event,
        handler,
        capture,
        passive
      } = this.props;
      window.addEventListener(event, handler, {
        capture,
        passive
      });
    }
    detachListener(prevProps) {
      const {
        event,
        handler,
        capture
      } = prevProps || this.props;
      window.removeEventListener(event, handler, capture);
    }
  }
  function useIsAfterInitialMount() {
    const [isAfterInitialMount, setIsAfterInitialMount] = React2.useState(false);
    React2.useEffect(() => {
      setIsAfterInitialMount(true);
    }, []);
    return isAfterInitialMount;
  }
  const PortalsManagerContext = /* @__PURE__ */ React2.createContext(void 0);
  const FocusManagerContext = /* @__PURE__ */ React2.createContext(void 0);
  var SvgAlertDiamondIcon = function SvgAlertDiamondIcon2(props) {
    return /* @__PURE__ */ React2.createElement("svg", Object.assign({
      viewBox: "0 0 20 20"
    }, props), /* @__PURE__ */ React2.createElement("path", {
      d: "M10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
    }), /* @__PURE__ */ React2.createElement("path", {
      d: "M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    }), /* @__PURE__ */ React2.createElement("path", {
      fillRule: "evenodd",
      d: "M11.237 3.177a1.75 1.75 0 0 0-2.474 0l-5.586 5.585a1.75 1.75 0 0 0 0 2.475l5.586 5.586a1.75 1.75 0 0 0 2.474 0l5.586-5.586a1.75 1.75 0 0 0 0-2.475l-5.586-5.585Zm-1.414 1.06a.25.25 0 0 1 .354 0l5.586 5.586a.25.25 0 0 1 0 .354l-5.586 5.585a.25.25 0 0 1-.354 0l-5.586-5.585a.25.25 0 0 1 0-.354l5.586-5.586Z"
    }));
  };
  SvgAlertDiamondIcon.displayName = "AlertDiamondIcon";
  var SvgAlertTriangleIcon = function SvgAlertTriangleIcon2(props) {
    return /* @__PURE__ */ React2.createElement("svg", Object.assign({
      viewBox: "0 0 20 20"
    }, props), /* @__PURE__ */ React2.createElement("path", {
      d: "M10 6.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 1 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z"
    }), /* @__PURE__ */ React2.createElement("path", {
      d: "M11 13.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    }), /* @__PURE__ */ React2.createElement("path", {
      fillRule: "evenodd",
      d: "M10 3.5c-1.045 0-1.784.702-2.152 1.447a449.26 449.26 0 0 1-2.005 3.847l-.028.052a403.426 403.426 0 0 0-2.008 3.856c-.372.752-.478 1.75.093 2.614.57.863 1.542 1.184 2.464 1.184h7.272c.922 0 1.895-.32 2.464-1.184.57-.864.465-1.862.093-2.614-.21-.424-1.113-2.147-2.004-3.847l-.032-.061a429.497 429.497 0 0 1-2.005-3.847c-.368-.745-1.107-1.447-2.152-1.447Zm-.808 2.112c.404-.816 1.212-.816 1.616 0 .202.409 1.112 2.145 2.022 3.88a418.904 418.904 0 0 1 2.018 3.875c.404.817 0 1.633-1.212 1.633h-7.272c-1.212 0-1.617-.816-1.212-1.633.202-.408 1.113-2.147 2.023-3.883a421.932 421.932 0 0 0 2.017-3.872Z"
    }));
  };
  SvgAlertTriangleIcon.displayName = "AlertTriangleIcon";
  var SvgCheckIcon = function SvgCheckIcon2(props) {
    return /* @__PURE__ */ React2.createElement("svg", Object.assign({
      viewBox: "0 0 20 20"
    }, props), /* @__PURE__ */ React2.createElement("path", {
      fillRule: "evenodd",
      d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
    }));
  };
  SvgCheckIcon.displayName = "CheckIcon";
  var SvgChevronDownIcon = function SvgChevronDownIcon2(props) {
    return /* @__PURE__ */ React2.createElement("svg", Object.assign({
      viewBox: "0 0 20 20"
    }, props), /* @__PURE__ */ React2.createElement("path", {
      fillRule: "evenodd",
      d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
    }));
  };
  SvgChevronDownIcon.displayName = "ChevronDownIcon";
  var SvgChevronUpIcon = function SvgChevronUpIcon2(props) {
    return /* @__PURE__ */ React2.createElement("svg", Object.assign({
      viewBox: "0 0 20 20"
    }, props), /* @__PURE__ */ React2.createElement("path", {
      fillRule: "evenodd",
      d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
    }));
  };
  SvgChevronUpIcon.displayName = "ChevronUpIcon";
  var SvgInfoIcon = function SvgInfoIcon2(props) {
    return /* @__PURE__ */ React2.createElement("svg", Object.assign({
      viewBox: "0 0 20 20"
    }, props), /* @__PURE__ */ React2.createElement("path", {
      d: "M10 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75Z"
    }), /* @__PURE__ */ React2.createElement("path", {
      d: "M9 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
    }), /* @__PURE__ */ React2.createElement("path", {
      fillRule: "evenodd",
      d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
    }));
  };
  SvgInfoIcon.displayName = "InfoIcon";
  var SvgSelectIcon = function SvgSelectIcon2(props) {
    return /* @__PURE__ */ React2.createElement("svg", Object.assign({
      viewBox: "0 0 20 20"
    }, props), /* @__PURE__ */ React2.createElement("path", {
      d: "M10.884 4.323a1.25 1.25 0 0 0-1.768 0l-2.646 2.647a.75.75 0 0 0 1.06 1.06l2.47-2.47 2.47 2.47a.75.75 0 1 0 1.06-1.06l-2.646-2.647Z"
    }), /* @__PURE__ */ React2.createElement("path", {
      d: "m13.53 13.03-2.646 2.647a1.25 1.25 0 0 1-1.768 0l-2.646-2.647a.75.75 0 0 1 1.06-1.06l2.47 2.47 2.47-2.47a.75.75 0 0 1 1.06 1.06Z"
    }));
  };
  SvgSelectIcon.displayName = "SelectIcon";
  var SvgXIcon = function SvgXIcon2(props) {
    return /* @__PURE__ */ React2.createElement("svg", Object.assign({
      viewBox: "0 0 20 20"
    }, props), /* @__PURE__ */ React2.createElement("path", {
      d: "M12.72 13.78a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72-2.72-2.72a.75.75 0 0 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72Z"
    }));
  };
  SvgXIcon.displayName = "XIcon";
  const FOCUSABLE_SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]';
  const KEYBOARD_FOCUSABLE_SELECTORS = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]:not([tabindex="-1"])';
  const handleMouseUpByBlurring = ({
    currentTarget
  }) => currentTarget.blur();
  function findFirstFocusableNode(element, onlyDescendants = true) {
    if (!onlyDescendants && matches(element, FOCUSABLE_SELECTOR)) {
      return element;
    }
    return element.querySelector(FOCUSABLE_SELECTOR);
  }
  function focusFirstFocusableNode(element, onlyDescendants = true) {
    findFirstFocusableNode(element, onlyDescendants)?.focus();
  }
  function findFirstKeyboardFocusableNode(element, onlyDescendants = true) {
    if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
      return element;
    }
    return element.querySelector(KEYBOARD_FOCUSABLE_SELECTORS);
  }
  function focusFirstKeyboardFocusableNode(element, onlyDescendants = true) {
    const firstFocusable = findFirstKeyboardFocusableNode(element, onlyDescendants);
    if (firstFocusable) {
      firstFocusable.focus();
      return true;
    }
    return false;
  }
  function findLastKeyboardFocusableNode(element, onlyDescendants = true) {
    if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
      return element;
    }
    const allFocusable = element.querySelectorAll(KEYBOARD_FOCUSABLE_SELECTORS);
    return allFocusable[allFocusable.length - 1];
  }
  function focusLastKeyboardFocusableNode(element, onlyDescendants = true) {
    const lastFocusable = findLastKeyboardFocusableNode(element, onlyDescendants);
    if (lastFocusable) {
      lastFocusable.focus();
      return true;
    }
    return false;
  }
  function matches(node, selector) {
    if (node.matches) {
      return node.matches(selector);
    }
    const matches2 = (node.ownerDocument || document).querySelectorAll(selector);
    let i = matches2.length;
    while (--i >= 0 && matches2.item(i) !== node) return i > -1;
  }
  var styles$e = {
    "Button": "Polaris-Button",
    "disabled": "Polaris-Button--disabled",
    "pressed": "Polaris-Button--pressed",
    "variantPrimary": "Polaris-Button--variantPrimary",
    "variantSecondary": "Polaris-Button--variantSecondary",
    "variantTertiary": "Polaris-Button--variantTertiary",
    "variantPlain": "Polaris-Button--variantPlain",
    "removeUnderline": "Polaris-Button--removeUnderline",
    "variantMonochromePlain": "Polaris-Button--variantMonochromePlain",
    "toneSuccess": "Polaris-Button--toneSuccess",
    "toneCritical": "Polaris-Button--toneCritical",
    "sizeMicro": "Polaris-Button--sizeMicro",
    "sizeSlim": "Polaris-Button--sizeSlim",
    "sizeMedium": "Polaris-Button--sizeMedium",
    "sizeLarge": "Polaris-Button--sizeLarge",
    "textAlignCenter": "Polaris-Button--textAlignCenter",
    "textAlignStart": "Polaris-Button--textAlignStart",
    "textAlignLeft": "Polaris-Button--textAlignLeft",
    "textAlignEnd": "Polaris-Button--textAlignEnd",
    "textAlignRight": "Polaris-Button--textAlignRight",
    "fullWidth": "Polaris-Button--fullWidth",
    "iconOnly": "Polaris-Button--iconOnly",
    "iconWithText": "Polaris-Button--iconWithText",
    "disclosure": "Polaris-Button--disclosure",
    "loading": "Polaris-Button--loading",
    "pressable": "Polaris-Button--pressable",
    "hidden": "Polaris-Button--hidden",
    "Icon": "Polaris-Button__Icon",
    "Spinner": "Polaris-Button__Spinner"
  };
  var styles$d = {
    "Icon": "Polaris-Icon",
    "toneInherit": "Polaris-Icon--toneInherit",
    "toneBase": "Polaris-Icon--toneBase",
    "toneSubdued": "Polaris-Icon--toneSubdued",
    "toneCaution": "Polaris-Icon--toneCaution",
    "toneWarning": "Polaris-Icon--toneWarning",
    "toneCritical": "Polaris-Icon--toneCritical",
    "toneInteractive": "Polaris-Icon--toneInteractive",
    "toneInfo": "Polaris-Icon--toneInfo",
    "toneSuccess": "Polaris-Icon--toneSuccess",
    "tonePrimary": "Polaris-Icon--tonePrimary",
    "toneEmphasis": "Polaris-Icon--toneEmphasis",
    "toneMagic": "Polaris-Icon--toneMagic",
    "toneTextCaution": "Polaris-Icon--toneTextCaution",
    "toneTextWarning": "Polaris-Icon--toneTextWarning",
    "toneTextCritical": "Polaris-Icon--toneTextCritical",
    "toneTextInfo": "Polaris-Icon--toneTextInfo",
    "toneTextPrimary": "Polaris-Icon--toneTextPrimary",
    "toneTextSuccess": "Polaris-Icon--toneTextSuccess",
    "toneTextMagic": "Polaris-Icon--toneTextMagic",
    "Svg": "Polaris-Icon__Svg",
    "Img": "Polaris-Icon__Img",
    "Placeholder": "Polaris-Icon__Placeholder"
  };
  var styles$c = {
    "root": "Polaris-Text--root",
    "block": "Polaris-Text--block",
    "truncate": "Polaris-Text--truncate",
    "visuallyHidden": "Polaris-Text--visuallyHidden",
    "start": "Polaris-Text--start",
    "center": "Polaris-Text--center",
    "end": "Polaris-Text--end",
    "justify": "Polaris-Text--justify",
    "base": "Polaris-Text--base",
    "inherit": "Polaris-Text--inherit",
    "disabled": "Polaris-Text--disabled",
    "success": "Polaris-Text--success",
    "critical": "Polaris-Text--critical",
    "caution": "Polaris-Text--caution",
    "subdued": "Polaris-Text--subdued",
    "magic": "Polaris-Text--magic",
    "magic-subdued": "Polaris-Text__magic--subdued",
    "text-inverse": "Polaris-Text__text--inverse",
    "text-inverse-secondary": "Polaris-Text--textInverseSecondary",
    "headingXs": "Polaris-Text--headingXs",
    "headingSm": "Polaris-Text--headingSm",
    "headingMd": "Polaris-Text--headingMd",
    "headingLg": "Polaris-Text--headingLg",
    "headingXl": "Polaris-Text--headingXl",
    "heading2xl": "Polaris-Text--heading2xl",
    "heading3xl": "Polaris-Text--heading3xl",
    "bodyXs": "Polaris-Text--bodyXs",
    "bodySm": "Polaris-Text--bodySm",
    "bodyMd": "Polaris-Text--bodyMd",
    "bodyLg": "Polaris-Text--bodyLg",
    "regular": "Polaris-Text--regular",
    "medium": "Polaris-Text--medium",
    "semibold": "Polaris-Text--semibold",
    "bold": "Polaris-Text--bold",
    "break": "Polaris-Text--break",
    "numeric": "Polaris-Text--numeric",
    "line-through": "Polaris-Text__line--through"
  };
  const Text = ({
    alignment,
    as,
    breakWord,
    children,
    tone,
    fontWeight,
    id,
    numeric = false,
    truncate = false,
    variant,
    visuallyHidden = false,
    textDecorationLine
  }) => {
    const Component = as || (visuallyHidden ? "span" : "p");
    const className = classNames(styles$c.root, variant && styles$c[variant], fontWeight && styles$c[fontWeight], (alignment || truncate) && styles$c.block, alignment && styles$c[alignment], breakWord && styles$c.break, tone && styles$c[tone], numeric && styles$c.numeric, truncate && styles$c.truncate, visuallyHidden && styles$c.visuallyHidden, textDecorationLine && styles$c[textDecorationLine]);
    return /* @__PURE__ */ React2.createElement(Component, Object.assign({
      className
    }, id && {
      id
    }), children);
  };
  function Icon({
    source,
    tone,
    accessibilityLabel
  }) {
    let sourceType;
    if (typeof source === "function") {
      sourceType = "function";
    } else if (source === "placeholder") {
      sourceType = "placeholder";
    } else {
      sourceType = "external";
    }
    const className = classNames(styles$d.Icon, tone && styles$d[variationName("tone", tone)]);
    const {
      mdDown
    } = useBreakpoints();
    const SourceComponent = source;
    const contentMarkup = {
      function: /* @__PURE__ */ React2.createElement(SourceComponent, Object.assign({
        className: styles$d.Svg,
        focusable: "false",
        "aria-hidden": "true"
        // On Mobile we're scaling the viewBox to 18x18 to make the icons bigger
        // Also, we're setting the viewport origin to 1x1 to center the icon
        // We use this syntax so we don't override the existing viewBox value if we don't need to.
      }, mdDown ? {
        viewBox: "1 1 18 18"
      } : {})),
      placeholder: /* @__PURE__ */ React2.createElement("div", {
        className: styles$d.Placeholder
      }),
      external: /* @__PURE__ */ React2.createElement("img", {
        className: styles$d.Img,
        src: `data:image/svg+xml;utf8,${source}`,
        alt: "",
        "aria-hidden": "true"
      })
    };
    return /* @__PURE__ */ React2.createElement("span", {
      className
    }, accessibilityLabel && /* @__PURE__ */ React2.createElement(Text, {
      as: "span",
      visuallyHidden: true
    }, accessibilityLabel), contentMarkup[sourceType]);
  }
  var styles$b = {
    "Spinner": "Polaris-Spinner",
    "sizeSmall": "Polaris-Spinner--sizeSmall",
    "sizeLarge": "Polaris-Spinner--sizeLarge"
  };
  function Spinner({
    size: size2 = "large",
    accessibilityLabel,
    hasFocusableParent
  }) {
    const isAfterInitialMount = useIsAfterInitialMount();
    const className = classNames(styles$b.Spinner, size2 && styles$b[variationName("size", size2)]);
    const spinnerSVGMarkup = size2 === "large" ? /* @__PURE__ */ React2.createElement("svg", {
      viewBox: "0 0 44 44",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React2.createElement("path", {
      d: "M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"
    })) : /* @__PURE__ */ React2.createElement("svg", {
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React2.createElement("path", {
      d: "M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
    }));
    const spanAttributes = {
      ...!hasFocusableParent && {
        role: "status"
      }
    };
    const accessibilityLabelMarkup = (isAfterInitialMount || !hasFocusableParent) && /* @__PURE__ */ React2.createElement(Text, {
      as: "span",
      visuallyHidden: true
    }, accessibilityLabel);
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("span", {
      className
    }, spinnerSVGMarkup), /* @__PURE__ */ React2.createElement("span", spanAttributes, accessibilityLabelMarkup));
  }
  function useDisableClick(disabled, handleClick) {
    const handleClickWrapper = React2.useCallback((event) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, [disabled]);
    if (!disabled) {
      return handleClick;
    }
    return handleClickWrapper;
  }
  function useLink() {
    return React2.useContext(LinkContext);
  }
  const UnstyledLink = /* @__PURE__ */ React2.memo(/* @__PURE__ */ React2.forwardRef(function UnstyledLink2(props, _ref) {
    const LinkComponent = useLink();
    if (LinkComponent) {
      return /* @__PURE__ */ React2.createElement(LinkComponent, Object.assign({}, unstyled.props, props, {
        ref: _ref
      }));
    }
    const {
      external,
      url,
      target: targetProp,
      ...rest
    } = props;
    let target;
    if (external) {
      target = "_blank";
    } else {
      target = targetProp ?? void 0;
    }
    const rel = target === "_blank" ? "noopener noreferrer" : void 0;
    return /* @__PURE__ */ React2.createElement("a", Object.assign({
      target
    }, rest, {
      href: url,
      rel
    }, unstyled.props, {
      ref: _ref
    }));
  }));
  function UnstyledButton({
    id,
    children,
    className,
    url,
    external,
    target,
    download,
    submit,
    disabled,
    loading,
    pressed,
    accessibilityLabel,
    role,
    ariaControls,
    ariaExpanded,
    ariaDescribedBy,
    ariaChecked,
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onMouseEnter,
    onTouchStart,
    ...rest
  }) {
    let buttonMarkup;
    const commonProps = {
      id,
      className,
      "aria-label": accessibilityLabel
    };
    const interactiveProps = {
      ...commonProps,
      role,
      onClick,
      onFocus,
      onBlur,
      onMouseUp: handleMouseUpByBlurring,
      onMouseEnter,
      onTouchStart
    };
    const handleClick = useDisableClick(disabled, onClick);
    if (url) {
      buttonMarkup = disabled ? (
        // Render an `<a>` so toggling disabled/enabled state changes only the
        // `href` attribute instead of replacing the whole element.
        /* @__PURE__ */ React2.createElement("a", commonProps, children)
      ) : /* @__PURE__ */ React2.createElement(UnstyledLink, Object.assign({}, interactiveProps, {
        url,
        external,
        target,
        download
      }, rest), children);
    } else {
      buttonMarkup = /* @__PURE__ */ React2.createElement("button", Object.assign({}, interactiveProps, {
        "aria-disabled": disabled,
        type: submit ? "submit" : "button",
        "aria-busy": loading ? true : void 0,
        "aria-controls": ariaControls,
        "aria-expanded": ariaExpanded,
        "aria-describedby": ariaDescribedBy,
        "aria-checked": ariaChecked,
        "aria-pressed": pressed,
        onKeyDown,
        onKeyUp,
        onKeyPress,
        onClick: handleClick,
        tabIndex: disabled ? -1 : void 0
      }, rest), children);
    }
    return buttonMarkup;
  }
  class MissingAppProviderError extends Error {
    constructor(message = "") {
      super(`${message ? `${message} ` : message}Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.`);
      this.name = "MissingAppProviderError";
    }
  }
  function useI18n() {
    const i18n = React2.useContext(I18nContext);
    if (!i18n) {
      throw new MissingAppProviderError("No i18n was provided.");
    }
    return i18n;
  }
  function Button({
    id,
    children,
    url,
    disabled,
    external,
    download,
    target,
    submit,
    loading,
    pressed,
    accessibilityLabel,
    role,
    ariaControls,
    ariaExpanded,
    ariaDescribedBy,
    ariaChecked,
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onMouseEnter,
    onTouchStart,
    onPointerDown,
    icon,
    disclosure,
    removeUnderline,
    size: size2 = "medium",
    textAlign = "center",
    fullWidth,
    dataPrimaryLink,
    tone,
    variant = "secondary"
  }) {
    const i18n = useI18n();
    const isDisabled = disabled || loading;
    const {
      mdUp
    } = useBreakpoints();
    const className = classNames(styles$e.Button, styles$e.pressable, styles$e[variationName("variant", variant)], styles$e[variationName("size", size2)], styles$e[variationName("textAlign", textAlign)], fullWidth && styles$e.fullWidth, disclosure && styles$e.disclosure, icon && children && styles$e.iconWithText, icon && children == null && styles$e.iconOnly, isDisabled && styles$e.disabled, loading && styles$e.loading, pressed && !disabled && !url && styles$e.pressed, removeUnderline && styles$e.removeUnderline, tone && styles$e[variationName("tone", tone)]);
    const disclosureMarkup = disclosure ? /* @__PURE__ */ React2.createElement("span", {
      className: loading ? styles$e.hidden : styles$e.Icon
    }, /* @__PURE__ */ React2.createElement(Icon, {
      source: loading ? "placeholder" : getDisclosureIconSource(disclosure, SvgChevronUpIcon, SvgChevronDownIcon)
    })) : null;
    const iconSource = isIconSource(icon) ? /* @__PURE__ */ React2.createElement(Icon, {
      source: loading ? "placeholder" : icon
    }) : icon;
    const iconMarkup = iconSource ? /* @__PURE__ */ React2.createElement("span", {
      className: loading ? styles$e.hidden : styles$e.Icon
    }, iconSource) : null;
    const hasPlainText = ["plain", "monochromePlain"].includes(variant);
    let textFontWeight = "medium";
    if (hasPlainText) {
      textFontWeight = "regular";
    } else if (variant === "primary") {
      textFontWeight = mdUp ? "medium" : "semibold";
    }
    let textVariant = "bodySm";
    if (size2 === "large" || hasPlainText && size2 !== "micro") {
      textVariant = "bodyMd";
    }
    const childMarkup = children ? /* @__PURE__ */ React2.createElement(Text, {
      as: "span",
      variant: textVariant,
      fontWeight: textFontWeight,
      key: disabled ? "text-disabled" : "text"
    }, children) : null;
    const spinnerSVGMarkup = loading ? /* @__PURE__ */ React2.createElement("span", {
      className: styles$e.Spinner
    }, /* @__PURE__ */ React2.createElement(Spinner, {
      size: "small",
      accessibilityLabel: i18n.translate("Polaris.Button.spinnerAccessibilityLabel")
    })) : null;
    const commonProps = {
      id,
      className,
      accessibilityLabel,
      ariaDescribedBy,
      role,
      onClick,
      onFocus,
      onBlur,
      onMouseUp: handleMouseUpByBlurring,
      onMouseEnter,
      onTouchStart,
      "data-primary-link": dataPrimaryLink
    };
    const linkProps = {
      url,
      external,
      download,
      target
    };
    const actionProps = {
      submit,
      disabled: isDisabled,
      loading,
      ariaControls,
      ariaExpanded,
      ariaChecked,
      pressed,
      onKeyDown,
      onKeyUp,
      onKeyPress,
      onPointerDown
    };
    const buttonMarkup = /* @__PURE__ */ React2.createElement(UnstyledButton, Object.assign({}, commonProps, linkProps, actionProps), spinnerSVGMarkup, iconMarkup, childMarkup, disclosureMarkup);
    return buttonMarkup;
  }
  function isIconSource(x) {
    return typeof x === "string" || typeof x === "object" && x.body || typeof x === "function";
  }
  function getDisclosureIconSource(disclosure, upIcon, downIcon) {
    if (disclosure === "select") {
      return SvgSelectIcon;
    }
    return disclosure === "up" ? upIcon : downIcon;
  }
  function buttonsFrom(actions, overrides = {}) {
    if (Array.isArray(actions)) {
      return actions.map((action, index) => buttonFrom(action, overrides, index));
    } else {
      const action = actions;
      return buttonFrom(action, overrides);
    }
  }
  function buttonFrom({
    content,
    onAction,
    plain,
    destructive,
    ...action
  }, overrides, key) {
    const plainVariant = plain ? "plain" : void 0;
    const destructiveVariant = destructive ? "primary" : void 0;
    const tone = !overrides?.tone && destructive ? "critical" : overrides?.tone;
    return /* @__PURE__ */ React2.createElement(Button, Object.assign({
      key,
      onClick: onAction,
      tone,
      variant: plainVariant || destructiveVariant
    }, action, overrides), content);
  }
  var styles$a = {
    "listReset": "Polaris-Box--listReset",
    "Box": "Polaris-Box",
    "visuallyHidden": "Polaris-Box--visuallyHidden",
    "printHidden": "Polaris-Box--printHidden"
  };
  const Box = /* @__PURE__ */ React2.forwardRef(({
    as = "div",
    background,
    borderColor,
    borderStyle,
    borderWidth,
    borderBlockStartWidth,
    borderBlockEndWidth,
    borderInlineStartWidth,
    borderInlineEndWidth,
    borderRadius,
    borderEndStartRadius,
    borderEndEndRadius,
    borderStartStartRadius,
    borderStartEndRadius,
    children,
    color: color2,
    id,
    minHeight,
    minWidth,
    maxWidth,
    overflowX,
    overflowY,
    outlineColor,
    outlineStyle,
    outlineWidth,
    padding,
    paddingBlock,
    paddingBlockStart,
    paddingBlockEnd,
    paddingInline,
    paddingInlineStart,
    paddingInlineEnd,
    role,
    shadow: shadow2,
    tabIndex,
    width: width2,
    printHidden,
    visuallyHidden,
    position,
    insetBlockStart,
    insetBlockEnd,
    insetInlineStart,
    insetInlineEnd,
    zIndex: zIndex2,
    opacity,
    ...restProps
  }, ref) => {
    const borderStyleValue = borderStyle ? borderStyle : borderColor || borderWidth || borderBlockStartWidth || borderBlockEndWidth || borderInlineStartWidth || borderInlineEndWidth ? "solid" : void 0;
    const outlineStyleValue = outlineStyle ? outlineStyle : outlineColor || outlineWidth ? "solid" : void 0;
    const style = {
      "--pc-box-color": color2 ? `var(--p-color-${color2})` : void 0,
      "--pc-box-background": background ? `var(--p-color-${background})` : void 0,
      // eslint-disable-next-line no-nested-ternary
      "--pc-box-border-color": borderColor ? borderColor === "transparent" ? "transparent" : `var(--p-color-${borderColor})` : void 0,
      "--pc-box-border-style": borderStyleValue,
      "--pc-box-border-radius": borderRadius ? `var(--p-border-radius-${borderRadius})` : void 0,
      "--pc-box-border-end-start-radius": borderEndStartRadius ? `var(--p-border-radius-${borderEndStartRadius})` : void 0,
      "--pc-box-border-end-end-radius": borderEndEndRadius ? `var(--p-border-radius-${borderEndEndRadius})` : void 0,
      "--pc-box-border-start-start-radius": borderStartStartRadius ? `var(--p-border-radius-${borderStartStartRadius})` : void 0,
      "--pc-box-border-start-end-radius": borderStartEndRadius ? `var(--p-border-radius-${borderStartEndRadius})` : void 0,
      "--pc-box-border-width": borderWidth ? `var(--p-border-width-${borderWidth})` : void 0,
      "--pc-box-border-block-start-width": borderBlockStartWidth ? `var(--p-border-width-${borderBlockStartWidth})` : void 0,
      "--pc-box-border-block-end-width": borderBlockEndWidth ? `var(--p-border-width-${borderBlockEndWidth})` : void 0,
      "--pc-box-border-inline-start-width": borderInlineStartWidth ? `var(--p-border-width-${borderInlineStartWidth})` : void 0,
      "--pc-box-border-inline-end-width": borderInlineEndWidth ? `var(--p-border-width-${borderInlineEndWidth})` : void 0,
      "--pc-box-min-height": minHeight,
      "--pc-box-min-width": minWidth,
      "--pc-box-max-width": maxWidth,
      "--pc-box-outline-color": outlineColor ? `var(--p-color-${outlineColor})` : void 0,
      "--pc-box-outline-style": outlineStyleValue,
      "--pc-box-outline-width": outlineWidth ? `var(--p-border-width-${outlineWidth})` : void 0,
      "--pc-box-overflow-x": overflowX,
      "--pc-box-overflow-y": overflowY,
      ...getResponsiveProps("box", "padding-block-start", "space", paddingBlockStart || paddingBlock || padding),
      ...getResponsiveProps("box", "padding-block-end", "space", paddingBlockEnd || paddingBlock || padding),
      ...getResponsiveProps("box", "padding-inline-start", "space", paddingInlineStart || paddingInline || padding),
      ...getResponsiveProps("box", "padding-inline-end", "space", paddingInlineEnd || paddingInline || padding),
      "--pc-box-shadow": shadow2 ? `var(--p-shadow-${shadow2})` : void 0,
      "--pc-box-width": width2,
      position,
      "--pc-box-inset-block-start": insetBlockStart ? `var(--p-space-${insetBlockStart})` : void 0,
      "--pc-box-inset-block-end": insetBlockEnd ? `var(--p-space-${insetBlockEnd})` : void 0,
      "--pc-box-inset-inline-start": insetInlineStart ? `var(--p-space-${insetInlineStart})` : void 0,
      "--pc-box-inset-inline-end": insetInlineEnd ? `var(--p-space-${insetInlineEnd})` : void 0,
      zIndex: zIndex2,
      opacity
    };
    const className = classNames(styles$a.Box, visuallyHidden && styles$a.visuallyHidden, printHidden && styles$a.printHidden, as === "ul" && styles$a.listReset);
    return /* @__PURE__ */ React2.createElement(as, {
      className,
      id,
      ref,
      style: sanitizeCustomProperties(style),
      role,
      tabIndex,
      ...restProps
    }, children);
  });
  Box.displayName = "Box";
  var styles$9 = {
    "InlineStack": "Polaris-InlineStack"
  };
  const InlineStack = function InlineStack2({
    as: Element2 = "div",
    align,
    direction = "row",
    blockAlign,
    gap,
    wrap = true,
    children
  }) {
    const style = {
      "--pc-inline-stack-align": align,
      "--pc-inline-stack-block-align": blockAlign,
      "--pc-inline-stack-wrap": wrap ? "wrap" : "nowrap",
      ...getResponsiveProps("inline-stack", "gap", "space", gap),
      ...getResponsiveValue("inline-stack", "flex-direction", direction)
    };
    return /* @__PURE__ */ React2.createElement(Element2, {
      className: styles$9.InlineStack,
      style
    }, children);
  };
  var styles$8 = {
    "BlockStack": "Polaris-BlockStack",
    "listReset": "Polaris-BlockStack--listReset",
    "fieldsetReset": "Polaris-BlockStack--fieldsetReset"
  };
  const BlockStack = ({
    as = "div",
    children,
    align,
    inlineAlign,
    gap,
    id,
    reverseOrder = false,
    ...restProps
  }) => {
    const className = classNames(styles$8.BlockStack, (as === "ul" || as === "ol") && styles$8.listReset, as === "fieldset" && styles$8.fieldsetReset);
    const style = {
      "--pc-block-stack-align": align ? `${align}` : null,
      "--pc-block-stack-inline-align": inlineAlign ? `${inlineAlign}` : null,
      "--pc-block-stack-order": reverseOrder ? "column-reverse" : "column",
      ...getResponsiveProps("block-stack", "gap", "space", gap)
    };
    return /* @__PURE__ */ React2.createElement(as, {
      className,
      id,
      style: sanitizeCustomProperties(style),
      ...restProps
    }, children);
  };
  function useToggle(initialState) {
    const [value, setState] = React2.useState(initialState);
    return {
      value,
      toggle: React2.useCallback(() => setState((state) => !state), []),
      setTrue: React2.useCallback(() => setState(true), []),
      setFalse: React2.useCallback(() => setState(false), [])
    };
  }
  function usePortalsManager() {
    const portalsManager = React2.useContext(PortalsManagerContext);
    if (!portalsManager) {
      throw new Error("No portals manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    }
    return portalsManager;
  }
  function Portal({
    children,
    idPrefix = "",
    onPortalCreated = noop$1
  }) {
    const themeName = useThemeName();
    const {
      container
    } = usePortalsManager();
    const uniqueId = React2.useId();
    const portalId = idPrefix !== "" ? `${idPrefix}-${uniqueId}` : uniqueId;
    React2.useEffect(() => {
      onPortalCreated();
    }, [onPortalCreated]);
    return container ? /* @__PURE__ */ ReactDOM2.createPortal(/* @__PURE__ */ React2.createElement(ThemeProvider, {
      theme: isThemeNameLocal(themeName) ? themeName : themeNameDefault,
      "data-portal-id": portalId
    }, children), container) : null;
  }
  function noop$1() {
  }
  const UNIQUE_IDENTIFIER = Symbol("unique_identifier");
  function useLazyRef(initialValue) {
    const lazyRef = React2.useRef(UNIQUE_IDENTIFIER);
    if (lazyRef.current === UNIQUE_IDENTIFIER) {
      lazyRef.current = initialValue();
    }
    return lazyRef;
  }
  function useComponentDidMount(callback) {
    const isAfterInitialMount = useIsAfterInitialMount();
    const hasInvokedLifeCycle = React2.useRef(false);
    if (isAfterInitialMount && !hasInvokedLifeCycle.current) {
      hasInvokedLifeCycle.current = true;
      return callback();
    }
  }
  const ScrollableContext = /* @__PURE__ */ React2.createContext(void 0);
  var styles$7 = {
    "Scrollable": "Polaris-Scrollable",
    "hasTopShadow": "Polaris-Scrollable--hasTopShadow",
    "hasBottomShadow": "Polaris-Scrollable--hasBottomShadow",
    "horizontal": "Polaris-Scrollable--horizontal",
    "vertical": "Polaris-Scrollable--vertical",
    "scrollbarWidthThin": "Polaris-Scrollable--scrollbarWidthThin",
    "scrollbarWidthNone": "Polaris-Scrollable--scrollbarWidthNone",
    "scrollbarWidthAuto": "Polaris-Scrollable--scrollbarWidthAuto",
    "scrollbarGutterStable": "Polaris-Scrollable--scrollbarGutterStable",
    "scrollbarGutterStableboth-edges": "Polaris-Scrollable__scrollbarGutterStableboth--edges"
  };
  function ScrollTo() {
    const anchorNode = React2.useRef(null);
    const scrollToPosition = React2.useContext(ScrollableContext);
    React2.useEffect(() => {
      if (!scrollToPosition || !anchorNode.current) {
        return;
      }
      scrollToPosition(anchorNode.current.offsetTop);
    }, [scrollToPosition]);
    const id = React2.useId();
    return /* @__PURE__ */ React2.createElement("a", {
      id,
      ref: anchorNode
    });
  }
  const MAX_SCROLL_HINT_DISTANCE = 100;
  const LOW_RES_BUFFER = 2;
  const ScrollableComponent = /* @__PURE__ */ React2.forwardRef(({
    children,
    className,
    horizontal = true,
    vertical = true,
    shadow: shadow2,
    hint,
    focusable,
    scrollbarWidth = "thin",
    scrollbarGutter,
    onScrolledToBottom,
    ...rest
  }, forwardedRef) => {
    const [topShadow, setTopShadow] = React2.useState(false);
    const [bottomShadow, setBottomShadow] = React2.useState(false);
    const stickyManager = useLazyRef(() => new StickyManager());
    const scrollArea = React2.useRef(null);
    const scrollTo = React2.useCallback((scrollY, options = {}) => {
      const optionsBehavior = options.behavior || "smooth";
      const behavior = prefersReducedMotion() ? "auto" : optionsBehavior;
      scrollArea.current?.scrollTo({
        top: scrollY,
        behavior
      });
    }, []);
    const defaultRef = React2.useRef();
    React2.useImperativeHandle(forwardedRef || defaultRef, () => ({
      scrollTo
    }));
    const handleScroll = React2.useCallback(() => {
      const currentScrollArea = scrollArea.current;
      if (!currentScrollArea) {
        return;
      }
      requestAnimationFrame(() => {
        const {
          scrollTop,
          clientHeight,
          scrollHeight
        } = currentScrollArea;
        const canScroll = Boolean(scrollHeight > clientHeight);
        const isBelowTopOfScroll = Boolean(scrollTop > 0);
        const isAtBottomOfScroll = Boolean(scrollTop + clientHeight >= scrollHeight - LOW_RES_BUFFER);
        setTopShadow(isBelowTopOfScroll);
        setBottomShadow(!isAtBottomOfScroll);
        if (canScroll && isAtBottomOfScroll && onScrolledToBottom) {
          onScrolledToBottom();
        }
      });
    }, [onScrolledToBottom]);
    useComponentDidMount(() => {
      handleScroll();
      if (hint) {
        requestAnimationFrame(() => performScrollHint(scrollArea.current));
      }
    });
    React2.useEffect(() => {
      const currentScrollArea = scrollArea.current;
      if (!currentScrollArea) {
        return;
      }
      const handleResize = debounce(handleScroll, 50, {
        trailing: true
      });
      stickyManager.current?.setContainer(currentScrollArea);
      currentScrollArea.addEventListener("scroll", handleScroll);
      globalThis.addEventListener("resize", handleResize);
      return () => {
        currentScrollArea.removeEventListener("scroll", handleScroll);
        globalThis.removeEventListener("resize", handleResize);
      };
    }, [stickyManager, handleScroll]);
    const finalClassName = classNames(className, styles$7.Scrollable, vertical && styles$7.vertical, horizontal && styles$7.horizontal, shadow2 && topShadow && styles$7.hasTopShadow, shadow2 && bottomShadow && styles$7.hasBottomShadow, scrollbarWidth && styles$7[variationName("scrollbarWidth", scrollbarWidth)], scrollbarGutter && styles$7[variationName("scrollbarGutter", scrollbarGutter.replace(" ", ""))]);
    return /* @__PURE__ */ React2.createElement(ScrollableContext.Provider, {
      value: scrollTo
    }, /* @__PURE__ */ React2.createElement(StickyManagerContext.Provider, {
      value: stickyManager.current
    }, /* @__PURE__ */ React2.createElement("div", Object.assign({
      className: finalClassName
    }, scrollable.props, rest, {
      ref: scrollArea,
      tabIndex: focusable ? 0 : void 0
    }), children)));
  });
  ScrollableComponent.displayName = "Scrollable";
  function prefersReducedMotion() {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (err) {
      return false;
    }
  }
  function performScrollHint(elem) {
    if (!elem || prefersReducedMotion()) {
      return;
    }
    const scrollableDistance = elem.scrollHeight - elem.clientHeight;
    const distanceToPeek = Math.min(MAX_SCROLL_HINT_DISTANCE, scrollableDistance) - LOW_RES_BUFFER;
    const goBackToTop = () => {
      requestAnimationFrame(() => {
        if (elem.scrollTop >= distanceToPeek) {
          elem.removeEventListener("scroll", goBackToTop);
          elem.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      });
    };
    elem.addEventListener("scroll", goBackToTop);
    elem.scrollTo({
      top: MAX_SCROLL_HINT_DISTANCE,
      behavior: "smooth"
    });
  }
  const forNode = (node) => {
    const closestElement = node.closest(scrollable.selector);
    return closestElement instanceof HTMLElement ? closestElement : document;
  };
  const Scrollable = ScrollableComponent;
  Scrollable.ScrollTo = ScrollTo;
  Scrollable.forNode = forNode;
  function KeypressListener({
    keyCode,
    handler,
    keyEvent = "keyup",
    options,
    useCapture
  }) {
    const tracked = React2.useRef({
      handler,
      keyCode
    });
    useIsomorphicLayoutEffect(() => {
      tracked.current = {
        handler,
        keyCode
      };
    }, [handler, keyCode]);
    const handleKeyEvent = React2.useCallback((event) => {
      const {
        handler: handler2,
        keyCode: keyCode2
      } = tracked.current;
      if (event.keyCode === keyCode2) {
        handler2(event);
      }
    }, []);
    React2.useEffect(() => {
      document.addEventListener(keyEvent, handleKeyEvent, useCapture || options);
      return () => {
        document.removeEventListener(keyEvent, handleKeyEvent, useCapture || options);
      };
    }, [keyEvent, handleKeyEvent, useCapture, options]);
    return null;
  }
  function wrapWithComponent(element, Component, props) {
    if (element == null) {
      return null;
    }
    return isElementOfType(element, Component) ? element : /* @__PURE__ */ React2.createElement(Component, props, element);
  }
  const isComponent = (AComponent, AnotherComponent) => AComponent === AnotherComponent;
  function isElementOfType(element, Component) {
    if (element == null || !/* @__PURE__ */ React2.isValidElement(element) || typeof element.type === "string") {
      return false;
    }
    const {
      type: defaultType
    } = element;
    const overrideType = element.props?.__type__;
    const type = overrideType || defaultType;
    const Components = Array.isArray(Component) ? Component : [Component];
    return Components.some((AComponent) => typeof type !== "string" && isComponent(AComponent, type));
  }
  function elementChildren(children, predicate = () => true) {
    return React2.Children.toArray(children).filter((child) => /* @__PURE__ */ React2.isValidElement(child) && predicate(child));
  }
  var styles$6 = {
    "Backdrop": "Polaris-Backdrop",
    "transparent": "Polaris-Backdrop--transparent",
    "belowNavigation": "Polaris-Backdrop--belowNavigation"
  };
  function useScrollLockManager() {
    const scrollLockManager = React2.useContext(ScrollLockManagerContext);
    if (!scrollLockManager) {
      throw new MissingAppProviderError("No ScrollLockManager was provided.");
    }
    return scrollLockManager;
  }
  function ScrollLock(_) {
    const scrollLockManager = useScrollLockManager();
    React2.useEffect(() => {
      scrollLockManager.registerScrollLock();
      return () => {
        scrollLockManager.unregisterScrollLock();
      };
    }, [scrollLockManager]);
    return null;
  }
  function Backdrop(props) {
    const {
      onClick,
      onTouchStart,
      belowNavigation,
      transparent,
      setClosing
    } = props;
    const className = classNames(styles$6.Backdrop, belowNavigation && styles$6.belowNavigation, transparent && styles$6.transparent);
    const handleMouseDown = () => {
      if (setClosing) {
        setClosing(true);
      }
    };
    const handleClick = () => {
      if (setClosing) {
        setClosing(false);
      }
      if (onClick) {
        onClick();
      }
    };
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(ScrollLock, null), /* @__PURE__ */ React2.createElement("div", {
      className,
      onClick: handleClick,
      onTouchStart,
      onMouseDown: handleMouseDown
    }));
  }
  const BannerContext = /* @__PURE__ */ React2.createContext(false);
  var styles$5 = {
    "Banner": "Polaris-Banner",
    "keyFocused": "Polaris-Banner--keyFocused",
    "withinContentContainer": "Polaris-Banner--withinContentContainer",
    "withinPage": "Polaris-Banner--withinPage",
    "DismissIcon": "Polaris-Banner__DismissIcon",
    "text-success-on-bg-fill": "Polaris-Banner--textSuccessOnBgFill",
    "text-success": "Polaris-Banner__text--success",
    "text-warning-on-bg-fill": "Polaris-Banner--textWarningOnBgFill",
    "text-warning": "Polaris-Banner__text--warning",
    "text-critical-on-bg-fill": "Polaris-Banner--textCriticalOnBgFill",
    "text-critical": "Polaris-Banner__text--critical",
    "text-info-on-bg-fill": "Polaris-Banner--textInfoOnBgFill",
    "text-info": "Polaris-Banner__text--info",
    "icon-secondary": "Polaris-Banner__icon--secondary"
  };
  const bannerAttributes = {
    success: {
      withinPage: {
        background: "bg-fill-success",
        text: "text-success-on-bg-fill",
        icon: "text-success-on-bg-fill"
      },
      withinContentContainer: {
        background: "bg-surface-success",
        text: "text-success",
        icon: "text-success"
      },
      icon: SvgCheckIcon
    },
    warning: {
      withinPage: {
        background: "bg-fill-warning",
        text: "text-warning-on-bg-fill",
        icon: "text-warning-on-bg-fill"
      },
      withinContentContainer: {
        background: "bg-surface-warning",
        text: "text-warning",
        icon: "text-warning"
      },
      icon: SvgAlertTriangleIcon
    },
    critical: {
      withinPage: {
        background: "bg-fill-critical",
        text: "text-critical-on-bg-fill",
        icon: "text-critical-on-bg-fill"
      },
      withinContentContainer: {
        background: "bg-surface-critical",
        text: "text-critical",
        icon: "text-critical"
      },
      icon: SvgAlertDiamondIcon
    },
    info: {
      withinPage: {
        background: "bg-fill-info",
        text: "text-info-on-bg-fill",
        icon: "text-info-on-bg-fill"
      },
      withinContentContainer: {
        background: "bg-surface-info",
        text: "text-info",
        icon: "text-info"
      },
      icon: SvgInfoIcon
    }
  };
  function useBannerFocus(bannerRef) {
    const wrapperRef = React2.useRef(null);
    const [shouldShowFocus, setShouldShowFocus] = React2.useState(false);
    React2.useImperativeHandle(bannerRef, () => ({
      focus: () => {
        wrapperRef.current?.focus();
        setShouldShowFocus(true);
      }
    }), []);
    const handleKeyUp = (event) => {
      if (event.target === wrapperRef.current) {
        setShouldShowFocus(true);
      }
    };
    const handleBlur = () => setShouldShowFocus(false);
    const handleMouseUp = (event) => {
      event.currentTarget.blur();
      setShouldShowFocus(false);
    };
    return {
      wrapperRef,
      handleKeyUp,
      handleBlur,
      handleMouseUp,
      shouldShowFocus
    };
  }
  var styles$4 = {
    "ButtonGroup": "Polaris-ButtonGroup",
    "Item": "Polaris-ButtonGroup__Item",
    "Item-plain": "Polaris-ButtonGroup__Item--plain",
    "variantSegmented": "Polaris-ButtonGroup--variantSegmented",
    "Item-focused": "Polaris-ButtonGroup__Item--focused",
    "fullWidth": "Polaris-ButtonGroup--fullWidth",
    "extraTight": "Polaris-ButtonGroup--extraTight",
    "tight": "Polaris-ButtonGroup--tight",
    "loose": "Polaris-ButtonGroup--loose",
    "noWrap": "Polaris-ButtonGroup--noWrap"
  };
  function Item({
    button
  }) {
    const {
      value: focused,
      setTrue: forceTrueFocused,
      setFalse: forceFalseFocused
    } = useToggle(false);
    const className = classNames(styles$4.Item, focused && styles$4["Item-focused"], button.props.variant === "plain" && styles$4["Item-plain"]);
    return /* @__PURE__ */ React2.createElement("div", {
      className,
      onFocus: forceTrueFocused,
      onBlur: forceFalseFocused
    }, button);
  }
  function ButtonGroup({
    children,
    gap,
    variant,
    fullWidth,
    connectedTop,
    noWrap
  }) {
    const className = classNames(styles$4.ButtonGroup, gap && styles$4[gap], variant && styles$4[variationName("variant", variant)], fullWidth && styles$4.fullWidth, noWrap && styles$4.noWrap);
    const contents = elementChildren(children).map((child, index) => /* @__PURE__ */ React2.createElement(Item, {
      button: child,
      key: index
    }));
    return /* @__PURE__ */ React2.createElement("div", {
      className,
      "data-buttongroup-variant": variant,
      "data-buttongroup-connected-top": connectedTop,
      "data-buttongroup-full-width": fullWidth,
      "data-buttongroup-no-wrap": noWrap
    }, contents);
  }
  const Banner = /* @__PURE__ */ React2.forwardRef(function Banner2(props, bannerRef) {
    const {
      tone,
      stopAnnouncements
    } = props;
    const withinContentContainer = React2.useContext(WithinContentContext);
    const {
      wrapperRef,
      handleKeyUp,
      handleBlur,
      handleMouseUp,
      shouldShowFocus
    } = useBannerFocus(bannerRef);
    const className = classNames(styles$5.Banner, shouldShowFocus && styles$5.keyFocused, withinContentContainer ? styles$5.withinContentContainer : styles$5.withinPage);
    return /* @__PURE__ */ React2.createElement(BannerContext.Provider, {
      value: true
    }, /* @__PURE__ */ React2.createElement("div", {
      className,
      tabIndex: 0,
      ref: wrapperRef,
      role: tone === "warning" || tone === "critical" ? "alert" : "status",
      "aria-live": stopAnnouncements ? "off" : "polite",
      onMouseUp: handleMouseUp,
      onKeyUp: handleKeyUp,
      onBlur: handleBlur
    }, /* @__PURE__ */ React2.createElement(BannerLayout, props)));
  });
  function BannerLayout({
    tone = "info",
    icon,
    hideIcon,
    onDismiss,
    action,
    secondaryAction,
    title,
    children
  }) {
    const i18n = useI18n();
    const withinContentContainer = React2.useContext(WithinContentContext);
    const isInlineIconBanner = !title && !withinContentContainer;
    const bannerTone = Object.keys(bannerAttributes).includes(tone) ? tone : "info";
    const bannerColors = bannerAttributes[bannerTone][withinContentContainer ? "withinContentContainer" : "withinPage"];
    const sharedBannerProps = {
      backgroundColor: bannerColors.background,
      textColor: bannerColors.text,
      bannerTitle: title ? /* @__PURE__ */ React2.createElement(Text, {
        as: "h2",
        variant: "headingSm",
        breakWord: true
      }, title) : null,
      bannerIcon: hideIcon ? null : /* @__PURE__ */ React2.createElement("span", {
        className: styles$5[bannerColors.icon]
      }, /* @__PURE__ */ React2.createElement(Icon, {
        source: icon ?? bannerAttributes[bannerTone].icon
      })),
      actionButtons: action || secondaryAction ? /* @__PURE__ */ React2.createElement(ButtonGroup, null, action && /* @__PURE__ */ React2.createElement(Button, Object.assign({
        onClick: action.onAction
      }, action), action.content), secondaryAction && /* @__PURE__ */ React2.createElement(Button, Object.assign({
        onClick: secondaryAction.onAction
      }, secondaryAction), secondaryAction.content)) : null,
      dismissButton: onDismiss ? /* @__PURE__ */ React2.createElement(Button, {
        variant: "tertiary",
        icon: /* @__PURE__ */ React2.createElement("span", {
          className: styles$5[isInlineIconBanner ? "icon-secondary" : bannerColors.icon]
        }, /* @__PURE__ */ React2.createElement(Icon, {
          source: SvgXIcon
        })),
        onClick: onDismiss,
        accessibilityLabel: i18n.translate("Polaris.Banner.dismissButton")
      }) : null
    };
    const childrenMarkup = children ? /* @__PURE__ */ React2.createElement(Text, {
      as: "span",
      variant: "bodyMd"
    }, children) : null;
    if (withinContentContainer) {
      return /* @__PURE__ */ React2.createElement(WithinContentContainerBanner, sharedBannerProps, childrenMarkup);
    }
    if (isInlineIconBanner) {
      return /* @__PURE__ */ React2.createElement(InlineIconBanner, sharedBannerProps, childrenMarkup);
    }
    return /* @__PURE__ */ React2.createElement(DefaultBanner, sharedBannerProps, childrenMarkup);
  }
  function DefaultBanner({
    backgroundColor,
    textColor,
    bannerTitle,
    bannerIcon,
    actionButtons,
    dismissButton,
    children
  }) {
    const {
      smUp
    } = useBreakpoints();
    const hasContent = children || actionButtons;
    return /* @__PURE__ */ React2.createElement(Box, {
      width: "100%"
    }, /* @__PURE__ */ React2.createElement(BlockStack, {
      align: "space-between"
    }, /* @__PURE__ */ React2.createElement(Box, {
      background: backgroundColor,
      color: textColor,
      borderStartStartRadius: smUp ? "300" : void 0,
      borderStartEndRadius: smUp ? "300" : void 0,
      borderEndStartRadius: !hasContent && smUp ? "300" : void 0,
      borderEndEndRadius: !hasContent && smUp ? "300" : void 0,
      padding: "300"
    }, /* @__PURE__ */ React2.createElement(InlineStack, {
      align: "space-between",
      blockAlign: "center",
      gap: "200",
      wrap: false
    }, /* @__PURE__ */ React2.createElement(InlineStack, {
      gap: "100",
      wrap: false
    }, bannerIcon, bannerTitle), dismissButton)), hasContent && /* @__PURE__ */ React2.createElement(Box, {
      padding: {
        xs: "300",
        md: "400"
      },
      paddingBlockStart: "300"
    }, /* @__PURE__ */ React2.createElement(BlockStack, {
      gap: "200"
    }, /* @__PURE__ */ React2.createElement("div", null, children), actionButtons))));
  }
  function InlineIconBanner({
    backgroundColor,
    bannerIcon,
    actionButtons,
    dismissButton,
    children
  }) {
    const [blockAlign, setBlockAlign] = React2.useState("center");
    const contentNode = React2.useRef(null);
    const iconNode = React2.useRef(null);
    const dismissIconNode = React2.useRef(null);
    const handleResize = React2.useCallback(() => {
      const contentHeight = contentNode.current?.offsetHeight;
      const iconBoxHeight = iconNode.current?.offsetHeight || dismissIconNode.current?.offsetHeight;
      if (!contentHeight || !iconBoxHeight) return;
      contentHeight > iconBoxHeight ? setBlockAlign("start") : setBlockAlign("center");
    }, []);
    React2.useEffect(() => handleResize(), [handleResize]);
    useEventListener("resize", handleResize);
    return /* @__PURE__ */ React2.createElement(Box, {
      width: "100%",
      padding: "300",
      borderRadius: "300"
    }, /* @__PURE__ */ React2.createElement(InlineStack, {
      align: "space-between",
      blockAlign,
      wrap: false
    }, /* @__PURE__ */ React2.createElement(Box, {
      width: "100%"
    }, /* @__PURE__ */ React2.createElement(InlineStack, {
      gap: "200",
      wrap: false,
      blockAlign
    }, bannerIcon ? /* @__PURE__ */ React2.createElement("div", {
      ref: iconNode
    }, /* @__PURE__ */ React2.createElement(Box, {
      background: backgroundColor,
      borderRadius: "200",
      padding: "100"
    }, bannerIcon)) : null, /* @__PURE__ */ React2.createElement(Box, {
      ref: contentNode,
      width: "100%"
    }, /* @__PURE__ */ React2.createElement(BlockStack, {
      gap: "200"
    }, /* @__PURE__ */ React2.createElement("div", null, children), actionButtons)))), /* @__PURE__ */ React2.createElement("div", {
      ref: dismissIconNode,
      className: styles$5.DismissIcon
    }, dismissButton)));
  }
  function WithinContentContainerBanner({
    backgroundColor,
    textColor,
    bannerTitle,
    bannerIcon,
    actionButtons,
    dismissButton,
    children
  }) {
    return /* @__PURE__ */ React2.createElement(Box, {
      width: "100%",
      background: backgroundColor,
      padding: "200",
      borderRadius: "200",
      color: textColor
    }, /* @__PURE__ */ React2.createElement(InlineStack, {
      align: "space-between",
      blockAlign: "start",
      wrap: false,
      gap: "200"
    }, /* @__PURE__ */ React2.createElement(InlineStack, {
      gap: "150",
      wrap: false
    }, bannerIcon, /* @__PURE__ */ React2.createElement(Box, {
      width: "100%"
    }, /* @__PURE__ */ React2.createElement(BlockStack, {
      gap: "200"
    }, /* @__PURE__ */ React2.createElement(BlockStack, {
      gap: "050"
    }, bannerTitle, /* @__PURE__ */ React2.createElement("div", null, children)), actionButtons))), dismissButton));
  }
  var styles$3 = {
    "InlineGrid": "Polaris-InlineGrid"
  };
  function InlineGrid({
    children,
    columns,
    gap,
    alignItems
  }) {
    const style = {
      ...getResponsiveValue("inline-grid", "grid-template-columns", formatInlineGrid(columns)),
      ...getResponsiveProps("inline-grid", "gap", "space", gap),
      "--pc-inline-grid-align-items": alignItems
    };
    return /* @__PURE__ */ React2.createElement("div", {
      className: styles$3.InlineGrid,
      style: sanitizeCustomProperties(style)
    }, children);
  }
  function formatInlineGrid(columns) {
    if (typeof columns === "object" && columns !== null && !Array.isArray(columns)) {
      return Object.fromEntries(Object.entries(columns).map(([breakpointAlias, breakpointInlineGrid]) => [breakpointAlias, getColumnValue(breakpointInlineGrid)]));
    }
    return getColumnValue(columns);
  }
  function getColumnValue(columns) {
    if (!columns) return void 0;
    if (typeof columns === "number" || !isNaN(Number(columns))) {
      return `repeat(${Number(columns)}, minmax(0, 1fr))`;
    }
    if (typeof columns === "string") return columns;
    return columns.map((column) => {
      switch (column) {
        case "oneThird":
          return "minmax(0, 1fr)";
        case "oneHalf":
          return "minmax(0, 1fr)";
        case "twoThirds":
          return "minmax(0, 2fr)";
      }
    }).join(" ");
  }
  const FrameContext = /* @__PURE__ */ React2.createContext(void 0);
  const Focus = /* @__PURE__ */ React2.memo(function Focus2({
    children,
    disabled,
    root
  }) {
    React2.useEffect(() => {
      if (disabled || !root) {
        return;
      }
      const node = isRef$1(root) ? root.current : root;
      if (!node || node.querySelector("[autofocus]")) {
        return;
      }
      focusFirstFocusableNode(node, false);
    }, [disabled, root]);
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, children);
  });
  function isRef$1(ref) {
    return ref.current !== void 0;
  }
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
  }
  function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }
  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);
    return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }
  function addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
    else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
  }
  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
  }
  function removeClass$1(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else if (typeof element.className === "string") {
      element.className = replaceClassName(element.className, className);
    } else {
      element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
    }
  }
  const config = {
    disabled: false
  };
  const TransitionGroupContext = React2.createContext(null);
  var forceReflow = function forceReflow2(node) {
    return node.scrollTop;
  };
  var UNMOUNTED = "unmounted";
  var EXITED = "exited";
  var ENTERING = "entering";
  var ENTERED = "entered";
  var EXITING = "exiting";
  var Transition = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(Transition2, _React$Component);
    function Transition2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context;
      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;
      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }
      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }
    Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;
      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }
      return null;
    };
    var _proto = Transition2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;
      if (prevProps !== this.props) {
        var status = this.state.status;
        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }
      this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
      var timeout2 = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout2;
      if (timeout2 != null && typeof timeout2 !== "number") {
        exit = timeout2.exit;
        enter = timeout2.enter;
        appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
      }
      return {
        exit,
        enter,
        appear
      };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }
      if (nextStatus !== null) {
        this.cancelNextCallback();
        if (nextStatus === ENTERING) {
          if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM2.findDOMNode(this);
            if (node) forceReflow(node);
          }
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };
    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;
      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;
      var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM2.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }
      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function() {
        _this2.props.onEntering(maybeNode, maybeAppearing);
        _this2.onTransitionEnd(enterTimeout, function() {
          _this2.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };
    _proto.performExit = function performExit() {
      var _this3 = this;
      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? void 0 : ReactDOM2.findDOMNode(this);
      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
        return;
      }
      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function() {
        _this3.props.onExiting(maybeNode);
        _this3.onTransitionEnd(timeouts.exit, function() {
          _this3.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;
      var active = true;
      this.nextCallback = function(event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };
      this.nextCallback.cancel = function() {
        active = false;
      };
      return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM2.findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
        this.props.addEndListener(maybeNode, maybeNextCallback);
      }
      if (timeout2 != null) {
        setTimeout(this.nextCallback, timeout2);
      }
    };
    _proto.render = function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }
      var _this$props = this.props, children = _this$props.children;
      _this$props.in;
      _this$props.mountOnEnter;
      _this$props.unmountOnExit;
      _this$props.appear;
      _this$props.enter;
      _this$props.exit;
      _this$props.timeout;
      _this$props.addEndListener;
      _this$props.onEnter;
      _this$props.onEntering;
      _this$props.onEntered;
      _this$props.onExit;
      _this$props.onExiting;
      _this$props.onExited;
      _this$props.nodeRef;
      var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
      return (
        // allows for nested Transitions
        /* @__PURE__ */ React2.createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === "function" ? children(status, childProps) : React2.cloneElement(React2.Children.only(children), childProps))
      );
    };
    return Transition2;
  }(React2.Component);
  Transition.contextType = TransitionGroupContext;
  Transition.propTypes = {};
  function noop() {
  }
  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;
  var _addClass = function addClass$1(node, classes) {
    return node && classes && classes.split(" ").forEach(function(c) {
      return addClass(node, c);
    });
  };
  var removeClass = function removeClass2(node, classes) {
    return node && classes && classes.split(" ").forEach(function(c) {
      return removeClass$1(node, c);
    });
  };
  var CSSTransition = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(CSSTransition2, _React$Component);
    function CSSTransition2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.appliedClasses = {
        appear: {},
        enter: {},
        exit: {}
      };
      _this.onEnter = function(maybeNode, maybeAppearing) {
        var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
        _this.removeClasses(node, "exit");
        _this.addClass(node, appearing ? "appear" : "enter", "base");
        if (_this.props.onEnter) {
          _this.props.onEnter(maybeNode, maybeAppearing);
        }
      };
      _this.onEntering = function(maybeNode, maybeAppearing) {
        var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
        var type = appearing ? "appear" : "enter";
        _this.addClass(node, type, "active");
        if (_this.props.onEntering) {
          _this.props.onEntering(maybeNode, maybeAppearing);
        }
      };
      _this.onEntered = function(maybeNode, maybeAppearing) {
        var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
        var type = appearing ? "appear" : "enter";
        _this.removeClasses(node, type);
        _this.addClass(node, type, "done");
        if (_this.props.onEntered) {
          _this.props.onEntered(maybeNode, maybeAppearing);
        }
      };
      _this.onExit = function(maybeNode) {
        var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
        _this.removeClasses(node, "appear");
        _this.removeClasses(node, "enter");
        _this.addClass(node, "exit", "base");
        if (_this.props.onExit) {
          _this.props.onExit(maybeNode);
        }
      };
      _this.onExiting = function(maybeNode) {
        var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
        _this.addClass(node, "exit", "active");
        if (_this.props.onExiting) {
          _this.props.onExiting(maybeNode);
        }
      };
      _this.onExited = function(maybeNode) {
        var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
        _this.removeClasses(node, "exit");
        _this.addClass(node, "exit", "done");
        if (_this.props.onExited) {
          _this.props.onExited(maybeNode);
        }
      };
      _this.resolveArguments = function(maybeNode, maybeAppearing) {
        return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
      };
      _this.getClassNames = function(type) {
        var classNames2 = _this.props.classNames;
        var isStringClassNames = typeof classNames2 === "string";
        var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
        var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
        var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
        var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
        return {
          baseClassName,
          activeClassName,
          doneClassName
        };
      };
      return _this;
    }
    var _proto = CSSTransition2.prototype;
    _proto.addClass = function addClass2(node, type, phase) {
      var className = this.getClassNames(type)[phase + "ClassName"];
      var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
      if (type === "appear" && phase === "done" && doneClassName) {
        className += " " + doneClassName;
      }
      if (phase === "active") {
        if (node) forceReflow(node);
      }
      if (className) {
        this.appliedClasses[type][phase] = className;
        _addClass(node, className);
      }
    };
    _proto.removeClasses = function removeClasses(node, type) {
      var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
      this.appliedClasses[type] = {};
      if (baseClassName) {
        removeClass(node, baseClassName);
      }
      if (activeClassName) {
        removeClass(node, activeClassName);
      }
      if (doneClassName) {
        removeClass(node, doneClassName);
      }
    };
    _proto.render = function render() {
      var _this$props = this.props;
      _this$props.classNames;
      var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
      return /* @__PURE__ */ React2.createElement(Transition, _extends({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }));
    };
    return CSSTransition2;
  }(React2.Component);
  CSSTransition.defaultProps = {
    classNames: ""
  };
  CSSTransition.propTypes = {};
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function getChildMapping(children, mapFn) {
    var mapper = function mapper2(child) {
      return mapFn && React2.isValidElement(child) ? mapFn(child) : child;
    };
    var result = /* @__PURE__ */ Object.create(null);
    if (children) React2.Children.map(children, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
    return result;
  }
  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    }
    var nextKeysPending = /* @__PURE__ */ Object.create(null);
    var pendingKeys = [];
    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }
    var i;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
  }
  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }
  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
      return React2.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, "appear", props),
        enter: getProp(child, "enter", props),
        exit: getProp(child, "exit", props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
      var child = children[key];
      if (!React2.isValidElement(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = React2.isValidElement(prevChild) && !prevChild.props.in;
      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = React2.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        children[key] = React2.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && React2.isValidElement(prevChild)) {
        children[key] = React2.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, "exit", nextProps),
          enter: getProp(child, "enter", nextProps)
        });
      }
    });
    return children;
  }
  var values = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
      return obj[k];
    });
  };
  var defaultProps = {
    component: "div",
    childFactory: function childFactory(child) {
      return child;
    }
  };
  var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(TransitionGroup2, _React$Component);
    function TransitionGroup2(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited,
        firstRender: true
      };
      return _this;
    }
    var _proto = TransitionGroup2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };
    TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };
    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;
      if (child.props.onExited) {
        child.props.onExited(node);
      }
      if (this.mounted) {
        this.setState(function(state) {
          var children = _extends({}, state.children);
          delete children[child.key];
          return {
            children
          };
        });
      }
    };
    _proto.render = function render() {
      var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory2);
      delete props.appear;
      delete props.enter;
      delete props.exit;
      if (Component === null) {
        return /* @__PURE__ */ React2.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }
      return /* @__PURE__ */ React2.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, /* @__PURE__ */ React2.createElement(Component, props, children));
    };
    return TransitionGroup2;
  }(React2.Component);
  TransitionGroup.propTypes = {};
  TransitionGroup.defaultProps = defaultProps;
  var styles$2 = {
    "Body": "Polaris-Modal__Body",
    "NoScrollBody": "Polaris-Modal__NoScrollBody",
    "IFrame": "Polaris-Modal__IFrame"
  };
  var styles$1 = {
    "Section": "Polaris-Modal-Section",
    "titleHidden": "Polaris-Modal-Section--titleHidden"
  };
  function Section({
    children,
    flush = false,
    subdued = false,
    titleHidden = false
  }) {
    const className = classNames(styles$1.Section, titleHidden && styles$1.titleHidden);
    return /* @__PURE__ */ React2.createElement("div", {
      className
    }, /* @__PURE__ */ React2.createElement(Box, Object.assign({
      as: "section",
      padding: flush ? "0" : "400"
    }, titleHidden && {
      paddingInlineEnd: "0"
    }, subdued && {
      background: "bg-surface-tertiary"
    }), children));
  }
  var styles = {
    "Container": "Polaris-Modal-Dialog__Container",
    "Dialog": "Polaris-Modal-Dialog",
    "Modal": "Polaris-Modal-Dialog__Modal",
    "limitHeight": "Polaris-Modal-Dialog--limitHeight",
    "sizeSmall": "Polaris-Modal-Dialog--sizeSmall",
    "sizeLarge": "Polaris-Modal-Dialog--sizeLarge",
    "sizeFullScreen": "Polaris-Modal-Dialog--sizeFullScreen",
    "animateFadeUp": "Polaris-Modal-Dialog--animateFadeUp",
    "entering": "Polaris-Modal-Dialog--entering",
    "exiting": "Polaris-Modal-Dialog--exiting",
    "exited": "Polaris-Modal-Dialog--exited",
    "entered": "Polaris-Modal-Dialog--entered"
  };
  function useFocusManager({
    trapping
  }) {
    const focusManager = React2.useContext(FocusManagerContext);
    const id = React2.useId();
    if (!focusManager) {
      throw new MissingAppProviderError("No FocusManager was provided.");
    }
    const {
      trapFocusList,
      add: addFocusItem,
      remove: removeFocusItem
    } = focusManager;
    const canSafelyFocus = trapFocusList[0] === id;
    const value = React2.useMemo(() => ({
      canSafelyFocus
    }), [canSafelyFocus]);
    React2.useEffect(() => {
      if (!trapping) return;
      addFocusItem(id);
      return () => {
        removeFocusItem(id);
      };
    }, [addFocusItem, id, removeFocusItem, trapping]);
    return value;
  }
  function TrapFocus({
    trapping = true,
    children
  }) {
    const {
      canSafelyFocus
    } = useFocusManager({
      trapping
    });
    const focusTrapWrapper = React2.useRef(null);
    const [disableFocus, setDisableFocus] = React2.useState(true);
    React2.useEffect(() => {
      const disable = canSafelyFocus && !(focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement)) ? !trapping : true;
      setDisableFocus(disable);
    }, [canSafelyFocus, trapping]);
    const handleFocusIn = (event) => {
      const containerContentsHaveFocus = focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement);
      if (trapping === false || !focusTrapWrapper.current || containerContentsHaveFocus || event.target instanceof Element && event.target.matches(`${portal.selector} *`)) {
        return;
      }
      if (canSafelyFocus && event.target instanceof HTMLElement && focusTrapWrapper.current !== event.target && !focusTrapWrapper.current.contains(event.target)) {
        focusFirstFocusableNode(focusTrapWrapper.current);
      }
    };
    const handleTab = (event) => {
      if (trapping === false || !focusTrapWrapper.current) {
        return;
      }
      const firstFocusableNode = findFirstKeyboardFocusableNode(focusTrapWrapper.current);
      const lastFocusableNode = findLastKeyboardFocusableNode(focusTrapWrapper.current);
      if (event.target === lastFocusableNode && !event.shiftKey) {
        event.preventDefault();
        focusFirstKeyboardFocusableNode(focusTrapWrapper.current);
      }
      if (event.target === firstFocusableNode && event.shiftKey) {
        event.preventDefault();
        focusLastKeyboardFocusableNode(focusTrapWrapper.current);
      }
    };
    return /* @__PURE__ */ React2.createElement(Focus, {
      disabled: disableFocus,
      root: focusTrapWrapper.current
    }, /* @__PURE__ */ React2.createElement("div", {
      ref: focusTrapWrapper
    }, /* @__PURE__ */ React2.createElement(EventListener, {
      event: "focusin",
      handler: handleFocusIn
    }), /* @__PURE__ */ React2.createElement(KeypressListener, {
      keyCode: Key.Tab,
      keyEvent: "keydown",
      handler: handleTab
    }), children));
  }
  function Dialog({
    instant,
    labelledBy,
    children,
    limitHeight,
    size: size2,
    onClose,
    onExited,
    onEntered,
    setClosing,
    hasToasts,
    ...props
  }) {
    const theme = useTheme();
    const containerNode = React2.useRef(null);
    const frameContext = React2.useContext(FrameContext);
    let toastMessages;
    if (frameContext) {
      toastMessages = frameContext.toastMessages;
    }
    const classes = classNames(styles.Modal, size2 && styles[variationName("size", size2)], limitHeight && styles.limitHeight);
    const TransitionChild = instant ? Transition : FadeUp;
    React2.useEffect(() => {
      containerNode.current && !containerNode.current.contains(document.activeElement) && focusFirstFocusableNode(containerNode.current);
    }, []);
    const handleKeyDown = () => {
      if (setClosing) {
        setClosing(true);
      }
    };
    const handleKeyUp = () => {
      if (setClosing) {
        setClosing(false);
      }
      onClose();
    };
    const ariaLiveAnnouncements = /* @__PURE__ */ React2.createElement("div", {
      "aria-live": "assertive"
    }, toastMessages ? toastMessages.map((toastMessage) => /* @__PURE__ */ React2.createElement(Text, {
      visuallyHidden: true,
      as: "p",
      key: toastMessage.id
    }, toastMessage.content)) : null);
    return /* @__PURE__ */ React2.createElement(TransitionChild, Object.assign({}, props, {
      nodeRef: containerNode,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: parseInt(theme.motion["motion-duration-200"], 10),
      onEntered,
      onExited
    }), /* @__PURE__ */ React2.createElement("div", {
      className: styles.Container,
      "data-polaris-layer": true,
      "data-polaris-overlay": true,
      ref: containerNode
    }, /* @__PURE__ */ React2.createElement(TrapFocus, null, /* @__PURE__ */ React2.createElement("div", {
      role: "dialog",
      "aria-modal": true,
      "aria-label": labelledBy,
      "aria-labelledby": labelledBy,
      tabIndex: -1,
      className: styles.Dialog
    }, /* @__PURE__ */ React2.createElement("div", {
      className: classes
    }, /* @__PURE__ */ React2.createElement(KeypressListener, {
      keyCode: Key.Escape,
      keyEvent: "keydown",
      handler: handleKeyDown
    }), /* @__PURE__ */ React2.createElement(KeypressListener, {
      keyCode: Key.Escape,
      handler: handleKeyUp
    }), children), ariaLiveAnnouncements))));
  }
  const fadeUpClasses = {
    appear: classNames(styles.animateFadeUp, styles.entering),
    appearActive: classNames(styles.animateFadeUp, styles.entered),
    enter: classNames(styles.animateFadeUp, styles.entering),
    enterActive: classNames(styles.animateFadeUp, styles.entered),
    exit: classNames(styles.animateFadeUp, styles.exiting),
    exitActive: classNames(styles.animateFadeUp, styles.exited)
  };
  function FadeUp({
    children,
    ...props
  }) {
    return /* @__PURE__ */ React2.createElement(CSSTransition, Object.assign({}, props, {
      classNames: fadeUpClasses
    }), children);
  }
  function CloseButton({
    pressed,
    onClick
  }) {
    const i18n = useI18n();
    return /* @__PURE__ */ React2.createElement(Button, {
      variant: "tertiary",
      pressed,
      icon: SvgXIcon,
      onClick,
      accessibilityLabel: i18n.translate("Polaris.Common.close")
    });
  }
  function Header({
    id,
    children,
    closing,
    titleHidden,
    onClose
  }) {
    const headerPaddingInline = "400";
    const headerPaddingBlock = "400";
    if (titleHidden || !children) {
      return /* @__PURE__ */ React2.createElement(Box, {
        position: "absolute",
        insetInlineEnd: headerPaddingInline,
        insetBlockStart: headerPaddingBlock,
        zIndex: "1"
      }, /* @__PURE__ */ React2.createElement(CloseButton, {
        onClick: onClose
      }));
    }
    return /* @__PURE__ */ React2.createElement(Box, {
      paddingBlockStart: "400",
      paddingBlockEnd: "400",
      paddingInlineStart: headerPaddingInline,
      paddingInlineEnd: headerPaddingInline,
      borderBlockEndWidth: "025",
      borderColor: "border",
      background: "bg-surface-tertiary"
    }, /* @__PURE__ */ React2.createElement(InlineGrid, {
      columns: {
        xs: "1fr auto"
      },
      gap: "400"
    }, /* @__PURE__ */ React2.createElement(InlineStack, {
      gap: "400",
      blockAlign: "center"
    }, /* @__PURE__ */ React2.createElement(Text, {
      id,
      as: "h2",
      variant: "headingMd",
      breakWord: true
    }, children)), /* @__PURE__ */ React2.createElement(CloseButton, {
      pressed: closing,
      onClick: onClose
    })));
  }
  function Footer({
    primaryAction,
    secondaryActions,
    children
  }) {
    const primaryActionButton = primaryAction && buttonsFrom(primaryAction, {
      variant: "primary"
    }) || null;
    const secondaryActionButtons = secondaryActions && buttonsFrom(secondaryActions) || null;
    const actions = primaryActionButton || secondaryActionButtons ? /* @__PURE__ */ React2.createElement(InlineStack, {
      gap: "200"
    }, secondaryActionButtons, primaryActionButton) : null;
    return /* @__PURE__ */ React2.createElement(InlineStack, {
      gap: "400",
      blockAlign: "center"
    }, /* @__PURE__ */ React2.createElement(Box, {
      borderColor: "border",
      borderBlockStartWidth: "025",
      padding: "400",
      width: "100%"
    }, /* @__PURE__ */ React2.createElement(InlineStack, {
      gap: "400",
      blockAlign: "center",
      align: "space-between"
    }, /* @__PURE__ */ React2.createElement(Box, null, children), actions)));
  }
  const IFRAME_LOADING_HEIGHT = 200;
  const DEFAULT_IFRAME_CONTENT_HEIGHT = 400;
  const Modal = function Modal2({
    children,
    title,
    titleHidden = false,
    src,
    iFrameName,
    open,
    instant,
    sectioned,
    loading,
    size: size2,
    limitHeight,
    footer,
    primaryAction,
    secondaryActions,
    onScrolledToBottom,
    activator,
    activatorWrapper = "div",
    onClose,
    onIFrameLoad,
    onTransitionEnd,
    noScroll
  }) {
    const [iframeHeight, setIframeHeight] = React2.useState(IFRAME_LOADING_HEIGHT);
    const [closing, setClosing] = React2.useState(false);
    const headerId = React2.useId();
    const activatorRef = React2.useRef(null);
    const i18n = useI18n();
    const iframeTitle = i18n.translate("Polaris.Modal.iFrameTitle");
    let dialog;
    let backdrop;
    const handleEntered = React2.useCallback(() => {
      if (onTransitionEnd) {
        onTransitionEnd();
      }
    }, [onTransitionEnd]);
    const handleExited = React2.useCallback(() => {
      setIframeHeight(IFRAME_LOADING_HEIGHT);
      const activatorElement = activator && isRef(activator) ? activator && activator.current : activatorRef.current;
      if (activatorElement) {
        requestAnimationFrame(() => focusFirstFocusableNode(activatorElement));
      }
    }, [activator]);
    const handleIFrameLoad = React2.useCallback((evt) => {
      const iframe = evt.target;
      if (iframe && iframe.contentWindow) {
        try {
          setIframeHeight(iframe.contentWindow.document.body.scrollHeight);
        } catch (_error) {
          setIframeHeight(DEFAULT_IFRAME_CONTENT_HEIGHT);
        }
      }
      if (onIFrameLoad != null) {
        onIFrameLoad(evt);
      }
    }, [onIFrameLoad]);
    if (open) {
      const footerMarkup = !footer && !primaryAction && !secondaryActions ? null : /* @__PURE__ */ React2.createElement(Footer, {
        primaryAction,
        secondaryActions
      }, footer);
      const content = sectioned ? wrapWithComponent(children, Section, {
        titleHidden
      }) : children;
      const body = loading ? /* @__PURE__ */ React2.createElement(Box, {
        padding: "400"
      }, /* @__PURE__ */ React2.createElement(InlineStack, {
        gap: "400",
        align: "center",
        blockAlign: "center"
      }, /* @__PURE__ */ React2.createElement(Spinner, null))) : content;
      const scrollContainerMarkup = noScroll ? /* @__PURE__ */ React2.createElement("div", {
        className: styles$2.NoScrollBody
      }, /* @__PURE__ */ React2.createElement(Box, {
        width: "100%",
        overflowX: "hidden",
        overflowY: "hidden"
      }, body)) : /* @__PURE__ */ React2.createElement(Scrollable, {
        shadow: true,
        className: styles$2.Body,
        onScrolledToBottom
      }, body);
      const bodyMarkup = src ? /* @__PURE__ */ React2.createElement("iframe", {
        name: iFrameName,
        title: iframeTitle,
        src,
        className: styles$2.IFrame,
        onLoad: handleIFrameLoad,
        style: {
          height: `${iframeHeight}px`
        }
      }) : scrollContainerMarkup;
      dialog = /* @__PURE__ */ React2.createElement(Dialog, {
        instant,
        labelledBy: headerId,
        onClose,
        onEntered: handleEntered,
        onExited: handleExited,
        size: size2,
        limitHeight,
        setClosing
      }, /* @__PURE__ */ React2.createElement(Header, {
        titleHidden,
        id: headerId,
        closing,
        onClose
      }, title), bodyMarkup, footerMarkup);
      backdrop = /* @__PURE__ */ React2.createElement(Backdrop, {
        setClosing,
        onClick: onClose
      });
    }
    const animated = !instant;
    const activatorMarkup = activator && !isRef(activator) ? /* @__PURE__ */ React2.createElement(Box, {
      ref: activatorRef,
      as: activatorWrapper
    }, activator) : null;
    return /* @__PURE__ */ React2.createElement(WithinContentContext.Provider, {
      value: true
    }, activatorMarkup, /* @__PURE__ */ React2.createElement(Portal, {
      idPrefix: "modal"
    }, /* @__PURE__ */ React2.createElement(TransitionGroup, {
      appear: animated,
      enter: animated,
      exit: animated
    }, dialog), backdrop));
  };
  function isRef(ref) {
    return Object.prototype.hasOwnProperty.call(ref, "current");
  }
  Modal.Section = Section;
  const VoiceChatBubble = () => {
    const [isListening, setIsListening] = React2.useState(false);
    const [showModal, setShowModal] = React2.useState(false);
    const [errorMessage, setErrorMessage] = React2.useState("");
    const [recognition, setRecognition] = React2.useState(null);
    const [audioStream, setAudioStream] = React2.useState(null);
    React2.useEffect(() => {
      console.log("[DEBUG] Initializing voice chat bubble...");
      if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
        console.error("[ERROR] Speech recognition not supported in this browser");
        return;
      }
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = "en-US";
      recognitionInstance.maxAlternatives = 1;
      recognitionInstance.onstart = () => {
        console.log("[DEBUG] Voice recognition started");
        setIsListening(true);
      };
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("[DEBUG] Voice recognized:", transcript);
        processVoiceInput(transcript);
      };
      recognitionInstance.onerror = (event) => {
        console.error("[DEBUG] Speech recognition error:", event.error);
        handleRecognitionError(event.error);
      };
      recognitionInstance.onend = () => {
        console.log("[DEBUG] Voice recognition ended");
        setIsListening(false);
      };
      setRecognition(recognitionInstance);
    }, []);
    const startListening = React2.useCallback(async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        });
        setAudioStream(stream);
        if (recognition) {
          recognition.start();
        }
      } catch (error) {
        console.error("[DEBUG] Microphone access error:", error);
        handleRecognitionError("audio-capture");
      }
    }, [recognition]);
    const stopListening = React2.useCallback(() => {
      if (recognition) {
        recognition.stop();
      }
      if (audioStream) {
        audioStream.getTracks().forEach((track) => track.stop());
        setAudioStream(null);
      }
    }, [recognition, audioStream]);
    const handleRecognitionError = React2.useCallback((error) => {
      console.error("[DEBUG] Recognition error:", error);
      let message = "Sorry, I couldn't understand your voice. Please try again.";
      switch (error) {
        case "audio-capture":
          message = "Please allow microphone access to use voice search.";
          break;
        case "not-allowed":
          message = "Microphone access denied. Please enable it in your browser settings.";
          break;
        case "no-speech":
          message = "No speech detected. Please try speaking again.";
          break;
        case "network":
          message = "Network error. Please check your connection and try again.";
          break;
      }
      setErrorMessage(message);
      setShowModal(true);
    }, []);
    const processVoiceInput = React2.useCallback(async (transcript) => {
      try {
        console.log("[DEBUG] Processing voice input:", transcript);
        const response = await fetch("/api/voice-search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            voiceInput: transcript,
            timestamp: Date.now()
          })
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("[DEBUG] Voice search result:", result);
        if (result.success && result.searchQuery) {
          window.location.href = `/search?q=${encodeURIComponent(result.searchQuery)}`;
        }
      } catch (error) {
        console.error("[DEBUG] Error processing voice input:", error);
        setErrorMessage("Sorry, there was an error processing your voice input. Please try again.");
        setShowModal(true);
      }
    }, []);
    const handleBubbleClick = React2.useCallback(() => {
      if (isListening) {
        stopListening();
      } else {
        startListening();
      }
    }, [isListening, startListening, stopListening]);
    const closeModal = React2.useCallback(() => {
      setShowModal(false);
      setErrorMessage("");
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: isListening ? "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            cursor: "pointer",
            zIndex: 1e4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            border: "3px solid white",
            animation: isListening ? "pulse 1s infinite" : "none"
          },
          onClick: handleBubbleClick,
          onMouseEnter: (e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
          },
          onMouseLeave: (e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontSize: "24px",
            color: "white",
            userSelect: "none"
          }, children: isListening ? "🔴" : "🎤" })
        }
      ),
      showModal && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Modal,
        {
          open: showModal,
          onClose: closeModal,
          title: "Voice Product Search",
          primaryAction: {
            content: "Close",
            onAction: closeModal
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BlockStack, { gap: "400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Banner, { status: "critical", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: errorMessage }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", fontSize: "40px", margin: "20px 0" }, children: "🎤" })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        ` })
    ] });
  };
  const initVoiceChatBubble = () => {
    if (document.getElementById("voice-chat-bubble-root")) {
      return;
    }
    const root = document.createElement("div");
    root.id = "voice-chat-bubble-root";
    document.body.appendChild(root);
    const reactRoot = clientExports.createRoot(root);
    reactRoot.render(/* @__PURE__ */ jsxRuntimeExports.jsx(VoiceChatBubble, {}));
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVoiceChatBubble);
  } else {
    initVoiceChatBubble();
  }
})(React, ReactDOM);
