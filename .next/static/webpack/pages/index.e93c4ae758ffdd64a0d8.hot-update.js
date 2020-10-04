webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _content_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/categories */ \"./content/categories.js\");\n/* harmony import */ var _content_categories__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_content_categories__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nfunction Quiz() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      done = _useState3[0],\n      setDone = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined),\n      chosenCategory = _useState4[0],\n      setChosenCategory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined),\n      results = _useState5[0],\n      setResults = _useState5[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    setValue(value);\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n    quizResults[currentIndex] = value;\n    localStorage.setItem(\"quizResults\", JSON.stringify(quizResults));\n  };\n\n  var handleCalculateResult = function handleCalculateResult() {\n    var results = [];\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n\n    var groupedCategories = lodash__WEBPACK_IMPORTED_MODULE_2__[\"groupBy\"](quizResults, \"category\");\n\n    var keys = Object.keys(groupedCategories);\n    keys.forEach(function (key) {\n      var points = groupedCategories[key].reduce(function (acc, obj) {\n        return acc + obj.points;\n      }, 0);\n      results.push(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, key, points));\n    });\n\n    var chosenCategory = lodash__WEBPACK_IMPORTED_MODULE_2__[\"maxBy\"](results, function (o) {\n      return o.spicy || o.ludicrous || o.fun;\n    });\n\n    console.log(chosenCategory, results);\n\n    if (results.spicy === 2 && results.fun === 2 && results.ludicrous === 2) {\n      setResults(results);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    localStorage.setItem(\"quizResults\", JSON.stringify([]));\n  }, []);\n\n  var handleNext = function handleNext() {\n    var next = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex + 1];\n\n    if (next) {\n      setValue(\"\");\n      setCurrentIndex(currentIndex + 1);\n    } else {\n      setDone(true);\n      handleCalculateResult();\n    }\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex];\n  var percentDone = Math.round((currentIndex + 1) / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100);\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(percentDone, \"%\")\n    },\n    \"aria-valuenow\": percentDone,\n    \"aria-valuemin\": \"\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, percentDone, \"%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, current ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 15\n    }\n  }, current.question)), current.answers.map(function (answer) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 15\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Checkbox\"], {\n      key: answer.value,\n      radio: true,\n      label: answer.txt,\n      name: \"checkboxRadioGroup\",\n      value: answer.value,\n      checked: value === answer.value,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }\n    }));\n  })) : null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    disabled: !value,\n    onClick: handleNext,\n    type: \"button\",\n    className: \"btn btn-success center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, \"Next\"))));\n}\n\n_s(Quiz, \"gboi+ZqkJ5iZ2JRfPuFu+DWmDoc=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImRvbmUiLCJzZXREb25lIiwidW5kZWZpbmVkIiwiY2hvc2VuQ2F0ZWdvcnkiLCJzZXRDaG9zZW5DYXRlZ29yeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInF1aXpSZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoYW5kbGVDYWxjdWxhdGVSZXN1bHQiLCJncm91cGVkQ2F0ZWdvcmllcyIsIl8iLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsInBvaW50cyIsInJlZHVjZSIsImFjYyIsIm9iaiIsInB1c2giLCJvIiwic3BpY3kiLCJsdWRpY3JvdXMiLCJmdW4iLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiaGFuZGxlTmV4dCIsIm5leHQiLCJxdWl6IiwiY3VycmVudCIsInBlcmNlbnREb25lIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwic3R5bGVzIiwiZm9udGFuZGNlbnRlciIsIndpZHRoIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwidHh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRVdGLHNEQUFRLENBQUMsQ0FBRCxDQUZuQjtBQUFBLE1BRXRCRyxZQUZzQjtBQUFBLE1BRVJDLGVBRlE7O0FBQUEs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Q0UsTUFBQywwREFBRDtBQUNFLFNBQUcsRUFBRUEsTUFBTSxDQUFDckQsS0FEZDtBQUVFLFdBQUssTUFGUDtBQUdFLFdBQUssRUFBRXFELE1BQU0sQ0FBQ0MsR0FIaEI7QUFJRSxVQUFJLEVBQUMsb0JBSlA7QUFLRSxXQUFLLEVBQUVELE1BQU0sQ0FBQ3JELEtBTGhCO0FBTUUsYUFBTyxFQUFFQSxLQUFLLEtBQUtxRCxNQUFNLENBQUNyRCxLQU41QjtBQU9FLGNBQVEsRUFBRVcsWUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEbUI7QUFBQSxHQUFwQixDQUpILENBRE0sR0FtQkosSUFwQk4sRUFxQkUsTUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsWUFBUSxFQUFFLENBQUNYLEtBRGI7QUFFRSxXQUFPLEVBQUV1QyxVQUZYO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxhQUFTLEVBQUMsc0NBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBckJGLENBZEYsQ0FERjtBQWlERDs7R0F2R3VCekMsSTs7S0FBQUEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUXVpei5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEZvcm0sIENoZWNrYm94IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBxdWl6IH0gZnJvbSBcIi4uL2NvbnRlbnQvcXVpelwiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4uL2NvbnRlbnQvY2F0ZWdvcmllc1wiO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaG9zZW5DYXRlZ29yeSwgc2V0Q2hvc2VuQ2F0ZWdvcnldID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgeyB2YWx1ZSB9KSA9PiB7XG4gICAgc2V0VmFsdWUodmFsdWUpO1xuICAgIGNvbnN0IHF1aXpSZXN1bHRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1aXpSZXN1bHRzXCIpKTtcbiAgICBxdWl6UmVzdWx0c1tjdXJyZW50SW5kZXhdID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWl6UmVzdWx0c1wiLCBKU09OLnN0cmluZ2lmeShxdWl6UmVzdWx0cykpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbGN1bGF0ZVJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgcXVpelJlc3VsdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicXVpelJlc3VsdHNcIikpO1xuICAgIGNvbnN0IGdyb3VwZWRDYXRlZ29yaWVzID0gXy5ncm91cEJ5KHF1aXpSZXN1bHRzLCBcImNhdGVnb3J5XCIpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhncm91cGVkQ2F0ZWdvcmllcyk7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHBvaW50cyA9IGdyb3VwZWRDYXRlZ29yaWVzW2tleV0ucmVkdWNlKFxuICAgICAgICAoYWNjLCBvYmopID0+IGFjYyArIG9iai5wb2ludHMsXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICByZXN1bHRzLnB1c2goeyBba2V5XTogcG9pbnRzIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hvc2VuQ2F0ZWdvcnkgPSBfLm1heEJ5KFxuICAgICAgcmVzdWx0cyxcbiAgICAgIChvKSA9PiBvLnNwaWN5IHx8IG8ubHVkaWNyb3VzIHx8IG8uZnVuXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhjaG9zZW5DYXRlZ29yeSwgcmVzdWx0cyk7XG4gICAgaWYgKHJlc3VsdHMuc3BpY3kgPT09IDIgJiYgcmVzdWx0cy5mdW4gPT09IDIgJiYgcmVzdWx0cy5sdWRpY3JvdXMgPT09IDIpIHtcbiAgICAgIHNldFJlc3VsdHMocmVzdWx0cyk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWl6UmVzdWx0c1wiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gcXVpeltjdXJyZW50SW5kZXggKyAxXTtcbiAgICBpZiAobmV4dCkge1xuICAgICAgc2V0VmFsdWUoXCJcIik7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERvbmUodHJ1ZSk7XG4gICAgICBoYW5kbGVDYWxjdWxhdGVSZXN1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3VycmVudCA9IHF1aXpbY3VycmVudEluZGV4XTtcbiAgY29uc3QgcGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKCgoY3VycmVudEluZGV4ICsgMSkgLyBxdWl6Lmxlbmd0aCkgKiAxMDApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1pbmZvLW1vZGFsXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZm9udGFuZGNlbnRlcn0+UXVpejwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHRvcHNwYWNlXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnREb25lfSVgIH19XG4gICAgICAgICAgYXJpYS12YWx1ZW5vdz17cGVyY2VudERvbmV9XG4gICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIlwiXG4gICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgID5cbiAgICAgICAgICB7cGVyY2VudERvbmV9JVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvcm0gY2xhc3NOYW1lPVwidG9wc3BhY2VcIj5cbiAgICAgICAge2N1cnJlbnQgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICA8c3Ryb25nPntjdXJyZW50LnF1ZXN0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAge2N1cnJlbnQuYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gKFxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGtleT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgcmFkaW9cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXthbnN3ZXIudHh0fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94UmFkaW9Hcm91cFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGFuc3dlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17IXZhbHVlfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGNlbnRlci1pdGVtIHRvcHNwYWNlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})