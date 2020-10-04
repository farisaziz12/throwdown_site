webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Quiz() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      done = _useState3[0],\n      setDone = _useState3[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    setValue(value);\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\")); // if (!quizResults[currentIndex] || quizResults[currentIndex] !== value) {\n\n    quizResults[currentIndex] = value;\n    localStorage.setItem(\"quizResults\", JSON.stringify(quizResults)); // }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    localStorage.setItem(\"quizResults\", JSON.stringify([]));\n  }, []);\n\n  var handleNext = function handleNext() {\n    var next = _content_quiz__WEBPACK_IMPORTED_MODULE_3__[\"quiz\"][currentIndex + 1];\n\n    if (next) {\n      setCurrentIndex(currentIndex + 1);\n    } else {\n      setDone(true);\n    }\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_3__[\"quiz\"][currentIndex];\n  var percentDone = Math.round((currentIndex + 1) / _content_quiz__WEBPACK_IMPORTED_MODULE_3__[\"quiz\"].length * 100);\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(percentDone, \"%\")\n    },\n    \"aria-valuenow\": percentDone,\n    \"aria-valuemin\": \"\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, percentDone, \"%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, current ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 15\n    }\n  }, current.question)), current.answers.map(function (answer) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"], {\n      key: answer.value,\n      radio: true,\n      label: answer.txt,\n      name: \"checkboxRadioGroup\",\n      value: answer.value,\n      checked: value === answer.value,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }\n    }));\n  })) : null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    disabled: !value,\n    onClick: handleNext,\n    type: \"button\",\n    className: \"btn btn-success center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, \"Next\"))));\n}\n\n_s(Quiz, \"yG2m01TbynmUxhOLeuBcTFblNGk=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImRvbmUiLCJzZXREb25lIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInF1aXpSZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1c2VFZmZlY3QiLCJoYW5kbGVOZXh0IiwibmV4dCIsInF1aXoiLCJjdXJyZW50IiwicGVyY2VudERvbmUiLCJNYXRoIiwicm91bmQiLCJsZW5ndGgiLCJzdHlsZXMiLCJmb250YW5kY2VudGVyIiwid2lkdGgiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJ0eHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLENBQUQsQ0FGbkI7QUFBQSxNQUV0QkcsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUFBLG1CQUdMSixzREFBUSxDQUFDLEtBQUQsQ0FISDtBQUFBLE1BR3RCSyxJQUhzQjtBQUFBLE1BR2hCQyxPQUhnQjs7QUFLN0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxRQUFrQjtBQUFBLFFBQVpQLEtBQVksUUFBWkEsS0FBWTtBQUNyQ0MsWUFBUSxDQUFDRCxLQUFELENBQVI7QUFDQSxRQUFNUSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBWCxDQUFwQixDQUZx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O0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxhQUFTLEVBQUMsc0NBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBckJGLENBZEYsQ0FERjtBQWlERDs7R0E5RXVCbEIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUXVpei5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBDaGVja2JveCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgcXVpeiB9IGZyb20gXCIuLi9jb250ZW50L3F1aXpcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHsgdmFsdWUgfSkgPT4ge1xuICAgIHNldFZhbHVlKHZhbHVlKTtcbiAgICBjb25zdCBxdWl6UmVzdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWl6UmVzdWx0c1wiKSk7XG4gICAgLy8gaWYgKCFxdWl6UmVzdWx0c1tjdXJyZW50SW5kZXhdIHx8IHF1aXpSZXN1bHRzW2N1cnJlbnRJbmRleF0gIT09IHZhbHVlKSB7XG4gICAgcXVpelJlc3VsdHNbY3VycmVudEluZGV4XSA9IHZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicXVpelJlc3VsdHNcIiwgSlNPTi5zdHJpbmdpZnkocXVpelJlc3VsdHMpKTtcbiAgICAvLyB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1aXpSZXN1bHRzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBxdWl6W2N1cnJlbnRJbmRleCArIDFdO1xuICAgIGlmIChuZXh0KSB7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERvbmUodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnQgPSBxdWl6W2N1cnJlbnRJbmRleF07XG4gIGNvbnN0IHBlcmNlbnREb25lID0gTWF0aC5yb3VuZCgoKGN1cnJlbnRJbmRleCArIDEpIC8gcXVpei5sZW5ndGgpICogMTAwKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmUtaW5mby1tb2RhbFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZvbnRhbmRjZW50ZXJ9PlF1aXo8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50RG9uZX0lYCB9fVxuICAgICAgICAgIGFyaWEtdmFsdWVub3c9e3BlcmNlbnREb25lfVxuICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCJcIlxuICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICA+XG4gICAgICAgICAge3BlcmNlbnREb25lfSVcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb3JtIGNsYXNzTmFtZT1cInRvcHNwYWNlXCI+XG4gICAgICAgIHtjdXJyZW50ID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgPHN0cm9uZz57Y3VycmVudC5xdWVzdGlvbn08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgIHtjdXJyZW50LmFuc3dlcnMubWFwKChhbnN3ZXIpID0+IChcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBrZXk9e2Fuc3dlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIHJhZGlvXG4gICAgICAgICAgICAgICAgICBsYWJlbD17YW5zd2VyLnR4dH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveFJhZGlvR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlID09PSBhbnN3ZXIudmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBjZW50ZXItaXRlbSB0b3BzcGFjZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})