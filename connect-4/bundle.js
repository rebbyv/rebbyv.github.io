/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/Board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Column_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Column.jsx */ \"./client/src/components/Column.jsx\");\n\n\nvar Board = function Board(props) {\n  return React.createElement(\"div\", {\n    className: \"board\"\n  }, props.board.map(function (item, i) {\n    return React.createElement(_Column_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      col: item,\n      key: i,\n      id: i,\n      onClick: props.onClick,\n      winner: props.winner\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0JvYXJkLmpzeD8zNGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2x1bW4gZnJvbSAnLi9Db2x1bW4uanN4JztcblxudmFyIEJvYXJkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JvYXJkJz5cbiAgICAgIHtwcm9wcy5ib2FyZC5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIDxDb2x1bW4gY29sPXtpdGVtfSBrZXk9e2l9IGlkPXtpfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSB3aW5uZXI9e3Byb3BzLndpbm5lcn0vPlxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Board.jsx\n");

/***/ }),

/***/ "./client/src/components/Column.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Column.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Hole_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hole.jsx */ \"./client/src/components/Hole.jsx\");\n\n\nvar Column = function Column(props) {\n  return React.createElement(\"div\", {\n    className: \"column\",\n    onClick: function onClick() {\n      if (!props.winner) {\n        props.onClick(props.id);\n      }\n    }\n  }, props.col.map(function (item, i) {\n    return React.createElement(_Hole_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      hole: item,\n      key: i\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ29sdW1uLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Db2x1bW4uanN4PzIwOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvbGUgZnJvbSAnLi9Ib2xlLmpzeCc7XG5cbnZhciBDb2x1bW4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGlmICghcHJvcHMud2lubmVyKSB7XG4gICAgICAgICAgcHJvcHMub25DbGljayhwcm9wcy5pZClcbiAgICAgICAgfVxuICAgICAgfX0+XG4gICAgICB7cHJvcHMuY29sLm1hcCgoaXRlbSwgaSkgPT4gPEhvbGUgaG9sZT17aXRlbX0ga2V5PXtpfS8+ICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/Column.jsx\n");

/***/ }),

/***/ "./client/src/components/GameInfo.jsx":
/*!********************************************!*\
  !*** ./client/src/components/GameInfo.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar GameInfo = function GameInfo(props) {\n  function renderTurnMsg() {\n    if (props.turnCount === 0) {\n      return \"\".concat(props.goesFirst, \" goes first\");\n    } else if (props.winner === 'tie') {\n      return \"It's a tie!\";\n    } else if (props.winner) {\n      return \"\".concat(props.winner, \" wins the game!\");\n    } else {\n      return \"\".concat(props.turn, \" goes next\");\n    }\n  }\n\n  var header = renderTurnMsg();\n  return React.createElement(\"div\", {\n    className: \"gameInfo\"\n  }, React.createElement(\"h2\", null, \" \", header, \" \"), props.winner ? React.createElement(\"button\", {\n    onClick: function onClick() {\n      return props.newGame();\n    }\n  }, \"Play a New Round!\") : React.createElement(\"h3\", null, \"Choose a column\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvR2FtZUluZm8uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0dhbWVJbmZvLmpzeD82MmIwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lSW5mbyA9IChwcm9wcykgPT4ge1xuICBmdW5jdGlvbiByZW5kZXJUdXJuTXNnKCkge1xuICAgIGlmIChwcm9wcy50dXJuQ291bnQgPT09IDApIHtcbiAgICAgIHJldHVybiBgJHtwcm9wcy5nb2VzRmlyc3R9IGdvZXMgZmlyc3RgO1xuICAgIH0gZWxzZSBpZiAocHJvcHMud2lubmVyID09PSAndGllJykge1xuICAgICAgcmV0dXJuIGBJdCdzIGEgdGllIWBcbiAgICB9IGVsc2UgaWYgKHByb3BzLndpbm5lcikge1xuICAgICAgcmV0dXJuIGAke3Byb3BzLndpbm5lcn0gd2lucyB0aGUgZ2FtZSFgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHtwcm9wcy50dXJufSBnb2VzIG5leHRgXG4gICAgfVxuICB9IFxuXG4gIHZhciBoZWFkZXIgPSByZW5kZXJUdXJuTXNnKCk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdnYW1lSW5mbyc+XG4gICAgICA8aDI+IHtoZWFkZXJ9IDwvaDI+XG4gICAgICB7cHJvcHMud2lubmVyID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5uZXdHYW1lKCl9PlBsYXkgYSBOZXcgUm91bmQhPC9idXR0b24+IDogPGgzPkNob29zZSBhIGNvbHVtbjwvaDM+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVJbmZvOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/GameInfo.jsx\n");

/***/ }),

/***/ "./client/src/components/Hole.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Hole.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Hole = function Hole(props) {\n  var styles;\n\n  if (props.hole === 'Y') {\n    styles = {\n      backgroundColor: '#e4b527'\n    };\n  } else if (props.hole === 'R') {\n    styles = {\n      backgroundColor: '#f43636'\n    };\n  }\n\n  return React.createElement(\"div\", {\n    className: \"addRadius\",\n    style: styles\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hole);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSG9sZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSG9sZS5qc3g/YzcwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSG9sZSA9IChwcm9wcykgPT4ge1xuICB2YXIgc3R5bGVzO1xuICBcbiAgaWYgKHByb3BzLmhvbGUgPT09ICdZJykge1xuICAgIHN0eWxlcyA9IHtiYWNrZ3JvdW5kQ29sb3I6ICcjZTRiNTI3J31cbiAgfSBlbHNlIGlmIChwcm9wcy5ob2xlID09PSAnUicpIHtcbiAgICBzdHlsZXMgPSB7YmFja2dyb3VuZENvbG9yOiAnI2Y0MzYzNid9XG4gIH0gXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkUmFkaXVzJyBzdHlsZT17c3R5bGVzfT48L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Hole.jsx\n");

/***/ }),

/***/ "./client/src/components/scoreBoard.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/scoreBoard.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ScoreBoard = function ScoreBoard(props) {\n  return React.createElement(\"div\", {\n    className: \"scoreboard\"\n  }, React.createElement(\"h2\", null, \"Number of Wins:\"), React.createElement(\"h6\", {\n    className: \"yellow-wins\"\n  }, \" Yellow - \", props.numYellowWins), React.createElement(\"h6\", {\n    className: \"red-wins\"\n  }, \" Red - \", props.numRedWins));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScoreBoard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc2NvcmVCb2FyZC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc2NvcmVCb2FyZC5qc3g/ZmY2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2NvcmVCb2FyZCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzY29yZWJvYXJkJz5cbiAgICAgIDxoMj5OdW1iZXIgb2YgV2luczo8L2gyPlxuICAgICAgPGg2IGNsYXNzTmFtZT0neWVsbG93LXdpbnMnPiBZZWxsb3cgLSB7cHJvcHMubnVtWWVsbG93V2luc308L2g2PlxuICAgICAgPGg2IGNsYXNzTmFtZT0ncmVkLXdpbnMnPiBSZWQgLSB7cHJvcHMubnVtUmVkV2luc308L2g2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlQm9hcmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/scoreBoard.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_GameInfo_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/GameInfo.jsx */ \"./client/src/components/GameInfo.jsx\");\n/* harmony import */ var _components_Board_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Board.jsx */ \"./client/src/components/Board.jsx\");\n/* harmony import */ var _components_Column_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Column.jsx */ \"./client/src/components/Column.jsx\");\n/* harmony import */ var _components_Hole_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Hole.jsx */ \"./client/src/components/Hole.jsx\");\n/* harmony import */ var _components_scoreBoard_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scoreBoard.jsx */ \"./client/src/components/scoreBoard.jsx\");\n/* harmony import */ var _solvers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solvers.js */ \"./client/src/solvers.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n //import serverRequests from './index.js';\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      turnCount: 0,\n      turn: 'Yellow',\n      goesFirst: 'Yellow',\n      board: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]],\n      winner: null,\n      Yellow: 0,\n      Red: 0\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"turnClick\",\n    value: function turnClick(id) {\n      var color = this.state.turn;\n      var newBoard = this.state.board;\n\n      for (var i = 5; i >= 0; i--) {\n        if (newBoard[id][i] === 0) {\n          newBoard[id][i] = color.slice(0, 1);\n          break;\n        }\n      }\n\n      if (this.state.turnCount > 5) {\n        if (this.isWinner(color.slice(0, 1), newBoard)) {\n          this.gameEnd(color);\n        } else if (this.state.turnCount + 1 === 42) {\n          this.gameEnd('tie');\n        } else {\n          this.changeTurn(color, newBoard);\n        }\n      } else {\n        this.changeTurn(color, newBoard);\n      }\n    }\n  }, {\n    key: \"changeTurn\",\n    value: function changeTurn(color, newBoard) {\n      var nextTurn = color === 'Yellow' ? 'Red' : 'Yellow';\n      this.setState({\n        turnCount: ++this.state.turnCount,\n        turn: nextTurn,\n        board: newBoard\n      });\n    }\n  }, {\n    key: \"isWinner\",\n    value: function isWinner(color, board) {\n      if (_solvers_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].colWin(color, board)) {\n        return true;\n      } else if (_solvers_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].rowWin(color, board)) {\n        return true;\n      } else if (_solvers_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].diagWinLR(color, board)) {\n        return true;\n      } else if (_solvers_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].diagWinRL(color, board)) {\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"gameEnd\",\n    value: function gameEnd(winner) {\n      // serverRequests.post(winner, (error) => {\n      //   if (error) {\n      //     console.log(error) \n      //   } else {\n      if (winner === 'Yellow') {\n        this.setState({\n          winner: winner,\n          Yellow: ++this.state.Yellow\n        });\n      } else if (winner === 'Red') {\n        this.setState({\n          winner: winner,\n          Red: ++this.state.Red\n        });\n      } else {\n        this.setState({\n          winner: winner\n        });\n      } //}\n      //})\n\n    }\n  }, {\n    key: \"newGame\",\n    value: function newGame() {\n      var goesFirst = this.state.goesFirst === 'Yellow' ? 'Red' : 'Yellow';\n      this.setState({\n        turnCount: 0,\n        turn: goesFirst,\n        goesFirst: goesFirst,\n        board: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]],\n        winner: null\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"h1\", null, \" Connect 4 \"), React.createElement(\"div\", {\n        className: \"board-score\"\n      }, React.createElement(_components_GameInfo_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        turn: this.state.turn,\n        turnCount: this.state.turnCount,\n        goesFirst: this.state.goesFirst,\n        winner: this.state.winner,\n        newGame: this.newGame.bind(this)\n      }), React.createElement(_components_Board_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        board: this.state.board,\n        winner: this.state.winner,\n        onClick: this.turnClick.bind(this)\n      }), React.createElement(_components_scoreBoard_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        numRedWins: this.state.Red,\n        numYellowWins: this.state.Yellow\n      })));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('react-goes-here'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVJbmZvIGZyb20gJy4vY29tcG9uZW50cy9HYW1lSW5mby5qc3gnO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9Cb2FyZC5qc3gnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbXBvbmVudHMvQ29sdW1uLmpzeCc7XG5pbXBvcnQgSG9sZSBmcm9tICcuL2NvbXBvbmVudHMvSG9sZS5qc3gnO1xuaW1wb3J0IFNjb3JlQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL3Njb3JlQm9hcmQuanN4JztcbmltcG9ydCBzb2x2ZXJzIGZyb20gJy4vc29sdmVycy5qcyc7XG4vL2ltcG9ydCBzZXJ2ZXJSZXF1ZXN0cyBmcm9tICcuL2luZGV4LmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHVybkNvdW50OiAwLFxuICAgICAgdHVybjogJ1llbGxvdycsXG4gICAgICBnb2VzRmlyc3Q6ICdZZWxsb3cnLFxuICAgICAgYm9hcmQ6IFtbMCwwLDAsMCwwLDBdLCBbMCwwLDAsMCwwLDBdLCBbMCwwLDAsMCwwLDBdLCBbMCwwLDAsMCwwLDBdLCBbMCwwLDAsMCwwLDBdLCBbMCwwLDAsMCwwLDBdLCBbMCwwLDAsMCwwLDBdXSxcbiAgICAgIHdpbm5lcjogbnVsbCxcbiAgICAgIFllbGxvdzogMCxcbiAgICAgIFJlZDogMFxuICAgIH1cbiAgfVxuICBcbiAgdHVybkNsaWNrKGlkKSB7XG4gICAgdmFyIGNvbG9yID0gdGhpcy5zdGF0ZS50dXJuO1xuICAgIHZhciBuZXdCb2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQ7XG4gICAgZm9yIChsZXQgaSA9IDU7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAobmV3Qm9hcmRbaWRdW2ldID09PSAwKSB7XG4gICAgICAgIG5ld0JvYXJkW2lkXVtpXSA9IGNvbG9yLnNsaWNlKDAsIDEpOyBcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUudHVybkNvdW50ID4gNSkge1xuICAgICAgaWYgKHRoaXMuaXNXaW5uZXIoY29sb3Iuc2xpY2UoMCwgMSksIG5ld0JvYXJkKSkge1xuICAgICAgICB0aGlzLmdhbWVFbmQoY29sb3IpO1xuICAgICAgfSBlbHNlIGlmICgodGhpcy5zdGF0ZS50dXJuQ291bnQgKyAxKSA9PT0gNDIpIHtcbiAgICAgICAgdGhpcy5nYW1lRW5kKCd0aWUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVHVybihjb2xvciwgbmV3Qm9hcmQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVR1cm4oY29sb3IsIG5ld0JvYXJkKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VUdXJuKGNvbG9yLCBuZXdCb2FyZCkge1xuICAgIHZhciBuZXh0VHVybiA9IChjb2xvciA9PT0gJ1llbGxvdycpID8gJ1JlZCc6ICdZZWxsb3cnO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIHR1cm5Db3VudDogKyt0aGlzLnN0YXRlLnR1cm5Db3VudCxcbiAgICAgIHR1cm46IG5leHRUdXJuLFxuICAgICAgYm9hcmQ6IG5ld0JvYXJkXG4gICAgfSk7XG4gIH1cbiAgXG4gIGlzV2lubmVyKGNvbG9yLCBib2FyZCkge1xuICAgIGlmIChzb2x2ZXJzLmNvbFdpbihjb2xvciwgYm9hcmQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHNvbHZlcnMucm93V2luKGNvbG9yLCBib2FyZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc29sdmVycy5kaWFnV2luTFIoY29sb3IsIGJvYXJkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzb2x2ZXJzLmRpYWdXaW5STChjb2xvciwgYm9hcmQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVFbmQod2lubmVyKSB7XG4gICAgLy8gc2VydmVyUmVxdWVzdHMucG9zdCh3aW5uZXIsIChlcnJvcikgPT4ge1xuICAgIC8vICAgaWYgKGVycm9yKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKSBcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh3aW5uZXIgPT09ICdZZWxsb3cnKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aW5uZXI6IHdpbm5lcixcbiAgICAgICAgICAgIFllbGxvdzogKyt0aGlzLnN0YXRlLlllbGxvd1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAod2lubmVyID09PSAnUmVkJykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgd2lubmVyOiB3aW5uZXIsXG4gICAgICAgICAgICBSZWQ6ICsrdGhpcy5zdGF0ZS5SZWRcbiAgICAgICAgICB9KSBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdpbm5lcjogd2lubmVyXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgLy99XG4gICAgLy99KVxuICB9XG5cbiAgbmV3R2FtZSgpIHtcbiAgICB2YXIgZ29lc0ZpcnN0ID0gKHRoaXMuc3RhdGUuZ29lc0ZpcnN0ID09PSAnWWVsbG93JykgPyAnUmVkJyA6ICdZZWxsb3cnO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdHVybkNvdW50OiAwLFxuICAgICAgdHVybjogZ29lc0ZpcnN0LFxuICAgICAgZ29lc0ZpcnN0OiBnb2VzRmlyc3QsXG4gICAgICBib2FyZDogW1swLDAsMCwwLDAsMF0sIFswLDAsMCwwLDAsMF0sIFswLDAsMCwwLDAsMF0sIFswLDAsMCwwLDAsMF0sIFswLDAsMCwwLDAsMF0sIFswLDAsMCwwLDAsMF0sIFswLDAsMCwwLDAsMF1dLFxuICAgICAgd2lubmVyOiBudWxsLFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT4gQ29ubmVjdCA0IDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2FyZC1zY29yZSc+XG4gICAgICAgICAgPEdhbWVJbmZvIFxuICAgICAgICAgICAgdHVybj17dGhpcy5zdGF0ZS50dXJufVxuICAgICAgICAgICAgdHVybkNvdW50PXt0aGlzLnN0YXRlLnR1cm5Db3VudH0gXG4gICAgICAgICAgICBnb2VzRmlyc3Q9e3RoaXMuc3RhdGUuZ29lc0ZpcnN0fSBcbiAgICAgICAgICAgIHdpbm5lcj17dGhpcy5zdGF0ZS53aW5uZXJ9XG4gICAgICAgICAgICBuZXdHYW1lPXt0aGlzLm5ld0dhbWUuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPiBcbiAgICAgICAgICA8Qm9hcmQgYm9hcmQ9e3RoaXMuc3RhdGUuYm9hcmR9IHdpbm5lcj17dGhpcy5zdGF0ZS53aW5uZXJ9IG9uQ2xpY2s9e3RoaXMudHVybkNsaWNrLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8U2NvcmVCb2FyZCBudW1SZWRXaW5zPXt0aGlzLnN0YXRlLlJlZH0gbnVtWWVsbG93V2lucz17dGhpcy5zdGF0ZS5ZZWxsb3d9Lz5cbiAgICAgICAgPC9kaXY+ICAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWdvZXMtaGVyZScpKTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUZBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7Ozs7QUFoSEE7QUFDQTtBQW1IQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ }),

/***/ "./client/src/solvers.js":
/*!*******************************!*\
  !*** ./client/src/solvers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar solvers = {\n  rowWin: (color, board) => {\n    var result = false;\n    var count = 0;\n    for (let r = 5; r >= 0; r--) {\n      for (let c = 0; c < 7; c++) {\n        if (board[c][r] === color) {\n          count++;\n        } else {\n          count = 0;\n        }\n        if (count === 4) {\n          result = true;\n          break;\n        }\n      }\n    } \n    return result;\n  },\n\n  colWin: (color, board) => {\n    var win = color.repeat(4)\n    var result = false;\n    board.forEach((item) => {\n      if (item.join('').includes(win)) {\n        result = true;\n      }\n    })\n    return result;\n  },\n\n  diagWinLR: (color, board) => {\n    var result = false;\n    var col = 0;\n    var row = 2;\n    var count = 0;\n\n    while ((col - row) < 4) {\n      for (let i = row, tempCol = col; i < 6 && tempCol < 7; i++, tempCol++) {\n        if (board[tempCol][i] === color) {\n          count++\n        } else {\n          count = 0;\n        }\n        if (count === 4) return true;\n      }\n\n      if (col >= 0 && row === 0) {\n        col++;\n      }\n      if (row > 0) {\n        row--;\n      }\n    }\n    return result;\n  },\n\n  diagWinRL: (color, board) => {\n    var result = false;\n    var col = 6;\n    var row = 2;\n    var count = 0;\n\n    while ((col - row) > 2) {\n      for (let i = row, tempCol = col; i < 6 && tempCol >= 0; i++, tempCol--) {\n        if (board[tempCol][i] === color) {\n          count++\n        } else {\n          count = 0;\n        }\n        if (count === 4) return true;\n      }\n\n      if (col <= 6 && row === 0) {\n        col--;\n      }\n      if (row > 0) {\n        row--;\n      }\n    }\n    return result;\n  },\n}\n \n/* harmony default export */ __webpack_exports__[\"default\"] = (solvers);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL3NvbHZlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL3NvbHZlcnMuanM/ZjcyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc29sdmVycyA9IHtcbiAgcm93V2luOiAoY29sb3IsIGJvYXJkKSA9PiB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgciA9IDU7IHIgPj0gMDsgci0tKSB7XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDc7IGMrKykge1xuICAgICAgICBpZiAoYm9hcmRbY11bcl0gPT09IGNvbG9yKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ID09PSA0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBjb2xXaW46IChjb2xvciwgYm9hcmQpID0+IHtcbiAgICB2YXIgd2luID0gY29sb3IucmVwZWF0KDQpXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGJvYXJkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmpvaW4oJycpLmluY2x1ZGVzKHdpbikpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgZGlhZ1dpbkxSOiAoY29sb3IsIGJvYXJkKSA9PiB7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIHZhciBjb2wgPSAwO1xuICAgIHZhciByb3cgPSAyO1xuICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICB3aGlsZSAoKGNvbCAtIHJvdykgPCA0KSB7XG4gICAgICBmb3IgKGxldCBpID0gcm93LCB0ZW1wQ29sID0gY29sOyBpIDwgNiAmJiB0ZW1wQ29sIDwgNzsgaSsrLCB0ZW1wQ29sKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3RlbXBDb2xdW2ldID09PSBjb2xvcikge1xuICAgICAgICAgIGNvdW50KytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50ID09PSA0KSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbCA+PSAwICYmIHJvdyA9PT0gMCkge1xuICAgICAgICBjb2wrKztcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPiAwKSB7XG4gICAgICAgIHJvdy0tO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGRpYWdXaW5STDogKGNvbG9yLCBib2FyZCkgPT4ge1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICB2YXIgY29sID0gNjtcbiAgICB2YXIgcm93ID0gMjtcbiAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgd2hpbGUgKChjb2wgLSByb3cpID4gMikge1xuICAgICAgZm9yIChsZXQgaSA9IHJvdywgdGVtcENvbCA9IGNvbDsgaSA8IDYgJiYgdGVtcENvbCA+PSAwOyBpKyssIHRlbXBDb2wtLSkge1xuICAgICAgICBpZiAoYm9hcmRbdGVtcENvbF1baV0gPT09IGNvbG9yKSB7XG4gICAgICAgICAgY291bnQrK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnQgPT09IDQpIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sIDw9IDYgJiYgcm93ID09PSAwKSB7XG4gICAgICAgIGNvbC0tO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA+IDApIHtcbiAgICAgICAgcm93LS07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG59XG4gXG5leHBvcnQgZGVmYXVsdCBzb2x2ZXJzO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/solvers.js\n");

/***/ })

/******/ });