/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  background: radial-gradient(#ff5d71, #EB3349);\\n  background-repeat: no-repeat;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\nh1 {\\n  color: #FFC837 ;\\n  font-size: 2rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.locator-helper {\\n  position: absolute;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-flow: row wrap;\\n  width: 54vw;\\n  min-width: 375px;\\n  height: 50vw;\\n  min-height: 350px;\\n  gap: 0px;\\n  transition: 1.5s ease-out;\\n}\\n.carrier, .battleship, .cruiser, .destroyer, .submarine {\\n  background-color: rgb(67, 255, 161);\\n  box-shadow: 0px 0px 10px rgb(218, 255, 169);\\n}\\n\\n.locator, .carrier, .battleship, .cruiser, .destroyer, .submarine  {\\n  width: 5vw;\\n  min-width: 35px;\\n  height: 5vw;\\n  min-height: 35px;\\n  border-radius: .5vw;\\n  transition: .2s ease-in;\\n  border: 1px solid rgba(0, 0, 0, 0);\\n}\\n\\n.ship {\\n  background-color: rgb(78, 78, 78);\\n  transform: translateY(-8px);\\n  box-shadow: 0 10px 10px -5px rgba(156, 156, 156, 0.425), 0px 10px 0 rgb(0, 0, 0);\\n}\\n\\n.error {\\n  background-color: red;\\n}\\n\\n.main {\\n  display: flex;\\n  justify-content: center;\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n.gameboard {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-flow: row wrap;\\n  width: 53vw;\\n  min-width: 375px;\\n  height: 50vw;\\n  min-height: 350px;\\n  gap: 2px;\\n}\\n\\n.hidden {\\n  display:none;\\n}\\n\\n.square {\\n  width: 5vw;\\n  min-width: 35px;\\n  height: 5vw;\\n  min-height: 35px;\\n  border-radius: .5vw;\\n  transition: .2s ease-in;\\n}\\n\\n.unknown-attack{\\n  background: radial-gradient(circle at bottom center, #FFC837 15px, #FF8008);\\n  box-shadow: 0 10px 10px -5px rgba(255, 171, 75, 0.425), 0px 10px 0 rgb(114, 13, 0);\\n}\\n\\n.unknown-attack:hover {\\n  background: radial-gradient(circle at bottom center, #fdcc50 15px, #ff8e25);\\n  transform: translateY(-8px);\\n  box-shadow: 0 10px 10px -5px rgba(255, 171, 75, 0.425), 0px 10px 0 rgb(114, 13, 0);\\n}\\n\\n.unknown-defense{\\n  background: radial-gradient(circle at bottom center, #37ffe4 15px, #085eff);\\n  box-shadow: 0 10px 10px -5px rgba(75, 204, 255, 0.425), 0 10px 0 rgb(0, 30, 114);\\n}\\n\\n.unknown-defense:hover {\\n  background: radial-gradient(circle at bottom center, #50fde6 15px, #25a8ff);\\n  transform: translateY(-8px);\\n  box-shadow: 0 10px 10px -5px rgba(75, 243, 255, 0.425), 0 10px 0 rgb(0, 49, 114);\\n}\\n\\n.miss {\\n  background: radial-gradient(circle at bottom center, #a3a3a3 15px, #363636);\\n  z-index: -1;\\n  transform: translateY(8px);\\n}\\n\\n.hit {\\n  background: radial-gradient(circle at bottom center, #ff3769 15px, #ff0808);\\n  box-shadow: 0 10px 10px -5px rgba(255, 75, 150, 0.425), 0 10px 0 rgb(114, 0, 0);\\n  border-radius: 50%;\\n}\\n\\n.hit-confirm {\\n  position: absolute;\\n  margin: 0;\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions/Gameboard.js":
/*!************************************!*\
  !*** ./src/functions/Gameboard.js ***!
  \************************************/
/***/ ((module) => {

eval("const gameboardFactory = (fleet) => {\n  const gameboard = {\n    gameboardArray : [],\n    \n    createBoard : function() {\n      for (let i = 1; i <= 100; i++) {\n        this.gameboardArray.push(i)\n      }\n    },\n\n    placeFleetRandomly : function(fleet) {\n      fleet.forEach(ship => {\n        let noOverlap = false;\n        ship.findRandomLocation();\n        while (noOverlap === false) {\n          for (let i = 0; i < ship.size; i++) {\n            if (typeof this.gameboardArray[ship.location[i]] === 'string') {\n              // console.log(`reroll ${ship.name} location`);\n              ship.findRandomLocation();\n            } else {\n              this.placeShip(ship);\n              return noOverlap = true;\n            }\n          }\n        }\n      });\n      // cheatsheet\n      console.log(this.gameboardArray);\n    },\n    \n    placeShip : function(ship) {\n      const location = ship.getLocation();\n      location.forEach(element => {\n        this.gameboardArray[element-1] = ship.name;\n      });\n    },\n\n    receiveAttack : function(location, fleet) {\n      if (typeof this.gameboardArray[location-1] === 'string') {\n        fleet.forEach(ship => ship.hit(location));\n        this.gameboardArray[location-1] += ' hit';\n      } else {\n        this.gameboardArray[location-1] = 'miss';\n      }\n    },\n\n    isFleetSunk : function(fleet) {\n      let answer = true\n      for (let i = 0; i < fleet.length; i++){\n        if(fleet[i].isSunk() === false) {\n          answer = false;\n        } else {\n          console.log(`${fleet[i].name} sunk`);\n        }\n      }\n      return answer;\n    }\n  }\n  return gameboard\n}\n\nmodule.exports = gameboardFactory;\n\n//# sourceURL=webpack://battleship/./src/functions/Gameboard.js?");

/***/ }),

/***/ "./src/functions/Player.js":
/*!*********************************!*\
  !*** ./src/functions/Player.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameboard = __webpack_require__(/*! ./Gameboard */ \"./src/functions/Gameboard.js\");\n\nconst Player = (name) => {\n  const player = {\n    name : name,\n    oppGameboard : gameboard(),\n\n    attack : function(location, fleet) { \n      this.oppGameboard.receiveAttack(location, fleet);\n      return `fired at ${location}`;\n    },\n\n    attackRandom : function() {\n      let locationArray = this.oppGameboard.gameboardArray.filter(x => typeof x !== 'string');\n      function randomLocation(max) {\n        return (Math.floor(Math.random() * max))\n      }\n      let location = locationArray[randomLocation(locationArray.length)];\n\n      this.oppGameboard.receiveAttack(location);\n\n    }\n  }\n  return player;\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship/./src/functions/Player.js?");

/***/ }),

/***/ "./src/functions/Ship.js":
/*!*******************************!*\
  !*** ./src/functions/Ship.js ***!
  \*******************************/
/***/ ((module) => {

eval("const shipFactory = (name, size, location) => {\n  const ship = {\n    name : name,\n    size : size,\n    location : location,\n    hits : [],\n\n    findRandomLocation() {\n      let coor = []\n      let orientation = Math.floor(Math.random() * 1); //outputs 1 or 0\n      let origin = (Math.floor(Math.random() * 100))+1;\n      // horizontal orientation\n      if (orientation === 0) {\n        if (origin > ((Math.ceil(origin/10)*10) - this.size + 1)) {\n          origin = origin - this.size;\n        }\n        for (let i = 0; i < this.size; i++) {\n          coor.push(origin + i);\n        }\n      } else { //vertical orientation\n        if (origin > 100 - (this.size * 10)) {\n          origin = origin - (this.size * 10);\n        }\n        for (let i = 0; i < this.size; i++) {\n          coor.push(origin + (10 * i));\n        }\n      }\n      this.location = coor;\n    },\n\n    getLocation : function() {\n      return this.location;\n    },\n\n    hit : function(id) {\n      this.hits.push(id);\n      return 'hit';\n    },\n    isSunk : function() {\n      if (this.location.every(id => this.hits.includes(id))) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }\n  return ship;\n}\n\nmodule.exports = shipFactory;\n\n//# sourceURL=webpack://battleship/./src/functions/Ship.js?");

/***/ }),

/***/ "./src/functions/placeShip.js":
/*!************************************!*\
  !*** ./src/functions/placeShip.js ***!
  \************************************/
/***/ ((module) => {

eval("    //function to determine ships location\n    function determineShipLocation(parent, fleet, gameboard) {\n      const locatorHelper = document.createElement('div');\n      locatorHelper.className = 'locator-helper';\n      let ship = 0;\n      let coor = [];\n      \n      function findShipLocation() {\n        if (ship === fleet.length) {\n          //cleanUP\n          for (let i = 0; i < fleet.length; i++) {\n            gameboard.placeShip(fleet[i]);\n          }\n          locatorHelper.style.opacity = 0;\n          setTimeout(function() {\n            parent.removeChild(locatorHelper);\n          }, 1500);\n          return;\n        }\n        let shipLength = fleet[ship].size;\n        const squares = document.querySelectorAll('.locator');\n        squares.forEach(square => {\n          square.addEventListener('mouseover', displayShip);\n          square.addEventListener('click', findOrigin);\n        })\n        function displayShip(e) {\n          const targetID = parseInt(e.target.id);\n          for (let i = 0; i < shipLength; i++){\n            // logic rounds targetID up to the nearest 10th to \n            // stop the indicator from going to the next line\n            const target = document.getElementById(`${targetID + i}`);\n            if (targetID + i > (Math.ceil((targetID) / 10) * 10)) {\n              break;\n            }\n            else if (target.className === 'locator') {\n              target.className = 'locator ship';\n            }\n          }\n          e.target.addEventListener('mouseout', removeDisplayShip);\n        }\n  \n        function removeDisplayShip(e) {\n          const targetIDs = document.querySelectorAll('.ship');\n          targetIDs.forEach(target => {\n            target.className = 'locator';\n          });\n          e.target.removeEventListener('mouseout', removeDisplayShip)\n        }\n      \n        function findOrigin(e) {\n          const origin = parseInt(e.target.id)\n          const squares = document.querySelectorAll('.locator');\n          squares.forEach(square => {\n            square.removeEventListener('mouseover', displayShip);\n            square.removeEventListener('click', findOrigin);\n            //logic activates squares on the same row and column as the first coordinate\n            if ((square.id >= Math.floor((origin-1) / 10)*10 && \n            square.id < Math.ceil(origin / 10)*10) ||   \n            square.id % 10 === origin % 10) {\n              square.addEventListener('mouseover', showOrientation);\n            }             \n          })\n        \n          function showOrientation(e) {\n            const targetID = parseInt(e.target.id);\n            let shipClassNames = 'locator ship';\n            e.target.addEventListener('mouseout', removeDisplayShip);\n            \n            // determines if ship will be overlapping another ship\n            function sameSpot() {\n              const targetIDs = document.querySelectorAll('.ship');\n              if (targetIDs.length < shipLength) {\n                targetIDs.forEach(target => target.className = 'locator ship error');\n              } else {\n                e.target.addEventListener('click', findOrientation);\n              }\n            }\n            //north orientation\n            if (targetID % 10 === origin % 10 && targetID < origin) {\n              //error handling for orientation\n              if (origin < ((shipLength - 1) * 10)) {\n                shipClassNames = 'locator ship error';\n              } else {\n                shipClassNames = 'locator ship';\n              }\n              for (let i = 0; i < shipLength; i++){\n                const target = document.getElementById(`${origin - (10 * i)}`);\n                if (origin - (10 * i) < 0) {\n                  return\n                } \n                else if (target.className === 'locator'){\n                  target.className = shipClassNames;\n                }\n              }\n              sameSpot();\n            }\n            //south orientation\n            else if (targetID % 10 === origin % 10 && targetID > origin) {\n              //error handling for orientation\n              if (origin > 100 - ((shipLength - 1) * 10)) {\n                shipClassNames = 'locator ship error';\n              } else {\n                shipClassNames = 'locator ship';\n              }\n              \n              for (let i = 0; i < shipLength; i++){\n                const target = document.getElementById(`${origin + (10 * i)}`);\n                if (origin + (10 * i) > 100) {\n                  return\n                } \n                else if (target.className === 'locator'){\n                  target.className = shipClassNames;\n                }\n              }\n              sameSpot();\n            }\n            //east orientation\n            else if (targetID <= Math.ceil((origin) / 10)*10 && targetID >= origin) {\n              //error handling for orientation\n              if (origin > (Math.ceil((origin) / 10) * 10) - shipLength + 1) {\n                shipClassNames = 'locator ship error';\n              } else {\n                shipClassNames = 'locator ship';\n              }\n\n              for (let i = 0; i < shipLength; i++){\n                const target = document.getElementById(`${origin + i}`);\n                if (origin + i > (Math.ceil((origin) / 10) * 10)) {\n                  return\n                } \n                else if (target.className === 'locator'){\n                  target.className = shipClassNames;\n                }\n              }\n              sameSpot();\n            }\n            //west orientation\n            else if (targetID >= Math.floor((origin - 1) / 10)*10 && targetID < origin) {\n              console.log((Math.floor((origin -1) / 10) * 10));\n              //error handling for orientation\n              if (origin < (Math.floor((origin - 1) / 10) * 10) + shipLength) {\n                shipClassNames = 'locator ship error';\n              } else {\n                shipClassNames = 'locator ship';                                                           \n              }\n              \n              for (let i = 0; i < shipLength; i++){\n                const target = document.getElementById(`${origin - i}`);\n                if (origin - i < (Math.floor((origin - 1) / 10) * 10) + 1) {\n                  return;\n                } \n                else if (target.className === 'locator'){\n                  target.className = shipClassNames;\n                }\n              }\n              sameSpot();\n            }\n          }\n          \n          function findOrientation(e) {\n            const squares = document.querySelectorAll('.locator');\n            const shipLocation = document.querySelectorAll('.ship');\n            squares.forEach(square => {\n              square.removeEventListener('mouseover', showOrientation);\n              square.removeEventListener('click', findOrientation);\n            })\n  \n            shipLocation.forEach(spot => {\n              coor.push(parseInt(spot.id))\n              spot.className = `${fleet[ship].name}`\n            });\n            // console.log(coor);\n            fleet[ship].location = coor;\n            coor = [];\n            ship++;\n            findShipLocation();\n          }\n        }\n      }\n      \n      function initUIlocater(parent) {\n        for (let i = 1; i <= 100; i++) {\n          const square = document.createElement('div');\n          square.className = `locator`;\n          square.id = i;\n          parent.appendChild(square);\n        }\n      }\n      \n      initUIlocater(locatorHelper);\n      parent.appendChild(locatorHelper);\n      findShipLocation();\n    }\n\n    module.exports = determineShipLocation;\n\n//# sourceURL=webpack://battleship/./src/functions/placeShip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconst shipFactory = __webpack_require__(/*! ./functions/Ship */ \"./src/functions/Ship.js\");\nconst player = __webpack_require__(/*! ./functions/Player */ \"./src/functions/Player.js\");\nconst determineShipLocation = __webpack_require__(/*! ./functions/placeShip */ \"./src/functions/placeShip.js\");\n\n//Initialize game\nfunction game() {\n\n  //create players\n  let player1 = player('Player 1');\n  let player2 = player('Robot');\n\n  //create players' fleets\n  let fleet = [];\n  let oppFleet = [];\n\n  //create player's gameboards\n  player1.oppGameboard.createBoard();\n  player2.oppGameboard.createBoard();\n  \n  //function to create fleets for players gameboards\n  function createFleet(fleetArr) {\n    let carrier = shipFactory('carrier', 5, []);\n    let battleship = shipFactory('battleship', 4, []);\n    let cruiser = shipFactory('cruiser', 3, []);\n    let submarine = shipFactory('submarine', 3, []);\n    let destroyer = shipFactory('destroyer', 2, []);\n    \n    fleetArr.push(carrier);\n    fleetArr.push(battleship);\n    fleetArr.push(cruiser);\n    fleetArr.push(submarine);\n    fleetArr.push(destroyer);\n  }\n  //Initialize gameboard and fleets\n  createFleet(fleet);\n  createFleet(oppFleet);\n  // createFleet(player2.oppGameboard, fleet);\n  \n  //Initialize UI\n  function domInit() {\n    const head = document.createElement('h1');\n    const main = document.createElement('div');\n    // const swapAtt = document.createElement('button');\n    main.className = 'main';\n    head.textContent = 'Battleship';\n    \n    \n    document.body.appendChild(head);\n    document.body.appendChild(main);\n  }\n\n  function gameboardInit(parent) {\n    const gameBoardPlayer = document.createElement('div');\n    const gameBoardEnemy = document.createElement('div');\n    gameBoardPlayer.className = 'gameboard attack';\n    gameBoardEnemy.className = 'gameboard defense hidden';\n    //generates 100 squares for gameboard\n    function createTable(parent, attDef) {\n      for (let i = 1; i <= 100; i++) {\n        const square = document.createElement('div');\n        square.className = `square ${attDef}`;\n        square.id = i;\n        square.addEventListener('click', hitConfirm);\n        parent.appendChild(square);\n      }\n      //adds hit confirm function for all squares\n      function hitConfirm(e) {\n        const target = parseInt(e.target.id);\n        e.target.removeEventListener('click', hitConfirm);\n        \n        if (gameBoardPlayer.className === 'gameboard attack'){\n          if (typeof player1.oppGameboard.gameboardArray[target - 1] === 'string') {\n            e.target.className = 'square hit';\n          } else {\n            e.target.className = 'square miss'; \n          }\n          player1.attack(target, oppFleet);\n          player1.oppGameboard.isFleetSunk(oppFleet);\n          \n          return swapTurn();\n          \n        } else {\n          if (typeof player2.oppGameboard.gameboardArray[target - 1] === 'string') {\n            e.target.className = 'square hit'; \n          } else {\n            e.target.className = 'square miss'; \n          }\n          player2.attack(target, fleet);\n          player2.oppGameboard.isFleetSunk(fleet);\n          \n          return swapTurn();\n          \n        }\n      }  \n    }\n    //swap gameboard after every hitconfirm\n    function swapTurn() {\n      const hitDiv = document.createElement('div');\n      hitDiv.className = 'hit-confirm';\n      main.appendChild(hitDiv);\n      setTimeout(() => {\n        gameBoardPlayer.classList.toggle('hidden');\n        gameBoardEnemy.classList.toggle('hidden');\n        main.removeChild(hitDiv);\n      }, 1000)\n    }\n    \n    createTable(gameBoardPlayer, 'unknown-attack');\n    createTable(gameBoardEnemy, 'unknown-defense');\n    parent.appendChild(gameBoardPlayer);\n    parent.appendChild(gameBoardEnemy); \n  }\n  \n  \n  \n  //startup\n  domInit();\n  const main = document.querySelector('.main');\n  determineShipLocation(main, fleet, player2.oppGameboard);\n  gameboardInit(main);\n  player1.oppGameboard.placeFleetRandomly(oppFleet);\n}\n\ngame();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;