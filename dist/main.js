/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    margin: 0px;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 1fr 2fr;\n    grid-template-rows: 10vh 90vh;\n}\n\n.projectLibrary {\n    grid-row: 1 / -1;\n    background-color: #cbd5e1;\n    display: grid;\n    grid-template-rows: 100px;\n    grid-auto-rows: 60px;\n    gap: 15px;\n}\n\n.project {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color: #1e293b;\n    color: #f8fafc;\n    border: 1px solid #f8fafc;\n    border-radius: 3px;\n    justify-items: center;\n    align-items: center;\n}\n\n#newProjectForm,\n#newToDoForm {\n    display: grid;\n    justify-items: center;\n    \n}\n\n.toDoLibrary {\n    grid-row: 2;\n    grid-column: 2;\n    background-color: #e2e8f0;\n    display: grid;\n    grid-template-rows: 100px;\n    grid-auto-rows: 60px;\n    gap: 15px;\n}\n\n.projectBanner {\n    grid-column: 2 /-1;\n    background-color: #64748b;\n}\n\n.toDoDisplay {\n    background-color: #f1f5f9;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/forms */ \"./src/pages/forms.js\");\n/* harmony import */ var _project_creation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-creation */ \"./src/project-creation.js\");\n/* harmony import */ var _todo_creation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-creation */ \"./src/todo-creation.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n//import FILE from './source';\n\n//to use we run FILE.thingAsWrittenInFile\n\n\n\n\n\n\n\n\n_pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HomePage;\n_pages_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"].makeProjectForm;\n_pages_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"].makeToDoForm();\n\nconst createNewProject = document.getElementById('createProject');\nconst createNewToDo = document.getElementById('createToDo');\n\ncreateNewProject.addEventListener('click', writeProject);\ncreateNewToDo.addEventListener('click', writeToDo);\n\nfunction writeProject() {\n    _project_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Projects.addProjectToLibrary();\n    _project_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Projects.clearProjectLibrary();\n    _project_creation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Projects.fillLibrary();\n    document.getElementById('newProjectForm').reset();\n    //remove to do form and rewrite with new project as option\n    _pages_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeToDoForm();\n    _pages_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"].makeToDoForm();\n    const createNewToDo = document.getElementById('createToDo');\n    createNewToDo.addEventListener('click', writeToDo);\n}\n\nfunction writeToDo() {\n    _todo_creation__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ToDos.addToDoToList();\n    // toDos.ToDos.fillToDoLibrary();\n    document.getElementById('newToDoForm').reset();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/pages/forms.js":
/*!****************************!*\
  !*** ./src/pages/forms.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-creation */ \"./src/project-creation.js\");\n \n\n\nconst makeProjectForm = (() => {\n\n    //input fields to create Project\n\n    const projectLibrary = document.getElementById('projectLibrary');\n    const newProjectForm = document.createElement('form');\n    const titleInputDiv = document.createElement('div')\n    const titleLabel = document.createElement('label');\n    const titleInput = document.createElement('input');\n    const dueDateInputDiv = document.createElement('div')\n    const dueDateLabel = document.createElement('label');\n    const dueDateInput = document.createElement('input');\n    const submitProjectBtn = document.createElement('button');\n\n    newProjectForm.setAttribute('id', 'newProjectForm');\n\n    titleInputDiv.classList.add('titleInputDiv');\n    newProjectForm.appendChild(titleInputDiv)\n\n    titleLabel.setAttribute('for', 'project-title')\n    titleLabel.innerHTML = 'Project Title: ';\n    titleInputDiv.appendChild(titleLabel);\n\n    titleInput.setAttribute('type', 'text');\n    titleInput.setAttribute('id', 'project-title');\n    titleInput.setAttribute('name', 'project-title');\n    titleInputDiv.appendChild(titleInput);\n\n    dueDateInputDiv.classList.add('dueDateInputDiv');\n    newProjectForm.appendChild(dueDateInputDiv);\n\n    dueDateLabel.setAttribute('for', 'project-dueDate')\n    dueDateLabel.innerHTML = 'Project Due Date: ';\n    dueDateInputDiv.appendChild(dueDateLabel);\n\n    dueDateInput.setAttribute('type', 'date');\n    dueDateInput.setAttribute('id', 'project-dueDate');\n    dueDateInput.setAttribute('name', 'project-dueDate');\n    dueDateInputDiv.appendChild(dueDateInput);\n\n    submitProjectBtn.setAttribute('type', 'button');\n    submitProjectBtn.innerHTML = 'Create New Project';\n    submitProjectBtn.setAttribute('id', 'createProject')\n    newProjectForm.appendChild(submitProjectBtn);\n\n    projectLibrary.appendChild(newProjectForm);\n\n})();\n\nconst makeToDoForm = () => {\n    //input fields to create to do task\n    \n    const todoLibrary = document.getElementById('toDoLibrary');\n    const newToDoForm = document.createElement('form');\n    \n    const toDoTitleInputDiv = document.createElement('div')\n    const toDoTitleLabel = document.createElement('label');\n    const toDoTitleInput = document.createElement('input');\n\n    const toDoDetailsInputDiv = document.createElement('div');\n    const toDoDetailsLabel = document.createElement('label');\n    const toDoDetailsInput = document.createElement('input');\n\n    const toDoNotesInputDiv = document.createElement('div');\n    const toDoNotesLabel = document.createElement('label');\n    const toDoNotesInput = document.createElement('input');\n    \n    const projectSelectionDiv = document.createElement('div')\n    const projectSelectionLabel = document.createElement('label');\n    const projectSelections = document.createElement('select');\n    \n    const submitToDoBtn = document.createElement('button');\n\n    newToDoForm.setAttribute('id', 'newToDoForm');\n\n    //Input for To Do Title\n    toDoTitleInputDiv.classList.add('toDoTitleInputDiv');\n    newToDoForm.appendChild(toDoTitleInputDiv)\n\n    toDoTitleLabel.setAttribute('for', 'toDo-title');\n    toDoTitleLabel.innerHTML = 'To-Do Title: ';\n    toDoTitleInputDiv.appendChild(toDoTitleLabel);\n\n    toDoTitleInput.setAttribute('type', 'text');\n    toDoTitleInput.setAttribute('id', 'toDo-title');\n    toDoTitleInput.setAttribute('name', 'toDo-title');\n    toDoTitleInputDiv.appendChild(toDoTitleInput);\n\n    //Input for To Do Details\n    toDoDetailsInputDiv.classList.add('toDoDetailsInputDiv');\n    newToDoForm.appendChild(toDoDetailsInputDiv);\n\n    toDoDetailsLabel.setAttribute('for', 'toDo-details');\n    toDoDetailsLabel.innerHTML = 'Details: ';\n    toDoDetailsInputDiv.appendChild(toDoDetailsLabel);\n\n    toDoDetailsInput.setAttribute('type', 'text');\n    toDoDetailsInput.setAttribute('id', 'toDo-details');\n    toDoDetailsInput.setAttribute('name', 'toDo-details');\n    toDoDetailsInputDiv.appendChild(toDoDetailsInput);\n\n    //Input for To Do Notes\n\n    toDoNotesInputDiv.classList.add('toDoNotesInputDiv');\n    newToDoForm.appendChild(toDoNotesInputDiv);\n\n    toDoNotesLabel.setAttribute('for', 'toDo-notes');\n    toDoNotesLabel.innerHTML = 'Notes: ';\n    toDoNotesInputDiv.appendChild(toDoNotesLabel);\n\n    toDoNotesInput.setAttribute('type', 'text');\n    toDoNotesInput.setAttribute('id', 'toDo-notes');\n    toDoNotesInput.setAttribute('name', 'toDo-notes');\n    toDoNotesInputDiv.appendChild(toDoNotesInput);\n\n    //Input for project lesection\n\n    projectSelectionDiv.classList.add('projectSelectionDiv');\n    newToDoForm.appendChild(projectSelectionDiv);\n\n    projectSelectionLabel.setAttribute('for', 'project-options');\n    projectSelectionLabel.innerHTML = 'Select a Project: ';\n    projectSelectionDiv.appendChild(projectSelectionLabel);\n\n    projectSelections.setAttribute('id', 'project-options');\n    projectSelections.setAttribute('name', 'project-options');\n    projectSelectionDiv.appendChild(projectSelections);\n\n    //create selection option for each project\n\n    for(let i=0; i<_project_creation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Projects.projectLibrary.length; i++) {\n        const projectOption = document.createElement('option');\n        projectOption.setAttribute('value', [i]);\n        projectOption.innerHTML = `${_project_creation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Projects.projectLibrary[i].title}`;\n        projectSelections.appendChild(projectOption);\n    }\n\n    submitToDoBtn.setAttribute('type', 'button');\n    submitToDoBtn.innerHTML = 'Create new To-Do';\n    submitToDoBtn.setAttribute('id', 'createToDo');\n    newToDoForm.appendChild(submitToDoBtn);\n\n    todoLibrary.appendChild(newToDoForm);\n};\n\nconst removeToDoForm = () => {\n    const todoLibrary = document.getElementById('toDoLibrary');\n    todoLibrary.removeChild(newToDoForm);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    makeProjectForm,\n    makeToDoForm,\n    removeToDoForm\n});\n\n//# sourceURL=webpack://todo-list/./src/pages/forms.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst HomePage = (() => {\n    //four divs for projects, tasks, project banner, task display\n\n    const content = document.getElementById('content');\n    const projectLibrary = document.createElement('div');\n    const projectBanner = document.createElement('div');\n    const toDoLibrary = document.createElement('div');\n    const toDoDisplay = document.createElement('div');\n\n    projectLibrary.setAttribute('id', 'projectLibrary');\n    projectLibrary.classList.add('projectLibrary');\n    content.appendChild(projectLibrary);\n\n    projectBanner.setAttribute('id', 'projectBanner');\n    projectBanner.classList.add('projectBanner');\n    content.appendChild(projectBanner);\n\n    toDoLibrary.setAttribute('id', 'toDoLibrary');\n    toDoLibrary.classList.add('toDoLibrary');\n    content.appendChild(toDoLibrary);\n\n    toDoDisplay.setAttribute('id', 'toDoDisplay');\n    toDoDisplay.classList.add('toDoDisplay');\n    content.appendChild(toDoDisplay);\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ HomePage });\n\n//# sourceURL=webpack://todo-list/./src/pages/home.js?");

/***/ }),

/***/ "./src/project-creation.js":
/*!*********************************!*\
  !*** ./src/project-creation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-creation */ \"./src/todo-creation.js\");\n// create project object\n    //incudes title, date due, to-do array\n\n\nconst Projects = (() => {\n    const projectLibrary = [];\n    \n    \n\n    class Project {\n        constructor(title, dueDate){\n            this.title = document.getElementById('project-title').value;\n            this.dueDate = document.getElementById('project-dueDate').value;\n            this.toDoList = [];\n        }  \n    };\n\n    const addProjectToLibrary = (title, dueDate) => {\n        let newProject = new Project(title, dueDate);\n        projectLibrary.push(newProject);\n    }\n\n    function fillLibrary() {\n        for(let i=0; i<projectLibrary.length; i++) {\n            \n            newProjectLibraryCard(projectLibrary[i]);\n        }\n    }\n\n    function newProjectLibraryCard(item) {\n        const projectLibraryDiv = document.getElementById('projectLibrary');\n        const newProject = document.createElement('button');\n        const newProjectTitleDiv = document.createElement('div');\n        const newProjectDueDateDiv = document.createElement('div');\n\n        newProject.classList.add('project');\n        newProject.setAttribute('id', projectLibrary.indexOf(item));\n        newProject.setAttribute('type', 'button');\n        \n        //event listener to add selected to-do-list to display\n        newProject.addEventListener('click', () => {\n            let taskList = [];\n            taskList = projectLibrary[projectLibrary.indexOf(item)].toDoList;\n            _todo_creation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ToDos.fillToDoLibrary(taskList);\n        });\n\n        //project title display\n        newProjectTitleDiv.innerHTML = 'Project: ' + item.title;\n        newProjectTitleDiv.classList.add('projectTitle');\n        newProject.appendChild(newProjectTitleDiv);\n\n        //project due date display\n\n        newProjectDueDateDiv.innerHTML = 'Date Due: ' + item.dueDate;\n        newProjectDueDateDiv.classList.add('projectDueDate');\n        newProject.appendChild(newProjectDueDateDiv);\n\n        //add whole card to list\n\n        projectLibraryDiv.appendChild(newProject);\n\n    }\n\n    function clearProjectLibrary() {\n        const projectList = document.getElementById('projectLibrary');\n        const projects = document.querySelectorAll('.project');\n        projects.forEach(project => projectList.removeChild(project));\n    }\n\n\n    return { projectLibrary, \n        addProjectToLibrary,\n        newProjectLibraryCard,\n        fillLibrary,\n        clearProjectLibrary\n        };\n})();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({Projects});\n\n\n\n//# sourceURL=webpack://todo-list/./src/project-creation.js?");

/***/ }),

/***/ "./src/todo-creation.js":
/*!******************************!*\
  !*** ./src/todo-creation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_creation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-creation */ \"./src/project-creation.js\");\n\n\nconst ToDos = (() => {\n    //will be added to 'toDoList' in given project\n    //title, due date, details and notes\n    const getActiveProject = () => _project_creation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getActiveProject;\n    const todoLibrary = [];\n\n    class ToDo {\n        constructor() {\n            this.title = document.getElementById('toDo-title').value;\n            this.details = document.getElementById('toDo-details').value;\n            this.notes = document.getElementById('toDo-notes').value;\n        }\n    }\n\n    const addToDoToList = (title, details, notes) => {\n        \n        let newToDo = new ToDo(title, details, notes);\n        let selectedProject = document.getElementById('project-options').value;\n        _project_creation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Projects.projectLibrary[selectedProject].toDoList.push(newToDo);\n        \n    }\n\n    function fillToDoLibrary(taskList) {\n        clearToDoLibrary();\n        for(let i=0; i<taskList.length; i++) {\n            //create task card with taskList properties\n            newToDoLibraryCard(taskList[i]);\n        }\n    }\n\n    function newToDoLibraryCard(item) {\n        const toDoLibraryDiv = document.getElementById('toDoLibrary');\n        const newToDo = document.createElement('button');\n        const newToDoTitleDiv = document.createElement('div');\n        // const newToDoDetailsDiv = document.createElement('div');\n        // const newToDoNotesDiv = document.createElement('div');\n\n        newToDo.classList.add('toDo');\n        newToDo.setAttribute('id', 'toDo');\n        newToDo.setAttribute('type', 'button');\n\n        //event listener to add selected to-do to display\n\n        newToDoTitleDiv.innerHTML = item.title;\n        newToDoTitleDiv.classList.add('toDoTitle');\n        newToDo.appendChild(newToDoTitleDiv);\n\n        //add whole card to list\n\n        toDoLibraryDiv.appendChild(newToDo);\n    }\n\n    function clearToDoLibrary() {\n        const toDoList = document.getElementById('toDoLibrary');\n        const toDos = document.querySelectorAll('.toDo');\n        toDos.forEach(toDo => toDoList.removeChild(toDo));\n    }\n\n    return { getActiveProject,\n        addToDoToList,\n        todoLibrary,\n        fillToDoLibrary,\n        clearToDoLibrary }\n})();\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ToDos });\n\n//# sourceURL=webpack://todo-list/./src/todo-creation.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;