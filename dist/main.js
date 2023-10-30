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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _project_creation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-creation */ \"./src/project-creation.js\");\n//import FILE from './source';\n\n//to use we run FILE.thingAsWrittenInFile\n\n\n\n\n_pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].makePage;\n\nconst createNewProject = document.getElementById('createProject');\n\ncreateNewProject.addEventListener('click', write);\n\nfunction write() {\n    \n    _project_creation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Projects.addProjectToLibrary();\n    console.log(_project_creation__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Projects.projectLibrary);\n    document.getElementById('newProjectForm').reset();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst makePage = (() => {\n    const content = document.getElementById('content');\n    const newProjectForm = document.createElement('form');\n    const titleLabel = document.createElement('label');\n    const titleInput = document.createElement('input');\n    const dueDateLabel = document.createElement('label');\n    const dueDateInput = document.createElement('input');\n    const submitProjectBtn = document.createElement('button');\n\n    newProjectForm.setAttribute('id', 'newProjectForm');\n\n    titleLabel.setAttribute('for', 'project-title')\n    titleLabel.innerHTML = 'Project Title';\n    newProjectForm.appendChild(titleLabel);\n\n    titleInput.setAttribute('type', 'text');\n    titleInput.setAttribute('id', 'project-title');\n    titleInput.setAttribute('name', 'project-title');\n    newProjectForm.appendChild(titleInput);\n\n    dueDateLabel.setAttribute('for', 'project-dueDate')\n    dueDateLabel.innerHTML = 'Project Due Date';\n    newProjectForm.appendChild(dueDateLabel);\n\n    dueDateInput.setAttribute('type', 'text');\n    dueDateInput.setAttribute('id', 'project-dueDate');\n    dueDateInput.setAttribute('name', 'project-dueDate');\n    newProjectForm.appendChild(dueDateInput);\n\n    submitProjectBtn.setAttribute('type', 'button');\n    submitProjectBtn.innerHTML = 'Create New Project';\n    submitProjectBtn.setAttribute('id', 'createProject')\n    newProjectForm.appendChild(submitProjectBtn);\n\n    content.appendChild(newProjectForm);\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({makePage});\n\n//# sourceURL=webpack://todo-list/./src/pages/home.js?");

/***/ }),

/***/ "./src/project-creation.js":
/*!*********************************!*\
  !*** ./src/project-creation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// create project object\n    //incudes title, date due, to-do titles\n\n\nconst Projects = (() => {\n    const projectLibrary = [];\n    \n\n    class Project {\n        constructor(title, dueDate){\n            this.title = document.getElementById('project-title').value;\n            this.dueDate = document.getElementById('project-dueDate').value;\n        }  \n    };\n\n    const addProjectToLibrary = (title, dueDate) => {\n        let newProject = new Project(title, dueDate);\n        projectLibrary.push(newProject);\n    }\n\n    let counter = 0;\n\n    const addOne = () => {\n        counter += 1;\n        console.log(counter);\n    }\n\n    return { projectLibrary, \n        addOne,\n        addProjectToLibrary,\n        counter };\n})();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({Projects});\n\n//# sourceURL=webpack://todo-list/./src/project-creation.js?");

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
/******/ 			// no module.id needed
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