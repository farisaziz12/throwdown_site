webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Quiz() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      done = _useState3[0],\n      setDone = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined),\n      chosenCategory = _useState4[0],\n      setChosenCategory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined),\n      results = _useState5[0],\n      setResults = _useState5[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    setValue(value);\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n    quizResults[currentIndex] = value;\n    localStorage.setItem(\"quizResults\", JSON.stringify(quizResults));\n  };\n\n  var handleCalculateResult = function handleCalculateResult() {\n    var results = [];\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n\n    var groupedCategories = lodash__WEBPACK_IMPORTED_MODULE_2__[\"groupBy\"](quizResults, \"category\");\n\n    var keys = Object.keys(groupedCategories);\n    keys.forEach(function (key) {\n      var points = groupedCategories[key].reduce(function (acc, obj) {\n        return acc + obj.points;\n      }, 0);\n      results.push(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, key, points));\n    });\n\n    var chosenCategory = lodash__WEBPACK_IMPORTED_MODULE_2__[\"maxBy\"](results, function (o) {\n      return o.spicy || o.ludicrous || o.fun;\n    });\n\n    if (results.spicy === 2 && results.fun === 2 && results.ludicrous === 2) {\n      setResults(results);\n    } else {\n      setChosenCategory(Object.keys(chosenCategory)[0].replace(/^\\w/, function (c) {\n        return c.toUpperCase();\n      }));\n      setResults(results);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    localStorage.setItem(\"quizResults\", JSON.stringify([]));\n  }, []);\n\n  var handleNext = function handleNext() {\n    var next = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex + 1];\n\n    if (next) {\n      setValue(\"\");\n      setCurrentIndex(currentIndex + 1);\n    } else {\n      setDone(true);\n      handleCalculateResult();\n    }\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex];\n  var percentDone = Math.round((currentIndex + 1) / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100);\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), !done && __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(percentDone, \"%\")\n    },\n    \"aria-valuenow\": percentDone,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, percentDone, \"%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, !done ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  }, current.question)), current.answers.map(function (answer) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 15\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Checkbox\"], {\n      key: answer.value,\n      radio: true,\n      label: answer.txt,\n      name: \"checkboxRadioGroup\",\n      value: answer.value,\n      checked: value === answer.value,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 17\n      }\n    }));\n  })) : results && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }, \"Results\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 15\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 17\n    }\n  }, \"Ideal category:\"), chosenCategory ? chosenCategory : \"Indecisive\"), __jsx(\"div\", {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 19\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 21\n    }\n  }, \"ludicrous:\"), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: results[0].ludicrous / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100\n    },\n    \"aria-valuenow\": results[0].ludicrous / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 23\n    }\n  }, Math.round(results[0].ludicrous / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length) * 100, \"%\"))), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 19\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 21\n    }\n  }, \"Spicy:\")), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: results[1].spicy / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100\n    },\n    \"aria-valuenow\": results[1].spicy / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 21\n    }\n  }, Math.round(results[1].spicy / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length) * 100, \"%\")), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 19\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 21\n    }\n  }, \"Fun:\")), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: results[2].fun / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100\n    },\n    \"aria-valuenow\": results[2].fun / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 21\n    }\n  }, Math.round(results[2].fun / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length) * 100, \"%\"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    disabled: !value,\n    onClick: handleNext,\n    type: \"button\",\n    className: \"btn btn-success center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 11\n    }\n  }, \"Next\"))));\n}\n\n_s(Quiz, \"gboi+ZqkJ5iZ2JRfPuFu+DWmDoc=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImRvbmUiLCJzZXREb25lIiwidW5kZWZpbmVkIiwiY2hvc2VuQ2F0ZWdvcnkiLCJzZXRDaG9zZW5DYXRlZ29yeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInF1aXpSZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoYW5kbGVDYWxjdWxhdGVSZXN1bHQiLCJncm91cGVkQ2F0ZWdvcmllcyIsIl8iLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsInBvaW50cyIsInJlZHVjZSIsImFjYyIsIm9iaiIsInB1c2giLCJvIiwic3BpY3kiLCJsdWRpY3JvdXMiLCJmdW4iLCJyZXBsYWNlIiwiYyIsInRvVXBwZXJDYXNlIiwidXNlRWZmZWN0IiwiaGFuZGxlTmV4dCIsIm5leHQiLCJxdWl6IiwiY3VycmVudCIsInBlcmNlbnREb25lIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwic3R5bGVzIiwiZm9udGFuZGNlbnRlciIsIndpZHRoIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwidHh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRVdGLHNEQUFRLENBQUMsQ0FBRCxDQUZuQjtBQUFBLE1BRXRCRyxZQUZzQjtBQUFBLE1BRVJDLGVBRlE7O0FBQUEs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBcEZGLENBaEJGLENBREY7QUFrSEQ7O0dBNUt1QjFDLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1aXouanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBGb3JtLCBDaGVja2JveCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgcXVpeiB9IGZyb20gXCIuLi9jb250ZW50L3F1aXpcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZG9uZSwgc2V0RG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjaG9zZW5DYXRlZ29yeSwgc2V0Q2hvc2VuQ2F0ZWdvcnldID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgeyB2YWx1ZSB9KSA9PiB7XG4gICAgc2V0VmFsdWUodmFsdWUpO1xuICAgIGNvbnN0IHF1aXpSZXN1bHRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1aXpSZXN1bHRzXCIpKTtcbiAgICBxdWl6UmVzdWx0c1tjdXJyZW50SW5kZXhdID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWl6UmVzdWx0c1wiLCBKU09OLnN0cmluZ2lmeShxdWl6UmVzdWx0cykpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbGN1bGF0ZVJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgcXVpelJlc3VsdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicXVpelJlc3VsdHNcIikpO1xuICAgIGNvbnN0IGdyb3VwZWRDYXRlZ29yaWVzID0gXy5ncm91cEJ5KHF1aXpSZXN1bHRzLCBcImNhdGVnb3J5XCIpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhncm91cGVkQ2F0ZWdvcmllcyk7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHBvaW50cyA9IGdyb3VwZWRDYXRlZ29yaWVzW2tleV0ucmVkdWNlKFxuICAgICAgICAoYWNjLCBvYmopID0+IGFjYyArIG9iai5wb2ludHMsXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICByZXN1bHRzLnB1c2goeyBba2V5XTogcG9pbnRzIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hvc2VuQ2F0ZWdvcnkgPSBfLm1heEJ5KFxuICAgICAgcmVzdWx0cyxcbiAgICAgIChvKSA9PiBvLnNwaWN5IHx8IG8ubHVkaWNyb3VzIHx8IG8uZnVuXG4gICAgKTtcbiAgICBpZiAocmVzdWx0cy5zcGljeSA9PT0gMiAmJiByZXN1bHRzLmZ1biA9PT0gMiAmJiByZXN1bHRzLmx1ZGljcm91cyA9PT0gMikge1xuICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q2hvc2VuQ2F0ZWdvcnkoXG4gICAgICAgIE9iamVjdC5rZXlzKGNob3NlbkNhdGVnb3J5KVswXS5yZXBsYWNlKC9eXFx3LywgKGMpID0+IGMudG9VcHBlckNhc2UoKSlcbiAgICAgICk7XG4gICAgICBzZXRSZXN1bHRzKHJlc3VsdHMpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicXVpelJlc3VsdHNcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IHF1aXpbY3VycmVudEluZGV4ICsgMV07XG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHNldFZhbHVlKFwiXCIpO1xuICAgICAgc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXREb25lKHRydWUpO1xuICAgICAgaGFuZGxlQ2FsY3VsYXRlUmVzdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnQgPSBxdWl6W2N1cnJlbnRJbmRleF07XG4gIGNvbnN0IHBlcmNlbnREb25lID0gTWF0aC5yb3VuZCgoKGN1cnJlbnRJbmRleCArIDEpIC8gcXVpei5sZW5ndGgpICogMTAwKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmUtaW5mby1tb2RhbFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZvbnRhbmRjZW50ZXJ9PlF1aXo8L2gxPlxuICAgICAgeyFkb25lICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiXG4gICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnREb25lfSVgIH19XG4gICAgICAgICAgICBhcmlhLXZhbHVlbm93PXtwZXJjZW50RG9uZX1cbiAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwZXJjZW50RG9uZX0lXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxGb3JtIGNsYXNzTmFtZT1cInRvcHNwYWNlXCI+XG4gICAgICAgIHshZG9uZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e2N1cnJlbnQucXVlc3Rpb259PC9zdHJvbmc+XG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICB7Y3VycmVudC5hbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiAoXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAga2V5PXthbnN3ZXIudmFsdWV9XG4gICAgICAgICAgICAgICAgICByYWRpb1xuICAgICAgICAgICAgICAgICAgbGFiZWw9e2Fuc3dlci50eHR9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tib3hSYWRpb0dyb3VwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthbnN3ZXIudmFsdWV9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gYW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICByZXN1bHRzICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mb250YW5kY2VudGVyfT5SZXN1bHRzPC9oMT5cbiAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SWRlYWwgY2F0ZWdvcnk6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAge2Nob3NlbkNhdGVnb3J5ID8gY2hvc2VuQ2F0ZWdvcnkgOiBcIkluZGVjaXNpdmVcIn1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5sdWRpY3JvdXM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgdG9wc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAocmVzdWx0c1swXS5sdWRpY3JvdXMgLyBxdWl6Lmxlbmd0aCkgKiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW5vdz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHRzWzBdLmx1ZGljcm91cyAvIHF1aXoubGVuZ3RoKSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQocmVzdWx0c1swXS5sdWRpY3JvdXMgLyBxdWl6Lmxlbmd0aCkgKiAxMDB9JVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3BpY3k6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAocmVzdWx0c1sxXS5zcGljeSAvIHF1aXoubGVuZ3RoKSAqIDEwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9eyhyZXN1bHRzWzFdLnNwaWN5IC8gcXVpei5sZW5ndGgpICogMTAwfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKHJlc3VsdHNbMV0uc3BpY3kgLyBxdWl6Lmxlbmd0aCkgKiAxMDB9JVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZ1bjo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHRvcHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IChyZXN1bHRzWzJdLmZ1biAvIHF1aXoubGVuZ3RoKSAqIDEwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9eyhyZXN1bHRzWzJdLmZ1biAvIHF1aXoubGVuZ3RoKSAqIDEwMH1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKHJlc3VsdHNbMl0uZnVuIC8gcXVpei5sZW5ndGgpICogMTAwfSVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBjZW50ZXItaXRlbSB0b3BzcGFjZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})