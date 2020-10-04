webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Quiz() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      done = _useState3[0],\n      setDone = _useState3[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    setValue(value);\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n    quizResults[currentIndex] = value;\n    localStorage.setItem(\"quizResults\", JSON.stringify(quizResults));\n  };\n\n  var handleCalculateResult = function handleCalculateResult() {\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n    console.log(quizResults);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    localStorage.setItem(\"quizResults\", JSON.stringify([]));\n  }, []);\n\n  var handleNext = function handleNext() {\n    var next = _content_quiz__WEBPACK_IMPORTED_MODULE_3__[\"quiz\"][currentIndex + 1];\n\n    if (next) {\n      setValue(\"\");\n      setCurrentIndex(currentIndex + 1);\n    } else {\n      setDone(true);\n      handleCalculateResult();\n    }\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_3__[\"quiz\"][currentIndex];\n  var percentDone = Math.round((currentIndex + 1) / _content_quiz__WEBPACK_IMPORTED_MODULE_3__[\"quiz\"].length * 100);\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(percentDone, \"%\")\n    },\n    \"aria-valuenow\": percentDone,\n    \"aria-valuemin\": \"\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, percentDone, \"%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, current ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }, current.question)), current.answers.map(function (answer) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 15\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"], {\n      key: answer.value,\n      radio: true,\n      label: answer.txt,\n      name: \"checkboxRadioGroup\",\n      value: answer.value,\n      checked: value === answer.value,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }));\n  })) : null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    disabled: !value,\n    onClick: handleNext,\n    type: \"button\",\n    className: \"btn btn-success center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \"Next\"))));\n}\n\n_s(Quiz, \"yG2m01TbynmUxhOLeuBcTFblNGk=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImRvbmUiLCJzZXREb25lIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInF1aXpSZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoYW5kbGVDYWxjdWxhdGVSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiaGFuZGxlTmV4dCIsIm5leHQiLCJxdWl6IiwiY3VycmVudCIsInBlcmNlbnREb25lIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwic3R5bGVzIiwiZm9udGFuZGNlbnRlciIsIndpZHRoIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwidHh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxDQUFELENBRm5CO0FBQUEsTUFFdEJHLFlBRnNCO0FBQUEsTUFFUkMsZUFGUTs7QUFBQSxtQkFHTEosc0RBQVEsQ0FBQyxLQUFELENBSEg7QUFBQSxNQUd0QkssSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBSzdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsUUFBa0I7QUFBQSxRQUFaUCxLQUFZLFFBQVpBLEtBQVk7QUFDckNDLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0EsUUFBTVEsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFB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Q0FBQ2pDLEtBTjVCO0FBT0UsY0FBUSxFQUFFTSxZQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURtQjtBQUFBLEdBQXBCLENBSkgsQ0FETSxHQW1CSixJQXBCTixFQXFCRSxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxZQUFRLEVBQUUsQ0FBQ04sS0FEYjtBQUVFLFdBQU8sRUFBRW1CLFVBRlg7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLGFBQVMsRUFBQyxzQ0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FyQkYsQ0FkRixDQURGO0FBaUREOztHQXBGdUJyQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RdWl6LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIENoZWNrYm94IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBxdWl6IH0gZnJvbSBcIi4uL2NvbnRlbnQvcXVpelwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6KCkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkb25lLCBzZXREb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgeyB2YWx1ZSB9KSA9PiB7XG4gICAgc2V0VmFsdWUodmFsdWUpO1xuICAgIGNvbnN0IHF1aXpSZXN1bHRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1aXpSZXN1bHRzXCIpKTtcbiAgICBxdWl6UmVzdWx0c1tjdXJyZW50SW5kZXhdID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWl6UmVzdWx0c1wiLCBKU09OLnN0cmluZ2lmeShxdWl6UmVzdWx0cykpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbGN1bGF0ZVJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCBxdWl6UmVzdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWl6UmVzdWx0c1wiKSk7XG5cbiAgICBjb25zb2xlLmxvZyhxdWl6UmVzdWx0cyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1aXpSZXN1bHRzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBxdWl6W2N1cnJlbnRJbmRleCArIDFdO1xuICAgIGlmIChuZXh0KSB7XG4gICAgICBzZXRWYWx1ZShcIlwiKTtcbiAgICAgIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RG9uZSh0cnVlKTtcbiAgICAgIGhhbmRsZUNhbGN1bGF0ZVJlc3VsdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjdXJyZW50ID0gcXVpeltjdXJyZW50SW5kZXhdO1xuICBjb25zdCBwZXJjZW50RG9uZSA9IE1hdGgucm91bmQoKChjdXJyZW50SW5kZXggKyAxKSAvIHF1aXoubGVuZ3RoKSAqIDEwMCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tbW9kYWxcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mb250YW5kY2VudGVyfT5RdWl6PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgdG9wc3BhY2VcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiXG4gICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VudERvbmV9JWAgfX1cbiAgICAgICAgICBhcmlhLXZhbHVlbm93PXtwZXJjZW50RG9uZX1cbiAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiXCJcbiAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwZXJjZW50RG9uZX0lXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9ybSBjbGFzc05hbWU9XCJ0b3BzcGFjZVwiPlxuICAgICAgICB7Y3VycmVudCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e2N1cnJlbnQucXVlc3Rpb259PC9zdHJvbmc+XG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICB7Y3VycmVudC5hbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiAoXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAga2V5PXthbnN3ZXIudmFsdWV9XG4gICAgICAgICAgICAgICAgICByYWRpb1xuICAgICAgICAgICAgICAgICAgbGFiZWw9e2Fuc3dlci50eHR9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3hSYWRpb0dyb3VwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbnN3ZXIudmFsdWV9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gYW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXshdmFsdWV9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgY2VudGVyLWl0ZW0gdG9wc3BhY2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})