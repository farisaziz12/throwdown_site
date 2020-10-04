webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Quiz() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      done = _useState3[0],\n      setDone = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined),\n      chosenCategory = _useState4[0],\n      setChosenCategory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined),\n      results = _useState5[0],\n      setResults = _useState5[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    setValue(value);\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n    quizResults[currentIndex] = value;\n    localStorage.setItem(\"quizResults\", JSON.stringify(quizResults));\n  };\n\n  var handleCalculateResult = function handleCalculateResult() {\n    var results = [];\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n\n    var groupedCategories = lodash__WEBPACK_IMPORTED_MODULE_2__[\"groupBy\"](quizResults, \"category\");\n\n    var keys = Object.keys(groupedCategories);\n    keys.forEach(function (key) {\n      var points = groupedCategories[key].reduce(function (acc, obj) {\n        return acc + obj.points;\n      }, 0);\n      results.push(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, key, points));\n    });\n\n    var chosenCategory = lodash__WEBPACK_IMPORTED_MODULE_2__[\"maxBy\"](results, function (o) {\n      return o.spicy || o.ludicrous || o.fun;\n    });\n\n    if (results.spicy === 2 && results.fun === 2 && results.ludicrous === 2) {\n      setResults(results);\n    } else {\n      setChosenCategory(Object.keys(chosenCategory)[0]);\n      setResults(results);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    localStorage.setItem(\"quizResults\", JSON.stringify([]));\n  }, []);\n\n  var handleNext = function handleNext() {\n    var next = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex + 1];\n\n    if (next) {\n      setValue(\"\");\n      setCurrentIndex(currentIndex + 1);\n    } else {\n      setDone(true);\n      handleCalculateResult();\n    }\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex];\n  var percentDone = Math.round((currentIndex + 1) / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100);\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), !done && __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(percentDone, \"%\")\n    },\n    \"aria-valuenow\": percentDone,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, percentDone, \"%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, !done ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  }, current.question)), current.answers.map(function (answer) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 15\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Checkbox\"], {\n      key: answer.value,\n      radio: true,\n      label: answer.txt,\n      name: \"checkboxRadioGroup\",\n      value: answer.value,\n      checked: value === answer.value,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }\n    }));\n  })) : results && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }\n  }, \"Results\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 15\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  }, \"Ideal category:\"), chosenCategory ? chosenCategory.toUpperCase() : \"Indecisive\"), __jsx(\"div\", {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 15\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 19\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 21\n    }\n  }, \"ludicrous:\"), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: results[0].ludicrous / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100\n    },\n    \"aria-valuenow\": results[0].ludicrous / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 23\n    }\n  }, Math.round(results[0].ludicrous / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length) * 100, \"%\"))), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 19\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 21\n    }\n  }, \"Spicy:\")), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: results[1].spicy / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100\n    },\n    \"aria-valuenow\": results[1].spicy / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 21\n    }\n  }, Math.round(results[1].spicy / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length) * 100, \"%\")), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 19\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 21\n    }\n  }, \"Fun:\")), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: results[2].fun / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100\n    },\n    \"aria-valuenow\": results[2].fun / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 21\n    }\n  }, Math.round(results[2].fun / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length) * 100, \"%\"))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    disabled: !value,\n    onClick: handleNext,\n    type: \"button\",\n    className: \"btn btn-success center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 11\n    }\n  }, \"Next\"))));\n}\n\n_s(Quiz, \"gboi+ZqkJ5iZ2JRfPuFu+DWmDoc=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImRvbmUiLCJzZXREb25lIiwidW5kZWZpbmVkIiwiY2hvc2VuQ2F0ZWdvcnkiLCJzZXRDaG9zZW5DYXRlZ29yeSIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInF1aXpSZXN1bHRzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJoYW5kbGVDYWxjdWxhdGVSZXN1bHQiLCJncm91cGVkQ2F0ZWdvcmllcyIsIl8iLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsInBvaW50cyIsInJlZHVjZSIsImFjYyIsIm9iaiIsInB1c2giLCJvIiwic3BpY3kiLCJsdWRpY3JvdXMiLCJmdW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVOZXh0IiwibmV4dCIsInF1aXoiLCJjdXJyZW50IiwicGVyY2VudERvbmUiLCJNYXRoIiwicm91bmQiLCJsZW5ndGgiLCJzdHlsZXMiLCJmb250YW5kY2VudGVyIiwid2lkdGgiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJtYXAiLCJhbnN3ZXIiLCJ0eHQiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVXRixzREFBUSxDQUFDLENBQUQsQ0FGbkI7QUFBQSxNQUV0QkcsWUFGc0I7QUFBQSxNQUVSQyxlQUZROztBQUFBLG1CQUdMSixzREFBUSxD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OiIuL2NvbXBvbmVudHMvUXVpei5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEZvcm0sIENoZWNrYm94IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBxdWl6IH0gZnJvbSBcIi4uL2NvbnRlbnQvcXVpelwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6KCkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkb25lLCBzZXREb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nob3NlbkNhdGVnb3J5LCBzZXRDaG9zZW5DYXRlZ29yeV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCB7IHZhbHVlIH0pID0+IHtcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgY29uc3QgcXVpelJlc3VsdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicXVpelJlc3VsdHNcIikpO1xuICAgIHF1aXpSZXN1bHRzW2N1cnJlbnRJbmRleF0gPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1aXpSZXN1bHRzXCIsIEpTT04uc3RyaW5naWZ5KHF1aXpSZXN1bHRzKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FsY3VsYXRlUmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCBxdWl6UmVzdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJxdWl6UmVzdWx0c1wiKSk7XG4gICAgY29uc3QgZ3JvdXBlZENhdGVnb3JpZXMgPSBfLmdyb3VwQnkocXVpelJlc3VsdHMsIFwiY2F0ZWdvcnlcIik7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGdyb3VwZWRDYXRlZ29yaWVzKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgcG9pbnRzID0gZ3JvdXBlZENhdGVnb3JpZXNba2V5XS5yZWR1Y2UoXG4gICAgICAgIChhY2MsIG9iaikgPT4gYWNjICsgb2JqLnBvaW50cyxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICAgIHJlc3VsdHMucHVzaCh7IFtrZXldOiBwb2ludHMgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjaG9zZW5DYXRlZ29yeSA9IF8ubWF4QnkoXG4gICAgICByZXN1bHRzLFxuICAgICAgKG8pID0+IG8uc3BpY3kgfHwgby5sdWRpY3JvdXMgfHwgby5mdW5cbiAgICApO1xuICAgIGlmIChyZXN1bHRzLnNwaWN5ID09PSAyICYmIHJlc3VsdHMuZnVuID09PSAyICYmIHJlc3VsdHMubHVkaWNyb3VzID09PSAyKSB7XG4gICAgICBzZXRSZXN1bHRzKHJlc3VsdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDaG9zZW5DYXRlZ29yeShPYmplY3Qua2V5cyhjaG9zZW5DYXRlZ29yeSlbMF0pO1xuICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1aXpSZXN1bHRzXCIsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBxdWl6W2N1cnJlbnRJbmRleCArIDFdO1xuICAgIGlmIChuZXh0KSB7XG4gICAgICBzZXRWYWx1ZShcIlwiKTtcbiAgICAgIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RG9uZSh0cnVlKTtcbiAgICAgIGhhbmRsZUNhbGN1bGF0ZVJlc3VsdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjdXJyZW50ID0gcXVpeltjdXJyZW50SW5kZXhdO1xuICBjb25zdCBwZXJjZW50RG9uZSA9IE1hdGgucm91bmQoKChjdXJyZW50SW5kZXggKyAxKSAvIHF1aXoubGVuZ3RoKSAqIDEwMCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tbW9kYWxcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mb250YW5kY2VudGVyfT5RdWl6PC9oMT5cbiAgICAgIHshZG9uZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgdG9wc3BhY2VcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50RG9uZX0lYCB9fVxuICAgICAgICAgICAgYXJpYS12YWx1ZW5vdz17cGVyY2VudERvbmV9XG4gICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cGVyY2VudERvbmV9JVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8Rm9ybSBjbGFzc05hbWU9XCJ0b3BzcGFjZVwiPlxuICAgICAgICB7IWRvbmUgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICA8c3Ryb25nPntjdXJyZW50LnF1ZXN0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAge2N1cnJlbnQuYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gKFxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGtleT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgcmFkaW9cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXthbnN3ZXIudHh0fVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrYm94UmFkaW9Hcm91cFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IGFuc3dlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgcmVzdWx0cyAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZm9udGFuZGNlbnRlcn0+UmVzdWx0czwvaDE+XG4gICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPklkZWFsIGNhdGVnb3J5Ojwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIHtjaG9zZW5DYXRlZ29yeSA/IGNob3NlbkNhdGVnb3J5LnRvVXBwZXJDYXNlKCkgOiBcIkluZGVjaXNpdmVcIn1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5sdWRpY3JvdXM6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgdG9wc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAocmVzdWx0c1swXS5sdWRpY3JvdXMgLyBxdWl6Lmxlbmd0aCkgKiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW5vdz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHRzWzBdLmx1ZGljcm91cyAvIHF1aXoubGVuZ3RoKSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge01hdGgucm91bmQocmVzdWx0c1swXS5sdWRpY3JvdXMgLyBxdWl6Lmxlbmd0aCkgKiAxMDB9JVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3BpY3k6PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAocmVzdWx0c1sxXS5zcGljeSAvIHF1aXoubGVuZ3RoKSAqIDEwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9eyhyZXN1bHRzWzFdLnNwaWN5IC8gcXVpei5sZW5ndGgpICogMTAwfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKHJlc3VsdHNbMV0uc3BpY3kgLyBxdWl6Lmxlbmd0aCkgKiAxMDB9JVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkZ1bjo8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHRvcHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IChyZXN1bHRzWzJdLmZ1biAvIHF1aXoubGVuZ3RoKSAqIDEwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9eyhyZXN1bHRzWzJdLmZ1biAvIHF1aXoubGVuZ3RoKSAqIDEwMH1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtNYXRoLnJvdW5kKHJlc3VsdHNbMl0uZnVuIC8gcXVpei5sZW5ndGgpICogMTAwfSVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBjZW50ZXItaXRlbSB0b3BzcGFjZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV4dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})