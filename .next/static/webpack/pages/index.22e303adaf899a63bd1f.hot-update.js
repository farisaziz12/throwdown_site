webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Quiz() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    return setValue(value);\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_3__[\"quiz\"][currentIndex];\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: null,\n    \"aria-valuenow\": \"25\",\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"25%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, current ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Selected value: \", __jsx(\"b\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 31\n    }\n  }, value)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"], {\n    radio: true,\n    label: \"Choose this\",\n    name: \"checkboxRadioGroup\",\n    value: \"this\",\n    checked: value === \"this\",\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  }))) : null));\n}\n\n_s(Quiz, \"IpH9EftAIi6kesFuMv3XdsCfYrA=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImhhbmRsZUNoYW5nZSIsImUiLCJjdXJyZW50IiwicXVpeiIsInN0eWxlcyIsImZvbnRhbmRjZW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLENBQUQsQ0FGbkI7QUFBQSxNQUV0QkcsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUk3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFEO0FBQUEsUUFBTUwsS0FBTixRQUFNQSxLQUFOO0FBQUEsV0FBa0JDLFFBQVEsQ0FBQ0QsS0FBRCxDQUExQjtBQUFBLEdBQXJCOztBQUVBLE1BQU1NLE9BQU8sR0FBR0Msa0RBQUksQ0FBQ0wsWUFBRCxDQUFwQjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFTSw4REFBTSxDQUFDQyxhQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLFFBQUksRUFBQyxhQUZQO0FBR0UsU0FBSyxFQUFFLElBSFQ7QUFJRSxxQkFBYyxJQUpoQjtBQUtFLHFCQUFjLEdBTGhCO0FBTUUscUJBQWMsS0FOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBRkYsRUFjRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsT0FBTyxHQUNOLG1FQUNFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSU4sS0FBSixDQURsQixDQURGLEVBS0UsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxTQUFLLE1BRFA7QUFFRSxTQUFLLEVBQUMsYUFGUjtBQUdFLFFBQUksRUFBQyxvQkFIUDtBQUlFLFNBQUssRUFBQyxNQUpSO0FBS0UsV0FBTyxFQUFFQSxLQUFLLEtBQUssTUFMckI7QUFNRSxZQUFRLEVBQUVJLFlBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FETSxHQWlCSixJQWxCTixDQWRGLENBREY7QUFxQ0Q7O0dBNUN1Qk4sSTs7S0FBQUEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUXVpei5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgQ2hlY2tib3ggfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHF1aXogfSBmcm9tIFwiLi4vY29udGVudC9xdWl6XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgeyB2YWx1ZSB9KSA9PiBzZXRWYWx1ZSh2YWx1ZSk7XG5cbiAgY29uc3QgY3VycmVudCA9IHF1aXpbY3VycmVudEluZGV4XTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmUtaW5mby1tb2RhbFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZvbnRhbmRjZW50ZXJ9PlF1aXo8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgIHN0eWxlPXtudWxsfVxuICAgICAgICAgIGFyaWEtdmFsdWVub3c9XCIyNVwiXG4gICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgMjUlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9ybSBjbGFzc05hbWU9XCJ0b3BzcGFjZVwiPlxuICAgICAgICB7Y3VycmVudCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgIFNlbGVjdGVkIHZhbHVlOiA8Yj57dmFsdWV9PC9iPlxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgcmFkaW9cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSB0aGlzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3hSYWRpb0dyb3VwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInRoaXNcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlID09PSBcInRoaXNcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})