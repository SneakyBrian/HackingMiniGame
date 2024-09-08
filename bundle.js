/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/game.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/game.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --primary-color: #00FF00; /* Bright green used for text, borders, and progress bars */
    --prompt-color: #666; /* Grey used specifically for prompt text */
    --warning-color: #FF0000; /* Red used as warning colour */
    --background-color: #000; /* Black background */
    --overlay-background: rgba(0, 0, 0, 0.7); /* Semi-transparent black */
}

body {
    background-color: var(--background-color);
    color: var(--primary-color);
    font-family: 'Courier New', Courier, monospace; /* Monospaced font */
    text-align: center;
    position: relative; /* Allow absolute positioning of tiles */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
    padding: 10px; /* Add padding to create space around the game */
    box-sizing: border-box; /* Include padding in the element's total width and height */
    touch-action: none;
    overflow: hidden;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink {
    50% { border-color: transparent; }
}

#prompt-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    /* max-height: 100px; */
    overflow: hidden;
    background-color: var(--overlay-background);
    color: var(--prompt-color);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    box-sizing: border-box;
    pointer-events: none; /* Ensure clicks pass through */
    text-align: left;
}

.prompt {
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--prompt-color);
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
    /* border-right: 2px solid #cccccc; */ /* Cursor effect */
    /* width: 0; */ /* Start with no width */
    /* animation: typing 2s steps(30, end), blink 0.5s step-end infinite alternate; */
}

#deadlock-progress::-webkit-progress-value {
    background-color: var(--warning-color); /* For WebKit browsers */
}

#deadlock-progress::-moz-progress-bar {
    background-color: var(--warning-color); /* For Firefox */
}

#deadlock-progress {
    appearance: none; /* Remove default styling */
}

.progress-container {
    display: flex;
    align-items: center;
    width: 100%; /* Make the container full width */
    margin: 10px 0;
}

.progress-container label {
    margin-right: 10px;
    width: 150px; /* Fixed width for labels */
    text-align: right;
}

.progress-container progress {
    flex-grow: 1; /* Allow progress bars to take up remaining space */
    height: 20px;
    appearance: none;
}

.progress-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px 0;
}

.progress-container label {
    margin-right: 10px;
    width: 150px;
    text-align: right;
}

::-webkit-progress-value {
    background-color: var(--primary-color);
    transition: width 0.5s ease-in-out; /* Smooth transition for progress bar */
}

::-moz-progress-bar {
    background-color: var(--primary-color);
    transition: width 0.5s ease-in-out; /* Smooth transition for progress bar */
}

progress,
#timer-progress {
    width: 80%;
    height: 20px;
    margin: 10px 0;
    appearance: none;
}

progress::-webkit-progress-bar {
    background-color: var(--background-color);
    border: 1px solid var(--primary-color);
}

#timer-progress::-webkit-progress-value {
    background-color: var(--progress-color, var(--primary-color)); /* Use CSS variable */
    transition: background-color 0.5s ease-in-out; /* Smooth transition */
    transition: width 0.5s ease-in-out; /* Smooth transition for progress bar */
}

#timer-progress::-moz-progress-bar {
    background-color: var(--progress-color, var(--primary-color)); /* Use CSS variable */
    transition: background-color 0.5s ease-in-out; /* Smooth transition */
    transition: width 0.5s ease-in-out; /* Smooth transition for progress bar */
}

#game-board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 5px;
    margin: 0 auto; /* Center align the grid */
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-background);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.overlay-content {
    background-color: var(--background-color); /* Match background color */
    color: var(--primary-color);
    padding: 20px;
    border: 1px solid var(--primary-color); /* Green border */
    text-align: center;
    font-family: 'Courier New', Courier, monospace; /* Monospaced font */
}

@keyframes pulse {
    0% {
        font-size: 24px;
    }
    50% {
        font-size: 32px;
    }
    100% {
        font-size: 24px;
    }
}

.pulse {
    animation: pulse 0.3s ease-in-out;
}

.tile {
    width: 100px;
    height: 100px;
    background-color: var(--overlay-background);
    color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border: 1px solid var(--primary-color); /* Green border */
    transition: transform 0.2s ease-in-out; /* Add transition for sliding */
    position: absolute; /* Position tiles absolutely */
}

#game-board {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    gap: 5px;
    margin: 20px auto;
}

h1, #score, #timer, #target-score {
    margin: 10px 0;
}
`, "",{"version":3,"sources":["webpack://./src/game.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --primary-color: #00FF00; /* Bright green used for text, borders, and progress bars */\n    --prompt-color: #666; /* Grey used specifically for prompt text */\n    --warning-color: #FF0000; /* Red used as warning colour */\n    --background-color: #000; /* Black background */\n    --overlay-background: rgba(0, 0, 0, 0.7); /* Semi-transparent black */\n}\n\nbody {\n    background-color: var(--background-color);\n    color: var(--primary-color);\n    font-family: 'Courier New', Courier, monospace; /* Monospaced font */\n    text-align: center;\n    position: relative; /* Allow absolute positioning of tiles */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n    padding: 10px; /* Add padding to create space around the game */\n    box-sizing: border-box; /* Include padding in the element's total width and height */\n    touch-action: none;\n    overflow: hidden;\n}\n\n@keyframes typing {\n    from { width: 0; }\n    to { width: 100%; }\n}\n\n@keyframes blink {\n    50% { border-color: transparent; }\n}\n\n#prompt-container {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    /* max-height: 100px; */\n    overflow: hidden;\n    background-color: var(--overlay-background);\n    color: var(--prompt-color);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding: 10px;\n    box-sizing: border-box;\n    pointer-events: none; /* Ensure clicks pass through */\n    text-align: left;\n}\n\n.prompt {\n    margin: 0;\n    padding: 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: var(--prompt-color);\n    font-family: 'Courier New', monospace;\n    font-size: 14px;\n    line-height: 1.5;\n    /* border-right: 2px solid #cccccc; */ /* Cursor effect */\n    /* width: 0; */ /* Start with no width */\n    /* animation: typing 2s steps(30, end), blink 0.5s step-end infinite alternate; */\n}\n\n#deadlock-progress::-webkit-progress-value {\n    background-color: var(--warning-color); /* For WebKit browsers */\n}\n\n#deadlock-progress::-moz-progress-bar {\n    background-color: var(--warning-color); /* For Firefox */\n}\n\n#deadlock-progress {\n    appearance: none; /* Remove default styling */\n}\n\n.progress-container {\n    display: flex;\n    align-items: center;\n    width: 100%; /* Make the container full width */\n    margin: 10px 0;\n}\n\n.progress-container label {\n    margin-right: 10px;\n    width: 150px; /* Fixed width for labels */\n    text-align: right;\n}\n\n.progress-container progress {\n    flex-grow: 1; /* Allow progress bars to take up remaining space */\n    height: 20px;\n    appearance: none;\n}\n\n.progress-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 2px 0;\n}\n\n.progress-container label {\n    margin-right: 10px;\n    width: 150px;\n    text-align: right;\n}\n\n::-webkit-progress-value {\n    background-color: var(--primary-color);\n    transition: width 0.5s ease-in-out; /* Smooth transition for progress bar */\n}\n\n::-moz-progress-bar {\n    background-color: var(--primary-color);\n    transition: width 0.5s ease-in-out; /* Smooth transition for progress bar */\n}\n\nprogress,\n#timer-progress {\n    width: 80%;\n    height: 20px;\n    margin: 10px 0;\n    appearance: none;\n}\n\nprogress::-webkit-progress-bar {\n    background-color: var(--background-color);\n    border: 1px solid var(--primary-color);\n}\n\n#timer-progress::-webkit-progress-value {\n    background-color: var(--progress-color, var(--primary-color)); /* Use CSS variable */\n    transition: background-color 0.5s ease-in-out; /* Smooth transition */\n    transition: width 0.5s ease-in-out; /* Smooth transition for progress bar */\n}\n\n#timer-progress::-moz-progress-bar {\n    background-color: var(--progress-color, var(--primary-color)); /* Use CSS variable */\n    transition: background-color 0.5s ease-in-out; /* Smooth transition */\n    transition: width 0.5s ease-in-out; /* Smooth transition for progress bar */\n}\n\n#game-board {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    gap: 5px;\n    margin: 0 auto; /* Center align the grid */\n}\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--overlay-background);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n}\n.overlay-content {\n    background-color: var(--background-color); /* Match background color */\n    color: var(--primary-color);\n    padding: 20px;\n    border: 1px solid var(--primary-color); /* Green border */\n    text-align: center;\n    font-family: 'Courier New', Courier, monospace; /* Monospaced font */\n}\n\n@keyframes pulse {\n    0% {\n        font-size: 24px;\n    }\n    50% {\n        font-size: 32px;\n    }\n    100% {\n        font-size: 24px;\n    }\n}\n\n.pulse {\n    animation: pulse 0.3s ease-in-out;\n}\n\n.tile {\n    width: 100px;\n    height: 100px;\n    background-color: var(--overlay-background);\n    color: var(--primary-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 24px;\n    border: 1px solid var(--primary-color); /* Green border */\n    transition: transform 0.2s ease-in-out; /* Add transition for sliding */\n    position: absolute; /* Position tiles absolutely */\n}\n\n#game-board {\n    display: grid;\n    grid-template-columns: repeat(4, 100px);\n    grid-template-rows: repeat(4, 100px);\n    gap: 5px;\n    margin: 20px auto;\n}\n\nh1, #score, #timer, #target-score {\n    margin: 10px 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/game.css":
/*!**********************!*\
  !*** ./src/game.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./game.css */ "./node_modules/css-loader/dist/cjs.js!./src/game.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.css */ "./src/game.css");

const potentialPrompts = [
    "firewall node breached",
    "port scan successful",
    "encryption key cracked",
    "access granted",
    "data packet intercepted",
    "malware deployed",
    "system override initiated",
    "network intrusion detected",
    "backdoor access established",
    "security protocol bypassed",
    "root access obtained",
    "database compromised",
    "ip address spoofed",
    "password decrypted",
    "server connection established",
    "proxy server engaged",
    "data exfiltration complete",
    "honeypot evaded",
    "botnet command executed",
    "zero-day exploit launched",
    "brute force attack initiated",
    "firewall rules updated",
    "vpn tunnel established",
    "trojan horse activated",
    "ddos attack mitigated",
    "tunnel key generated",
    "rootkit installed",
    "network traffic analyzed",
    "intrusion attempt blocked",
    "security patch removed",
    "data decryption in progress",
    "access token generated",
    "session hijacking successful",
    "malware signature updated",
    "intrusion prevention system triggered",
    "zero-trust policy enforced",
    "digital certificate issued",
    "blockchain transaction verified",
    "two-factor authentication bypassed",
    "packet sniffer deployed",
    "network spoofing detected",
    "keylogger activated",
    "botnet command received",
    "exploit kit executed",
    "security audit forged",
    "digital footprint analyzed",
    "sandbox environment breached",
    "remote access granted",
    "security threat neutralized",
    "data integrity verified",
    "anomaly detection triggered",
    "security breach contained",
    "forensic analysis underway",
    "threat intelligence updated",
    "access logs reviewed",
    "security clearance granted",
    "encryption protocol downgraded",
    "data backup completed",
    "incident response initiated"
];
/**
 * Class representing the 2048 game.
 */
class Game2048 {
    /**
     * Creates an instance of Game2048.
     */
    constructor() {
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        const urlParams = new URLSearchParams(window.location.search);
        this.timeLeft = parseInt(urlParams.get('time') || '60', 10);
        this.targetScore = parseInt(urlParams.get('target') || '2048', 10);
        this.active = true;
        this.board = this.createBoard();
        this.newTiles = this.createNewTilesMap();
        this.score = 0;
        this.prompts = [];
        this.updateScore(0);
        this.updateTargetScoreDisplay();
        this.setTimeDisplay();
        this.addRandomTile();
        this.addRandomTile();
        this.render();
        document.addEventListener('keydown', this.handleKeyPress.bind(this));
        document.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
        document.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
        document.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
        this.startTimer();
        this.checkEndGameCondition();
        this.updateDeadlockProgressBar(); // Update deadlock progress
        this.updatePromptDisplay();
    }
    /**
     * Updates the deadlock progress bar based on the current board state.
     */
    updateDeadlockProgressBar() {
        const deadlockProgressBar = document.getElementById('deadlock-progress');
        if (deadlockProgressBar) {
            const deadlockProgress = this.calculateDeadlockProgress();
            deadlockProgressBar.value = deadlockProgress;
        }
    }
    /**
     * Calculates the deadlock progress based on filled squares and potential merges.
     * @returns {number} The deadlock progress as a percentage.
     */
    calculateDeadlockProgress() {
        let filledSquares = 0;
        let potentialMerges = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j] !== 0) {
                    filledSquares++;
                }
                if (i < 3 && this.board[i][j] === this.board[i + 1][j]) {
                    potentialMerges++;
                }
                if (j < 3 && this.board[i][j] === this.board[i][j + 1]) {
                    potentialMerges++;
                }
            }
        }
        const totalSquares = 16;
        const deadlockFactor = filledSquares - potentialMerges;
        return (deadlockFactor / totalSquares) * 100;
    }
    /**
     * Updates the timer progress bar based on the remaining time.
     * Updates the timer progress bar based on the remaining time ratio.
     * @param {number} progressRatio - The ratio of remaining time to total time.
     */
    updateTimerProgressBar(progressRatio) {
        const timerProgressBar = document.getElementById('timer-progress');
        if (timerProgressBar) {
            timerProgressBar.value = progressRatio * 100;
            // Calculate the color based on the progress ratio
            const greenValue = Math.floor(255 * progressRatio);
            const redValue = 255 - greenValue;
            const color = `rgb(${redValue}, ${greenValue}, 0)`;
            // Update the progress bar color
            timerProgressBar.style.setProperty('--progress-color', color);
        }
    }
    /**
     * Updates the progress bar based on the current score.
     */
    updateProgressBar() {
        const progressBar = document.getElementById('score-progress');
        if (progressBar) {
            const progress = (this.score / this.targetScore) * 100;
            progressBar.value = progress;
        }
    }
    /**
     * Gets the current score.
     * @returns {number} The current score.
     */
    getScore() {
        return this.score;
    }
    /**
     * Gets the current game board.
     * @returns {number[][]} The current game board.
     */
    getBoard() {
        return this.board;
    }
    /**
     * Updates the target score display on the UI.
     */
    updateTargetScoreDisplay() {
        const targetScoreElement = document.getElementById('target-score');
        if (targetScoreElement) {
            targetScoreElement.textContent = `Target Score: ${this.targetScore}`;
        }
    }
    /**
     * Checks if the game has ended due to win or deadlock.
     */
    checkEndGameCondition() {
        if (this.score >= this.targetScore) {
            this.endGameWithMessage("You Win!");
            return;
        }
        if (this.isDeadlock()) {
            this.endGameWithMessage("Deadlock! You Lose.");
        }
    }
    /**
     * Starts the game timer and updates the UI.
     */
    startTimer() {
        const startTime = performance.now();
        const totalDuration = this.timeLeft * 1000; // Convert seconds to milliseconds
        this.timerInterval = setInterval(() => {
            const elapsedTime = performance.now() - startTime;
            const remainingTime = totalDuration - elapsedTime;
            if (remainingTime > 0) {
                this.timeLeft = Math.ceil(remainingTime / 1000);
                this.setTimeDisplay();
                this.updateTimerProgressBar(remainingTime / totalDuration);
            }
            else {
                this.endGameWithMessage("Timeout! You Lose.");
            }
        }, 1000);
    }
    /**
     * Set the displayed game time
     */
    setTimeDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = `Time Left: ${this.timeLeft}s`;
        }
    }
    /**
     * Determines the move direction based on the key pressed.
     * @param {string} key - The key pressed.
     * @returns {string | null} The move direction ('up', 'down', 'left', 'right') or null if no valid key.
     */
    getMoveDirectionFromKey(key) {
        switch (key) {
            case 'ArrowUp':
            case 'w':
                return 'up';
            case 'ArrowDown':
            case 's':
                return 'down';
            case 'ArrowLeft':
            case 'a':
                return 'left';
            case 'ArrowRight':
            case 'd':
                return 'right';
            default:
                return null;
        }
    }
    /**
     * Handles the move action and updates the game state.
     * @param {string} direction - The direction to move tiles ('up', 'down', 'left', 'right').
     */
    handleMove(direction) {
        if (this.active) {
            this.move(direction);
            this.checkEndGameCondition();
            this.addRandomTile();
            this.render();
            this.updateDeadlockProgressBar(); // Update deadlock progress
        }
    }
    /**
     * Handles key press events to move tiles.
     * @param {KeyboardEvent} event - The keyboard event.
     */
    handleKeyPress(event) {
        const direction = this.getMoveDirectionFromKey(event.key);
        if (direction) {
            this.handleMove(direction);
        }
    }
    /**
     * Handles the touch start event.
     * @param {TouchEvent} event - The touch event.
     */
    handleTouchStart(event) {
        event.preventDefault(); // Prevent default scrolling
        const firstTouch = event.touches[0];
        this.touchStartX = firstTouch.clientX;
        this.touchStartY = firstTouch.clientY;
    }
    /**
     * Handles the touch move event.
     * @param {TouchEvent} event - The touch event.
     */
    handleTouchMove(event) {
        event.preventDefault(); // Prevent default scrolling
        if (!this.active)
            return;
        const touch = event.touches[0];
        this.touchEndX = touch.clientX;
        this.touchEndY = touch.clientY;
    }
    /**
     * Handles the touch end event and determines the swipe direction.
     */
    handleTouchEnd() {
        const deltaX = this.touchEndX - this.touchStartX;
        const deltaY = this.touchEndY - this.touchStartY;
        let direction = null;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            direction = deltaX > 0 ? 'right' : 'left';
        }
        else {
            direction = deltaY > 0 ? 'down' : 'up';
        }
        if (direction) {
            this.handleMove(direction);
        }
    }
    /**
     * Moves tiles in the specified direction and merges them if possible.
     * @param {string} direction - The direction to move tiles ('up', 'down', 'left', 'right').
     */
    move(direction) {
        if (this.active) {
            const isVertical = direction === 'up' || direction === 'down';
            const isReverse = direction === 'down' || direction === 'right';
            for (let i = 0; i < 4; i++) {
                let merged = [false, false, false, false];
                for (let j = isReverse ? 2 : 1; isReverse ? j >= 0 : j < 4; isReverse ? j-- : j++) {
                    const row = isVertical ? j : i;
                    const col = isVertical ? i : j;
                    if (this.board[row][col] !== 0) {
                        let newRow = row;
                        let newCol = col;
                        while (true) {
                            const nextRow = newRow + (isVertical ? (isReverse ? 1 : -1) : 0);
                            const nextCol = newCol + (isVertical ? 0 : (isReverse ? 1 : -1));
                            if (nextRow < 0 || nextRow > 3 || nextCol < 0 || nextCol > 3 || this.board[nextRow][nextCol] !== 0) {
                                break;
                            }
                            this.board[nextRow][nextCol] = this.board[newRow][newCol];
                            this.board[newRow][newCol] = 0;
                            newRow = nextRow;
                            newCol = nextCol;
                        }
                        const mergeRow = newRow + (isVertical ? (isReverse ? 1 : -1) : 0);
                        const mergeCol = newCol + (isVertical ? 0 : (isReverse ? 1 : -1));
                        if (mergeRow >= 0 && mergeRow < 4 && mergeCol >= 0 && mergeCol < 4 &&
                            this.board[mergeRow][mergeCol] === this.board[newRow][newCol] && !merged[mergeRow || mergeCol]) {
                            this.board[mergeRow][mergeCol] *= 2;
                            this.newTiles[mergeRow][mergeCol] = true;
                            this.board[newRow][newCol] = 0;
                            merged[mergeRow || mergeCol] = true;
                            this.updateScore(this.board[mergeRow][mergeCol]);
                            this.displayRandomPrompt(); // Display a new prompt on merge
                        }
                        this.checkEndGameCondition();
                    }
                }
            }
        }
    }
    /**
     * Updates the score and the score display.
     * @param {number} points - The points to add to the score.
     */
    updateScore(points) {
        this.score += points;
        const scoreElement = document.getElementById('score');
        if (scoreElement) {
            scoreElement.textContent = `Score: ${this.score}`;
        }
        this.updateProgressBar();
    }
    /**
     * Checks if the game is in a deadlock state.
     * @returns {boolean} True if the game is in a deadlock, false otherwise.
     */
    isDeadlock() {
        // Check for empty spaces
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j] === 0) {
                    return false; // Found an empty space
                }
            }
        }
        // Check for possible merges
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (i < 3 && this.board[i][j] === this.board[i + 1][j]) {
                    return false; // Found a possible vertical merge
                }
                if (j < 3 && this.board[i][j] === this.board[i][j + 1]) {
                    return false; // Found a possible horizontal merge
                }
            }
        }
        return true; // No empty spaces or possible merges
    }
    /**
     * Ends the game and displays a message.
     * @param {string} message - The message to display.
     */
    endGameWithMessage(message) {
        clearInterval(this.timerInterval);
        this.active = false;
        const endGameMessageElement = document.getElementById('end-game-message');
        const gameOverlay = document.getElementById('game-overlay');
        if (endGameMessageElement && gameOverlay) {
            endGameMessageElement.textContent = message;
            gameOverlay.style.display = 'flex';
        }
        document.removeEventListener('keydown', this.handleKeyPress.bind(this));
    }
    /**
     * Creates a new game board.
     * @returns {number[][]} A 2D array representing the game board.
     */
    createBoard() {
        return Array.from({ length: 4 }, () => Array(4).fill(0));
    }
    /**
     * Creates the new tiles map.
     * @returns {boolean[][]} A 2D array of flags indicating whether the tile is new.
     */
    createNewTilesMap() {
        return Array.from({ length: 4 }, () => Array(4).fill(false));
    }
    /**
     * Adds a random tile (2 or 4) to an empty spot on the board.
     */
    addRandomTile() {
        const emptyTiles = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.board[i][j] === 0) {
                    emptyTiles.push({ x: i, y: j });
                }
            }
        }
        if (emptyTiles.length > 0) {
            const { x, y } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            this.board[x][y] = Math.random() < 0.9 ? 2 : 4;
            this.newTiles[x][y] = true;
        }
    }
    /**
     * Renders the game board on the UI.
     */
    render() {
        const gameBoard = document.getElementById('game-board');
        if (gameBoard) {
            gameBoard.innerHTML = '';
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    const tile = document.createElement('div');
                    if (this.newTiles[i][j]) {
                        tile.className = 'tile pulse';
                        this.newTiles[i][j] = false;
                    }
                    else {
                        tile.className = 'tile';
                    }
                    tile.textContent = this.board[i][j] === 0 ? '' : `0x${this.board[i][j].toString(16).toUpperCase()}`;
                    tile.style.transform = `translate(${j * 105}px, ${i * 105}px)`; // Position tile
                    gameBoard.appendChild(tile);
                }
            }
        }
    }
    displayRandomPrompt() {
        const maxPrompts = 10;
        const newPrompt = this.getRandomPrompt();
        this.prompts.push(newPrompt);
        while (this.prompts.length > maxPrompts) {
            this.prompts.shift(); // Remove the oldest prompt
        }
        this.updatePromptDisplay();
    }
    updatePromptDisplay() {
        const promptElement = document.getElementById('prompt');
        if (promptElement) {
            promptElement.innerHTML = ''; // Clear existing content
            for (let index = 0; index < this.prompts.length; index++) {
                const prompt = this.prompts[index];
                const promptDiv = document.createElement('div');
                promptDiv.className = 'prompt';
                promptElement.appendChild(promptDiv);
                if (index < this.prompts.length - 1) {
                    promptDiv.textContent = `$:> ${prompt}`;
                }
                else {
                    this.typeText(promptDiv, `$:> ${prompt}`, 0); // Delay each prompt                
                }
            }
        }
    }
    getRandomPrompt() {
        const randomIndex = Math.floor(Math.random() * potentialPrompts.length);
        return potentialPrompts[randomIndex];
    }
    typeText(element, text, delay) {
        let index = 0;
        setTimeout(() => {
            const typeNextCharacter = () => {
                if (index < text.length) {
                    element.textContent += text[index];
                    index++;
                    // Randomize the delay to simulate human typing
                    const randomDelay = 50 + Math.random() * 100; // Between 50ms and 150ms
                    setTimeout(typeNextCharacter, randomDelay);
                }
            };
            typeNextCharacter();
        }, delay);
    }
}
function startGame() {
    const startGameOverlay = document.getElementById('start-game-overlay');
    if (startGameOverlay) {
        startGameOverlay.style.display = 'none';
    }
    new Game2048();
}
window.startGame = startGame;
window.restartGame = restartGame;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game2048);
function restartGame() {
    const gameOverlay = document.getElementById('game-overlay');
    if (gameOverlay) {
        gameOverlay.style.display = 'none';
    }
    new Game2048();
}

/******/ })()
;
//# sourceMappingURL=bundle.js.map