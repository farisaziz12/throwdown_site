webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Quiz.js":
/*!****************************!*\
  !*** ./components/Quiz.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quiz; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/quiz */ \"./content/quiz.js\");\n/* harmony import */ var _content_quiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_quiz__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/farisaziz/Desktop/Projecs/Throwdown_Site/throwdown_site/components/Quiz.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Quiz(props) {\n  _s();\n\n  var _this = this;\n\n  var close = props.close;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      value = _useState[0],\n      setValue = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      done = _useState3[0],\n      setDone = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined),\n      chosenCategory = _useState4[0],\n      setChosenCategory = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      results = _useState5[0],\n      setResults = _useState5[1];\n\n  var handleChange = function handleChange(e, _ref) {\n    var value = _ref.value;\n    setValue(value);\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n    quizResults[currentIndex] = value;\n    localStorage.setItem(\"quizResults\", JSON.stringify(quizResults));\n  };\n\n  var handleCalculateResult = function handleCalculateResult() {\n    var results = [];\n    var quizResults = JSON.parse(localStorage.getItem(\"quizResults\"));\n\n    var groupedCategories = lodash__WEBPACK_IMPORTED_MODULE_2__[\"groupBy\"](quizResults, \"category\");\n\n    var keys = Object.keys(groupedCategories);\n    keys.forEach(function (key) {\n      var points = groupedCategories[key].reduce(function (acc, obj) {\n        return acc + obj.points;\n      }, 0);\n      results.push(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, key, points));\n    });\n\n    var chosenCategory = lodash__WEBPACK_IMPORTED_MODULE_2__[\"maxBy\"](results, function (o) {\n      return o.spicy || o.ludicrous || o.fun;\n    });\n\n    if (results.spicy === 2 && results.fun === 2 && results.ludicrous === 2) {\n      setResults(results);\n    } else {\n      setChosenCategory(Object.keys(chosenCategory)[0]);\n      setResults(results);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    localStorage.setItem(\"quizResults\", JSON.stringify([]));\n  }, []);\n\n  var handleNext = function handleNext() {\n    var next = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex + 1];\n\n    if (next) {\n      setValue(\"\");\n      setCurrentIndex(currentIndex + 1);\n    } else {\n      setDone(true);\n      handleCalculateResult();\n    }\n  };\n\n  var current = _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"][currentIndex];\n  var percentDone = Math.round((currentIndex + 1) / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100);\n  return __jsx(\"div\", {\n    className: \"more-info-modal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, \"Quiz\"), !done && __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(percentDone, \"%\")\n    },\n    \"aria-valuenow\": percentDone,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, percentDone, \"%\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, !done ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, current.question)), current.answers.map(function (answer) {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 15\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Checkbox\"], {\n      key: answer.value,\n      radio: true,\n      label: answer.txt,\n      name: \"checkboxRadioGroup\",\n      value: answer.value,\n      checked: value === answer.value,\n      onChange: handleChange,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }\n    }));\n  })) : results && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fontandcenter,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 15\n    }\n  }, \"Results\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 17\n    }\n  }, \"Ideal category: \"), chosenCategory ? chosenCategory.replace(/^\\w/, function (c) {\n    return c.toUpperCase();\n  }) : \"Indecisive\"), __jsx(\"div\", {\n    className: \"topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 19\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 21\n    }\n  }, Object.keys(results[0])[0].replace(/^\\w/, function (c) {\n    return c.toUpperCase();\n  }), \":\"), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(Object.values(results[0])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100, \"%\")\n    },\n    \"aria-valuenow\": Object.values(results[0])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 23\n    }\n  }, Object.values(results[0])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100, \"%\"))), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 19\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 21\n    }\n  }, Object.keys(results[1])[0].replace(/^\\w/, function (c) {\n    return c.toUpperCase();\n  }), \":\")), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(Object.values(results[1])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100, \"%\")\n    },\n    \"aria-valuenow\": Object.values(results[1])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"0\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 21\n    }\n  }, Object.values(results[1])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100, \"%\")), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 19\n    }\n  }, __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 21\n    }\n  }, console.log(results), Object.keys(results[2])[0].replace(/^\\w/, function (c) {\n    return c.toUpperCase();\n  }), \":\")), __jsx(\"div\", {\n    className: \"progress topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 19\n    }\n  }, __jsx(\"div\", {\n    className: \"progress-bar\",\n    role: \"progressbar\",\n    style: {\n      width: \"\".concat(Object.values(results[2])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100, \"%\")\n    },\n    \"aria-valuenow\": Object.values(results[2])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100,\n    \"aria-valuemin\": \"\",\n    \"aria-valuemax\": \"100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 21\n    }\n  }, Object.values(results[2])[0] / _content_quiz__WEBPACK_IMPORTED_MODULE_5__[\"quiz\"].length * 100, \"%\"))))), !done ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 198,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    disabled: !value,\n    onClick: handleNext,\n    type: \"button\",\n    className: \"btn btn-success center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 13\n    }\n  }, \"Next\")) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Form\"].Field, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    onClick: close,\n    type: \"button\",\n    className: \"btn btn-primary center-item topspace\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 13\n    }\n  }, \"Done\"))));\n}\n\n_s(Quiz, \"WHe+1tj5TOniHLfbLHX/lfywD5E=\");\n\n_c = Quiz;\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6LmpzPzdkMDAiXSwibmFtZXMiOlsiUXVpeiIsInByb3BzIiwiY2xvc2UiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJkb25lIiwic2V0RG9uZSIsInVuZGVmaW5lZCIsImNob3NlbkNhdGVnb3J5Iiwic2V0Q2hvc2VuQ2F0ZWdvcnkiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJxdWl6UmVzdWx0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2FsY3VsYXRlUmVzdWx0IiwiZ3JvdXBlZENhdGVnb3JpZXMiLCJfIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJwb2ludHMiLCJyZWR1Y2UiLCJhY2MiLCJvYmoiLCJwdXNoIiwibyIsInNwaWN5IiwibHVkaWNyb3VzIiwiZnVuIiwidXNlRWZmZWN0IiwiaGFuZGxlTmV4dCIsIm5leHQiLCJxdWl6IiwiY3VycmVudCIsInBlcmNlbnREb25lIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwic3R5bGVzIiwiZm9udGFuZGNlbnRlciIsIndpZHRoIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwibWFwIiwiYW5zd2VyIiwidHh0IiwicmVwbGFjZSIsImMiLCJ0b1VwcGVyQ2FzZSIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxNQUMxQkMsS0FEMEIsR0FDaEJELEtBRGdCLENBQzFCQyxLQUQwQjs7QUFBQSxrQkFFUkMsc0RBQVEsQ0FBQyxFQUFELENBRkE7QUFBQSxNQUUzQkMs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RTtBQUNFLFdBQU8sRUFBRXZDLEtBRFg7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLGFBQVMsRUFBQyxzQ0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FoSUosQ0FoQkYsQ0FERjtBQThKRDs7R0F2TnVCRixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RdWl6LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgRm9ybSwgQ2hlY2tib3ggfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHF1aXogfSBmcm9tIFwiLi4vY29udGVudC9xdWl6XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXoocHJvcHMpIHtcbiAgY29uc3QgeyBjbG9zZSB9ID0gcHJvcHM7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RvbmUsIHNldERvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2hvc2VuQ2F0ZWdvcnksIHNldENob3NlbkNhdGVnb3J5XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgeyB2YWx1ZSB9KSA9PiB7XG4gICAgc2V0VmFsdWUodmFsdWUpO1xuICAgIGNvbnN0IHF1aXpSZXN1bHRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1aXpSZXN1bHRzXCIpKTtcbiAgICBxdWl6UmVzdWx0c1tjdXJyZW50SW5kZXhdID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWl6UmVzdWx0c1wiLCBKU09OLnN0cmluZ2lmeShxdWl6UmVzdWx0cykpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbGN1bGF0ZVJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgY29uc3QgcXVpelJlc3VsdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicXVpelJlc3VsdHNcIikpO1xuICAgIGNvbnN0IGdyb3VwZWRDYXRlZ29yaWVzID0gXy5ncm91cEJ5KHF1aXpSZXN1bHRzLCBcImNhdGVnb3J5XCIpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhncm91cGVkQ2F0ZWdvcmllcyk7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHBvaW50cyA9IGdyb3VwZWRDYXRlZ29yaWVzW2tleV0ucmVkdWNlKFxuICAgICAgICAoYWNjLCBvYmopID0+IGFjYyArIG9iai5wb2ludHMsXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICByZXN1bHRzLnB1c2goeyBba2V5XTogcG9pbnRzIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hvc2VuQ2F0ZWdvcnkgPSBfLm1heEJ5KFxuICAgICAgcmVzdWx0cyxcbiAgICAgIChvKSA9PiBvLnNwaWN5IHx8IG8ubHVkaWNyb3VzIHx8IG8uZnVuXG4gICAgKTtcbiAgICBpZiAocmVzdWx0cy5zcGljeSA9PT0gMiAmJiByZXN1bHRzLmZ1biA9PT0gMiAmJiByZXN1bHRzLmx1ZGljcm91cyA9PT0gMikge1xuICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q2hvc2VuQ2F0ZWdvcnkoT2JqZWN0LmtleXMoY2hvc2VuQ2F0ZWdvcnkpWzBdKTtcbiAgICAgIHNldFJlc3VsdHMocmVzdWx0cyk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWl6UmVzdWx0c1wiLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gcXVpeltjdXJyZW50SW5kZXggKyAxXTtcbiAgICBpZiAobmV4dCkge1xuICAgICAgc2V0VmFsdWUoXCJcIik7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERvbmUodHJ1ZSk7XG4gICAgICBoYW5kbGVDYWxjdWxhdGVSZXN1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3VycmVudCA9IHF1aXpbY3VycmVudEluZGV4XTtcbiAgY29uc3QgcGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKCgoY3VycmVudEluZGV4ICsgMSkgLyBxdWl6Lmxlbmd0aCkgKiAxMDApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1pbmZvLW1vZGFsXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZm9udGFuZGNlbnRlcn0+UXVpejwvaDE+XG4gICAgICB7IWRvbmUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHRvcHNwYWNlXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VudERvbmV9JWAgfX1cbiAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9e3BlcmNlbnREb25lfVxuICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BlcmNlbnREb25lfSVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPEZvcm0gY2xhc3NOYW1lPVwidG9wc3BhY2VcIj5cbiAgICAgICAgeyFkb25lID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgPHN0cm9uZz57Y3VycmVudC5xdWVzdGlvbn08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgIHtjdXJyZW50LmFuc3dlcnMubWFwKChhbnN3ZXIpID0+IChcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBrZXk9e2Fuc3dlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIHJhZGlvXG4gICAgICAgICAgICAgICAgICBsYWJlbD17YW5zd2VyLnR4dH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaGVja2JveFJhZGlvR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlID09PSBhbnN3ZXIudmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIHJlc3VsdHMgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZvbnRhbmRjZW50ZXJ9PlJlc3VsdHM8L2gxPlxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5JZGVhbCBjYXRlZ29yeTogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAge2Nob3NlbkNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICA/IGNob3NlbkNhdGVnb3J5LnJlcGxhY2UoL15cXHcvLCAoYykgPT4gYy50b1VwcGVyQ2FzZSgpKVxuICAgICAgICAgICAgICAgICAgOiBcIkluZGVjaXNpdmVcIn1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocmVzdWx0c1swXSlbMF0ucmVwbGFjZSgvXlxcdy8sIChjKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgYy50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzIHRvcHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKE9iamVjdC52YWx1ZXMocmVzdWx0c1swXSlbMF0gLyBxdWl6Lmxlbmd0aCkgKiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVub3c9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAoT2JqZWN0LnZhbHVlcyhyZXN1bHRzWzBdKVswXSAvIHF1aXoubGVuZ3RoKSAqIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhPYmplY3QudmFsdWVzKHJlc3VsdHNbMF0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwfSVcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXN1bHRzWzFdKVswXS5yZXBsYWNlKC9eXFx3LywgKGMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3QudmFsdWVzKHJlc3VsdHNbMV0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbm93PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3QudmFsdWVzKHJlc3VsdHNbMV0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHsoT2JqZWN0LnZhbHVlcyhyZXN1bHRzWzFdKVswXSAvIHF1aXoubGVuZ3RoKSAqIDEwMH0lXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHJlc3VsdHMpfVxuICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXN1bHRzWzJdKVswXS5yZXBsYWNlKC9eXFx3LywgKGMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBjLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyB0b3BzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3QudmFsdWVzKHJlc3VsdHNbMl0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbm93PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3QudmFsdWVzKHJlc3VsdHNbMl0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgeyhPYmplY3QudmFsdWVzKHJlc3VsdHNbMl0pWzBdIC8gcXVpei5sZW5ndGgpICogMTAwfSVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgICAgeyFkb25lID8gKFxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGNlbnRlci1pdGVtIHRvcHNwYWNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBjZW50ZXItaXRlbSB0b3BzcGFjZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERvbmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Quiz.js\n");

/***/ })

})