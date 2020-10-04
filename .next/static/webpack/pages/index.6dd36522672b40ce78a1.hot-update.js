webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Quiz() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    return setValue(value);\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_3__[\"quiz\"][currentIndex];\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: null,\n    \"aria-valuenow\": \"25\",\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"25%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, current ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, current.question)), current.answers.map(function (answer) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 15\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"], {\n      key: answer.value,\n      radio: true,\n      label: answer.txt,\n      name: \"checkboxRadioGroup\",\n      value: answer.value,\n      checked: value === answer.value,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }\n    }));\n  })) : null));\n}\n\n_s(Quiz, \"IpH9EftAIi6kesFuMv3XdsCfYrA=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImhhbmRsZUNoYW5nZSIsImUiLCJjdXJyZW50IiwicXVpeiIsInN0eWxlcyIsImZvbnRhbmRjZW50ZXIiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJ0eHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLENBQUQsQ0FGbkI7QUFBQSxNQUV0QkcsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUk3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFEO0FBQUEsUUFBTUwsS0FBTixRQUFNQSxLQUFOO0FBQUEsV0FBa0JDLFFBQVEsQ0FBQ0QsS0FBRCxDQUExQjtBQUFBLEdBQXJCOztBQUVBLE1BQU1NLE9BQU8sR0FBR0Msa0RBQUksQ0FBQ0wsWUFBRCxDQUFwQjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFTSw4REFBTSxDQUFDQyxhQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLFFBQUksRUFBQyxhQUZQO0FBR0UsU0FBSyxFQUFFLElBSFQ7QUFJRSxxQkFBYyxJQUpoQjtBQUtFLHFCQUFjLEdBTGhCO0FBTUUscUJBQWMsS0FOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBRkYsRUFjRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsT0FBTyxHQUNOLG1FQUNFLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNBLE9BQU8sQ0FBQ0ksUUFBakIsQ0FERixDQURGLEVBSUdKLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsTUFBRDtBQUFBLFdBQ25CLE1BQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDBEQUFEO0FBQ0UsU0FBRyxFQUFFQSxNQUFNLENBQUNiLEtBRGQ7QUFFRSxXQUFLLE1BRlA7QUFHRSxXQUFLLEVBQUVhLE1BQU0sQ0FBQ0MsR0FIaEI7QUFJRSxVQUFJLEVBQUMsb0JBSlA7QUFLRSxXQUFLLEVBQUVELE1BQU0sQ0FBQ2IsS0FMaEI7QUFNRSxhQUFPLEVBQUVBLEtBQUssS0FBS2EsTUFBTSxDQUFDYixLQU41QjtBQU9FLGNBQVEsRUFBRUksWUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEbUI7QUFBQSxHQUFwQixDQUpILENBRE0sR0FtQkosSUFwQk4sQ0FkRixDQURGO0FBdUNEOztHQTlDdUJOLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1aXouanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIENoZWNrYm94IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBxdWl6IH0gZnJvbSBcIi4uL2NvbnRlbnQvcXVpelwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6KCkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHsgdmFsdWUgfSkgPT4gc2V0VmFsdWUodmFsdWUpO1xuXG4gIGNvbnN0IGN1cnJlbnQgPSBxdWl6W2N1cnJlbnRJbmRleF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tbW9kYWxcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mb250YW5kY2VudGVyfT5RdWl6PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgdG9wc3BhY2VcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiXG4gICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgICBzdHlsZT17bnVsbH1cbiAgICAgICAgICBhcmlhLXZhbHVlbm93PVwiMjVcIlxuICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDI1JVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvcm0gY2xhc3NOYW1lPVwidG9wc3BhY2VcIj5cbiAgICAgICAge2N1cnJlbnQgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICA8c3Ryb25nPntjdXJyZW50LnF1ZXN0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAge2N1cnJlbnQuYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gKFxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGtleT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgcmFkaW9cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXthbnN3ZXIudHh0fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94UmFkaW9Hcm91cFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGFuc3dlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})