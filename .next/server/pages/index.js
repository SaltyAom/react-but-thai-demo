module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_but_thai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-but-thai */ \"react-but-thai\");\n/* harmony import */ var react_but_thai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_but_thai__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/aomkhunpanitchot/Documents/web/react-thai-demo/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst แอป = () => {\n  let [เคาน์เตอร์, เซ็ตเคาน์เตอร์] = Object(react_but_thai__WEBPACK_IMPORTED_MODULE_1__[\"ใช้สถานะ\"])(0);\n\n  let เพิ่มเคาน์เตอร์ทีละหนึ่ง = () => {\n    เซ็ตเคาน์เตอร์(เคาน์เตอร์ + 1);\n  };\n\n  return __jsx(react_but_thai__WEBPACK_IMPORTED_MODULE_1__[\"ชิ้นส่วน\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, \"\\u0E15\\u0E2D\\u0E1A\\u0E2A\\u0E19\\u0E2D\\u0E07\\u0E41\\u0E15\\u0E48\\u0E44\\u0E17\\u0E22\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, \"\\u0E40\\u0E04\\u0E32\\u0E19\\u0E4C\\u0E40\\u0E15\\u0E2D\\u0E23\\u0E4C\"), __jsx(\"button\", {\n    onClick: เพิ่มเคาน์เตอร์ทีละหนึ่ง,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, เคาน์เตอร์));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (แอป);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIuC5geC4reC4myIsIuC5gOC4hOC4suC4meC5jOC5gOC4leC4reC4o+C5jCIsIuC5gOC4i+C5h+C4leC5gOC4hOC4suC4meC5jOC5gOC4leC4reC4o+C5jCIsIuC5g+C4iuC5ieC4quC4luC4suC4meC4sCIsIuC5gOC4nuC4tOC5iOC4oeC5gOC4hOC4suC4meC5jOC5gOC4leC4reC4o+C5jOC4l+C4teC4peC4sOC4q+C4meC4tuC5iOC4hyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsTUFBTTtBQUNkLE1BQUksQ0FBQ0MsVUFBRCxFQUFhQyxjQUFiLElBQStCQywrREFBUSxDQUFDLENBQUQsQ0FBM0M7O0FBRUEsTUFBSUMsd0JBQXdCLEdBQUcsTUFBTTtBQUNqQ0Ysa0JBQWMsQ0FBQ0QsVUFBVSxHQUFHLENBQWQsQ0FBZDtBQUNILEdBRkQ7O0FBSUEsU0FDSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNGQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRUFGSixFQUdJO0FBQVEsV0FBTyxFQUFFRyx3QkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSCxVQURMLENBSEosQ0FESjtBQVNILENBaEJEOztBQWtCZUQsa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IOC5g+C4iuC5ieC4quC4luC4suC4meC4sCwg4LiK4Li04LmJ4LiZ4Liq4LmI4Lin4LiZIH0gZnJvbSAncmVhY3QtYnV0LXRoYWknXG5cbmNvbnN0IOC5geC4reC4myA9ICgpID0+IHtcbiAgICBsZXQgW+C5gOC4hOC4suC4meC5jOC5gOC4leC4reC4o+C5jCwg4LmA4LiL4LmH4LiV4LmA4LiE4Liy4LiZ4LmM4LmA4LiV4Lit4Lij4LmMXSA9IOC5g+C4iuC5ieC4quC4luC4suC4meC4sCgwKVxuXG4gICAgbGV0IOC5gOC4nuC4tOC5iOC4oeC5gOC4hOC4suC4meC5jOC5gOC4leC4reC4o+C5jOC4l+C4teC4peC4sOC4q+C4meC4tuC5iOC4hyA9ICgpID0+IHtcbiAgICAgICAg4LmA4LiL4LmH4LiV4LmA4LiE4Liy4LiZ4LmM4LmA4LiV4Lit4Lij4LmMKOC5gOC4hOC4suC4meC5jOC5gOC4leC4reC4o+C5jCArIDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPOC4iuC4tOC5ieC4meC4quC5iOC4p+C4mT5cbiAgICAgICAgICAgIDxoMT7guJXguK3guJrguKrguJnguK3guIfguYHguJXguYjguYTguJfguKI8L2gxPlxuICAgICAgICAgICAgPHA+4LmA4LiE4Liy4LiZ4LmM4LmA4LiV4Lit4Lij4LmMPC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXvguYDguJ7guLTguYjguKHguYDguITguLLguJnguYzguYDguJXguK3guKPguYzguJfguLXguKXguLDguKvguJnguLbguYjguId9PlxuICAgICAgICAgICAgICAgIHvguYDguITguLLguJnguYzguYDguJXguK3guKPguYx9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC/guIrguLTguYnguJnguKrguYjguKfguJk+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCDguYHguK3guJtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-but-thai":
/*!*********************************!*\
  !*** external "react-but-thai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-but-thai\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1idXQtdGhhaVwiPzMzNzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYnV0LXRoYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1idXQtdGhhaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-but-thai\n");

/***/ })

/******/ });